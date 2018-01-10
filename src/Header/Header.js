import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => (
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
					<i className="fa fa-user-circle" aria-hidden="true" /> Username
				</Link>
			) : (
				<Link to="/login">
					<i className="fa fa-user-circle" aria-hidden="true" /> Log In
				</Link>
			)}
		</nav>
	</header>
)

export default Header
