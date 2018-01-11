import React, { Component } from 'react'

import { createBoard } from '../services/piece-peace'

class BoardNew extends Component {
	constructor(props) {
		super(props)

		this.state = {
			board: {
				name: ''
			}
		}

		this.createBoard = createBoard.bind(this)
	}

	handleInput(e) {
		this.setState({
			board: {
				name: e.target.value
			}
		})
	}

	handleSubmit(e) {
		e.preventDefault()

		this.createBoard(this.state)
	}

	render() {
		return (
			<section>
				<h1>Create a new board</h1>
				<form onSubmit={this.props.handleNewBoardSubmit}>
					<p>
						<label htmlFor="board[name]">Name </label>
						<input
							type="text"
							name="name"
							placeholder="What's the name of your board?"
							onChange={this.props.handleNewBoardInput}
						/>
					</p>
					<p>
						<input type="submit" />
					</p>
				</form>
			</section>
		)
	}
}

export default BoardNew
