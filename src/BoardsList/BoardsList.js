import React, { Component } from 'react'
import axios from 'axios'

class BoardsList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			boards: []
		}
	}

	componentDidMount() {
		axios
			.get('http://localhost:3001/api/boards')
			.then(response => {
				console.log(response)
				this.setState(
					{
						boards: response.data
					},
					() => {
						console.log(this.state.boards)
					}
				)
			})
			.catch(err => console.log(err))
	}

	render() {
		let boards = this.state.boards.map((board, index) => {
			return (
				<div key={index}>
					<h2>{board.name}</h2>
				</div>
			)
		})
		return (
			<section>
				<h1>My Boards - {this.state.boards.length} boards</h1>
				{boards}
			</section>
		)
	}
}

export default BoardsList
