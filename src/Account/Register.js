import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { getToken } from '../services/piece-peace'

import './Account.css'
import '../Form.css'

class Register extends Component {
	constructor(props) {
		super(props)

		this.state = {
			user: {
				username: '',
				password: '',
				confirmPassword: ''
			}
		}

		this.getToken = getToken.bind(this)
	}

	validate(username, password, confirmPassword) {
		if (password === confirmPassword && password.length >= 8) {
			return true
		} else {
			return false
		}
	}

	handleInput(e) {
		let user = this.state.user
		user[e.target.name] = e.target.value

		this.setState({ user })
	}

	handleSubmit(e) {
		e.preventDefault()

		let username = this.state.user.username
		let password = this.state.user.password
		let confirmPassword = this.state.user.confirmPassword
		let register = 'register'

		if (this.validate(username, password, confirmPassword)) {
			this.getToken(register, username, password)
		} else {
			console.log('invalid registration')
		}
	}

	render() {
		return (
			<section>
				<h1>Register</h1>
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
						<label htmlFor="confirmPassword" className="form-label">
							Confirm Password
						</label>
						<br />
						<input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							className="form-field"
							onChange={e => this.handleInput(e)}
						/>
					</div>
					<div className="form-section">
						<button type="submit" className="form-btn">
							Register
						</button>
					</div>
				</form>
			</section>
		)
	}
}

export default withRouter(Register)
