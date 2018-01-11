import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

class Header extends Component {
	render() {
		return (
			<header>
				<nav>
					<Link to="/" className="logo">
						<span className="logo-piece">piece</span>
						<br />
						<span className="logo-peace">peace</span>
					</Link>
					<Link to="/">Home</Link>

					{localStorage.token ? (
						<Link to="/boards">
							<i className="fa fa-user-circle" aria-hidden="true" />{' '}
							{localStorage.username}
						</Link>
					) : (
						<Link to="/login" onClick={this.props.handleOpenLogin}>
							<i className="fa fa-user-circle" aria-hidden="true" /> Log In
						</Link>
					)}
				</nav>
			</header>
		)
	}
}

export default Header
