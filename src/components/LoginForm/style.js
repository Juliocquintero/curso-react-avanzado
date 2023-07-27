import { styled } from 'styled-components';

export const Form = styled.form`
	padding: 16px 0;
`;

export const Title = styled.h2`
	font-size: 16px;
	font-weight: 500px;
	padding: 8px 0;
	text-align: center;
`;

export const Input = styled.input`
	border: 1px solid #ccc;
	border-radius: 8px;
	margin-bottom: 5px;
	padding: 8px 4px;
	display: block;
	width: 100%;
  &[disabled]{
    opacity: .3;
  }
`;

export const Button = styled.button`
	background-color: #0f00ff;
	border-radius: 5px;
	color: #fff;
	height: 32px;
	display: block;
	width: 100%;
  cursor: pointer;
`;
