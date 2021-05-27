import React from 'react';
import Signup from './User/Signup';
import Dashboard from './User/Dashboard';
import Login from './User/Login';
import ResetPassword from './User/ResetPassword';
import UpdateProfile from './User/UpdateProfile';
import CreateSurvey from './Survey/CreateSurvey';
import PreCreateSurvey from './Survey/PreCreateSurvey';
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
							<PrivateRoute
								path='/create-survey/:title'
								component={CreateSurvey}
							/>
							<PrivateRoute path='/create-survey' component={PreCreateSurvey} />
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
