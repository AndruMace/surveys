import React from 'react';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Login from './Login';
import ResetPassword from './ResetPassword';
import UpdateProfile from './UpdateProfile';
import CreateSurvey from './CreateSurvey';
import PrivateRoute from './PrivateRoute';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Container
			className='d-flex align-items-center justify-content-center'
			style={{ minHeight: '100vh' }}
		>
			<div className='w-100' style={{ maxWidth: '600px' }}>
				<Router>
					<AuthProvider>
						<Switch>
							<PrivateRoute exact path='/' component={Dashboard} />
							<PrivateRoute path='/create-survey' component={CreateSurvey} />
							<PrivateRoute path='/update-profile' component={UpdateProfile} />
							<Route path='/register' component={Signup} />
							<Route path='/login' component={Login} />
							<Route path='/reset-password' component={ResetPassword} />
						</Switch>
					</AuthProvider>
				</Router>
			</div>
		</Container>
	);
}

export default App;
