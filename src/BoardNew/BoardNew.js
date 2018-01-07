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
		console.log(e.target.value)

		this.setState({
			board: {
				name: e.target.value
			}
		})
	}

	handleSubmit(e) {
		e.preventDefault()

		console.log(`the new board is: ${this.state.board.name}`)
		console.log(this.state)

		this.createBoard(this.state)
	}

	render() {
		return (
			<section>
				<h1>Create a new board</h1>
				<form onSubmit={e => this.handleSubmit(e)}>
					<p>
						<label htmlFor="board[name]">Name </label>
						<input
							type="text"
							name="board[name]"
							placeholder="Name your new board"
							onChange={e => this.handleInput(e)}
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
