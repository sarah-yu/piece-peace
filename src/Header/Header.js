import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => (
	<header>
		<nav>
			<Link to="/" className="logo">
				piece peace
			</Link>
			<Link to="/">home</Link>
			<Link to="/upload-image">upload</Link>
			<Link to="/boards">boards</Link>
			{localStorage.token ? (
				<Link to="/logout">logout</Link>
			) : (
				<Link to="/login">login</Link>
			)}
		</nav>
	</header>
)

export default Header
