import React from 'react';
import { Button, Image } from 'antd';

import { useAuth0 } from '@auth0/auth0-react';

import loginImg from '../assets/login.svg';

const Login: React.FC = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<>
			<Image src={loginImg} className='content-img' />

			<div className="content-text">
				<h1 className='form-title'>Fazer Login</h1>

				<Button
					type='primary'
					size='large'
					onClick={() => {
						loginWithRedirect();
					}}
				>
					Login
				</Button>
			</div>
		</>
	);
};

export default Login;
