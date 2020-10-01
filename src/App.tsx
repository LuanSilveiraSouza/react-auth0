import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { HeartFilled, LockFilled } from '@ant-design/icons';

import { useAuth0 } from '@auth0/auth0-react';

import Login from './screens/Login';
import PostLogin from './screens/PostLogin';

import 'antd/dist/antd.css';
import './App.css';

const { Header, Footer, Content } = Layout;

const App: FC = () => {
	const { isAuthenticated, user} = useAuth0();

	return (
		<Layout className='page-wraper'>
			<Header className='header'>
				<LockFilled className='header-icon' />
				<h1 className='header-title'>SecretGIF.com</h1>
			</Header>

			<Content className='content'>
				<Router>
					<Switch>
						<Route exact path='/'>
							<Login />
						</Route>
						<Route path='/gif'>
							{isAuthenticated && <PostLogin user={user.name}/>}
						</Route>
					</Switch>
				</Router>
			</Content>

			<Footer className='footer'>
				<h3 className='footer-text'>
					Made with <HeartFilled className='footer-heart' /> by Luan
					Souza
				</h3>
			</Footer>
		</Layout>
	);
};

export default App;
