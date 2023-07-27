import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useMemo } from 'react';

const ProtectedRoute = ({ children }) => {
	const auth = useAuth();
	const isAuth = useMemo(() => auth.user, [auth]);
	const { pathname } = useLocation();

	if (!isAuth) {
		return <Navigate to='/login' replace state={{ prev: pathname }} />;
	}

	return children;
};
export default ProtectedRoute;
