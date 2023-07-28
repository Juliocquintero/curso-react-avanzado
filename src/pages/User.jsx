import React from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const User = () => {
	const auth = useAuth();
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/');
	};

	const handleLogout = (data) => {
		auth.logout(handleNavigate, data);
	};
	return (
		<div>
			<button onClick={handleLogout}>Cerrar sesión</button>
		</div>
	);
};

export default User;
