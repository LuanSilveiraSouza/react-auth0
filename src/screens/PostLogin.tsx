import React from 'react';
import { Row, Col } from 'antd';

interface PostLoginProps {
	user: string;
}

const PostLogin: React.FC<PostLoginProps> = ({ user }) => {
	return (
		<Row justify='center' align='middle'>
			<Col>
				<h1>Login Aproved</h1>

				<h1>Hello {user || 'Person'}! Feeling Warm Here?</h1>
				<img
					src='https://media.giphy.com/media/UBYJ4k7FLULPq/source.gif'
					alt='fireplace'
				/>
			</Col>
		</Row>
	);
};

export default PostLogin;
