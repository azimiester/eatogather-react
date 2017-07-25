import React, { Component } from 'react';
import axios from 'axios';
import config from './config';
import Header from './Header';
import Spinner from './Utils/Spinner';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isApiCalled: false,
			message: '',
			email: '',
			password: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}

	handlePasswordChange(e) {
		this.setState({ password: e.target.value });
	}

	handleEmailChange(e) {
		this.setState({ email: e.target.value });
	}

	handleFormSubmit(e) {
		e.preventDefault();
		this.setState({ isApiCalled: true });
		const params = {
			method: 'post',
			url: `${config.apiEndPoint}users/authenticate`,
			data: {
				email: this.state.email,
				password: this.state.password
			}
		};
		axios(params)
			.then(resp => {
				this.setState({ isApiCalled: false });
				if (resp.message) {
					localStorage.setItem('token', resp.message);
					localStorage.setItem('data', resp.data);
				} else {
					this.setState({ message: resp.message });
				}
			})
			.catch(() => {
				this.setState({ isApiCalled: false });
				this.setState({ message: 'some error occoured' });
			});
	}
	render() {
		let utilSpace = '';
		if (this.state.isApiCalled) {
			utilSpace = <Spinner />;
		}
		return (
			<div className="page loginPage">
				<Header />
				<div className="LoginBox">
					{utilSpace}
					<form onSubmit={this.handleFormSubmit}>
						<p>{this.state.message}</p>
						<label htmlFor="uname"><b>Username</b></label>
						<input
							type="text"
							placeholder="Enter Email"
							value={this.state.email}
							onChange={this.handleEmailChange}
							required
						/>
						<label htmlFor="psw"><b>Password</b></label>
						<input
							type="password"
							placeholder="Enter Password"
							value={this.state.password}
							onChange={this.handlePasswordChange}
							required
						/>
						<button type="submit">Login</button>

					</form>
				</div>
			</div>
		);
	}
}

export default LoginPage;
