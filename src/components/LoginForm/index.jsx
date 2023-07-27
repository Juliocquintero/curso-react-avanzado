import React from 'react';
import useInputValue from '../../hooks/useInputValue';
import { Button, Form, Input, Title } from './style';

const LoginForm = ({ handleSubmit, title, disabled }) => {
	const email = useInputValue();
	const password = useInputValue();

	const onSubmit = (e) => {
		e.preventDefault();
		handleSubmit({
			email: email.value,
			password: password.value,
		});
	};

	return (
		<>
			<Title>{title}</Title>
			<Form onSubmit={onSubmit} disabled={disabled}>
				<Input type='text' placeholder='Email' {...email} disabled={disabled} />
				<Input
					type='password'
					placeholder='Password'
					{...password}
					disabled={disabled}
				/>

				<Button>{title}</Button>
			</Form>
		</>
	);
};

export default LoginForm;
