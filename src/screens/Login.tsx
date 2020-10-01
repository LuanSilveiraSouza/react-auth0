import React from 'react';
import { Button, Image, Row, Col, Divider } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

import { useAuth0 } from '@auth0/auth0-react';

import loginImg from '../assets/login.svg';

const Login: React.FC = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<Row justify='center' align='middle'>
			<Col lg={12}>
				<Image src={loginImg} />
			</Col>

			<Col lg={8}>
				<h1 className='login-title'>SecretGIF</h1>

				<h2>Faça login e descubra o segredo...</h2>

				<Divider />

				<Row justify='center'>
					<Button
						type='primary'
						size='large'
						icon={<LoginOutlined />}
						onClick={() => {
							loginWithRedirect();
						}}
					>
						Login
					</Button>
				</Row>
			</Col>
		</Row>
	);
};

export default Login;
