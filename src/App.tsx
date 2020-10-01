import React from 'react';
import { Layout, Form, Input, Button } from 'antd';
import { HeartFilled, LockFilled } from '@ant-design/icons';

import 'antd/dist/antd.css';
import './App.css';

const { Header, Footer, Content } = Layout;

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

function App() {
	return (
		<Layout className='page-wraper'>
			<Header className='header'>
				<LockFilled className='header-icon' />
				<h1 className='header-title'>SecretGIF.com</h1>
			</Header>

			<Content className='content'>
				<Form
					{...layout}
					name='Login'
					onFinish={() => {}}
					onFinishFailed={() => {}}
				>
					<h1 className="form-title">Fazer Login</h1>

					<Form.Item
						label='Usuário'
						name='username'
						rules={[
							{
								required: true,
								message: 'Por favor, insira seu usuário',
							},
						]}
					>
						<Input placeholder="luanSS" />
					</Form.Item>

					<Form.Item
						label='Senha'
						name='password'
						rules={[
							{
								required: true,
								message: 'Por favor, insira sua senha',
							},
						]}
					>
						<Input.Password placeholder="Mínimo 4 caracteres!" />
					</Form.Item>

					<Form.Item {...tailLayout}>
						<Button type='primary' htmlType='submit'>
							Entrar
						</Button>
					</Form.Item>
				</Form>
			</Content>

			<Footer className='footer'>
				<h3>
					Made with <HeartFilled /> by Luan Souza
				</h3>
			</Footer>
		</Layout>
	);
}

export default App;
