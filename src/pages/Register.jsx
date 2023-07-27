import React, { useMemo } from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import useRegisterMutation from '../hooks/useRegisterMutation';
import Loader from '../components/Loader';

const Register = () => {
	const auth = useAuth();
	const isAuth = useMemo(() => auth.user, [auth]);
	const location = useLocation();
	const state = location?.state;
	const prev = state?.prev;

	const navigate = useNavigate();
	const { registerMutation, loading, error } = useRegisterMutation();

	if (isAuth) return <Navigate to='/' />;

	const handleNavigate = () => {
		navigate(prev);
	};

	const handleLogin = (data) => {
		auth.login(handleNavigate, data);
	};

	const handleSubmit = ({ email, password }) => {
		const input = { email, password };
		const variable = { input };
		registerMutation({ variables: variable }).then((resp) => {
			const token = resp?.data.signup;
			handleLogin(token);
		});
	};

	return (
		<>
			<LoginForm handleSubmit={handleSubmit} title='Registrarse' disabled={loading}/>
			{loading && <Loader />}
			{error && <span style={{ color: 'red' }}>{error?.message}</span>}
		</>
	);
};

export default Register;
