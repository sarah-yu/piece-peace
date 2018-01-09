import React, { Component } from 'react'

class Logout extends Component {
	componentDidMount() {
		localStorage.token = ''
		this.props.history.push('/')

		console.log('logout successful')
	}

	render() {
		return <div />
	}
}

export default Logout
