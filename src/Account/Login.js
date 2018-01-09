import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getToken } from '../services/piece-peace'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			user: {
				email: '',
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

		let email = this.state.user.email
		let password = this.state.user.password
		let login = 'login'

		this.getToken(login, email, password)
	}

	render() {
		return (
			<section>
				<h1>Login</h1>
				<form onSubmit={e => this.handleSubmit(e)}>
					<div>
						<label htmlFor="email">Email</label>
						<br />
						<input
							type="text"
							name="email"
							placeholder="Email"
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
						<button type="submit">Login</button>
					</div>
				</form>
				<div>
					<p>
						Not signed up? Register <Link to="/register">here</Link>.
					</p>
				</div>
			</section>
		)
	}
}

export default Login
