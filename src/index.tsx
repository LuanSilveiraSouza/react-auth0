import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
	  <Auth0Provider
		  domain='dev-0ugdv5r3.us.auth0.com'
		  clientId='o2YMyXOA6OXMHp4zCGkJg0sSdbEHKG8N'
		  redirectUri={`${window.location.origin}/gif`}
	  >
    	<App />
	  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
