import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getToken } from '../services/piece-peace'

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
					<div>
						<label htmlFor="username">Username</label>
						<br />
						<input
							type="text"
							name="username"
							placeholder="Username"
							onChange={e => this.handleInput(e)}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<br />
						<input
							type="password"
							name="password"
							placeholder="Password"
							onChange={e => this.handleInput(e)}
						/>
					</div>
					<div>
						<label htmlFor="confirmPassword">Confirm Password</label>
						<br />
						<input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							onChange={e => this.handleInput(e)}
						/>
					</div>
					<div>
						<button type="submit">Register</button>
					</div>
				</form>
				<div>
					<p>
						Already have an account? Log in <Link to="/login">here</Link>.
					</p>
				</div>
			</section>
		)
	}
}

export default Register
