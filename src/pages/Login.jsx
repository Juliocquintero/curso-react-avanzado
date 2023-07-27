import React, { useMemo } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import useLoginMutation from '../hooks/useLoginMutation';
import Loader from '../components/Loader';

const Login = () => {
	const auth = useAuth();
	const isAuth = useMemo(() => auth.user, [auth]);
	const location = useLocation();
	const state = location?.state;
	const prev = state?.prev;

	const navigate = useNavigate();
	const { login, loading, error } = useLoginMutation();

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
		login({ variables: variable }).then((resp) => {
			const token = resp?.data.login;
			handleLogin(token);
		});
	};

	return (
		<>
			<LoginForm
				handleSubmit={handleSubmit}
				title='Iniciar Sesión'
				disabled={loading}
			/>
			{loading && <Loader />}
			{error && <span style={{ color: 'red' }}>{error?.message}</span>}
			<span>
				¿Aún no tienes cuenta? <Link to='/register'>Registrate</Link>
			</span>
		</>
	);
};

export default Login;
