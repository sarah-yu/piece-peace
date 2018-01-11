import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { getToken } from '../services/piece-peace'

import './Account.css'
import '../Form.css'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			user: {
				username: '',
				password: ''
			}
		}

		this.getToken = getToken.bind(this)
	}

	handleInput(e) {
		let user = this.state
		user[e.target.name] = e.target.value

		this.setState({ user })
	}

	handleSubmit(e) {
		e.preventDefault()

		let username = this.state.user.username
		let password = this.state.user.password
		let login = 'login'

		this.getToken(login, username, password)
	}

	render() {
		return (
			<section>
				<h1>Login</h1>
				<form onSubmit={e => this.handleSubmit(e)}>
					<div className="form-section">
						<label htmlFor="username" className="form-label">
							Username
						</label>
						<br />
						<input
							type="text"
							name="username"
							placeholder="Username"
							className="form-field"
							onChange={e => this.handleInput(e)}
						/>
					</div>
					<div className="form-section">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<br />
						<input
							type="password"
							name="password"
							placeholder="Password"
							className="form-field"
							onChange={e => this.handleInput(e)}
						/>
					</div>
					<div className="form-section">
						<button type="submit" className="form-btn">
							Login
						</button>
					</div>
				</form>
				<div>
					<p>
						Not signed up? Register{' '}
						<Link
							to="/register"
							onClick={this.props.handleOpenRegister}
							className="link-to-register"
						>
							here
						</Link>.
					</p>
				</div>
			</section>
		)
	}
}

export default withRouter(Login)
