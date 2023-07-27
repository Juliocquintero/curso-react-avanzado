import { useState } from 'react';
import { authContext } from './AuthContext';
const fakeAuth = {
	isAuthenticated: false,
	login(cb) {
		fakeAuth.isAuthenticated = true;
		setTimeout(cb, 100); // fake async
	},
	logout(cb) {
		fakeAuth.isAuthenticated = false;
		setTimeout(cb, 100);
	},
};

function useProvideAuth() {
	const [user, setUser] = useState(() => {
		try {
			return window.sessionStorage.getItem('token');
		} catch (error) {
			return null;
		}
	});

	const login = (cb, token) => {
		return fakeAuth.login(() => {
			setUser({
				user: 'User',
				token,
			});
			window.sessionStorage.setItem('token', token);
			cb();
		});
	};

	const logout = (cb) => {
		return fakeAuth.logout(() => {
			setUser(null);
			cb();
			window.sessionStorage.removeItem('token');
		});
	};

	return {
		user,
		login,
		logout,
	};
}
const AuthProvider = ({ children }) => {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
export default AuthProvider;
