import React, { Component } from 'react'

import BoardEdit from '../BoardEdit/BoardEdit'
import { getBoard, deleteBoard, updateBoard } from '../services/piece-peace'

class BoardShow extends Component {
	constructor(props) {
		super(props)

		this.state = {
			board: {
				name: '',
				images: []
			},
			editOn: false
		}

		this.getBoard = getBoard.bind(this)
		this.deleteBoard = deleteBoard.bind(this)
		this.updateBoard = updateBoard.bind(this)

		// this.handleInput = this.handleInput.bind(this)
		// this.handleCancel = this.handleCancel.bind(this)
		// this.handleDelete = this.handleDelete.bind(this)
		// this.handleEditSubmit = this.handleEditSubmit.bind(this)
	}

	componentDidMount() {
		this.getBoard(this.props.match.params._id)
	}

	handleCancel(e) {
		e.preventDefault()

		this.setState({
			editOn: false
		})
	}

	handleDelete(e) {
		e.preventDefault()

		this.deleteBoard(this.state.board._id)
	}

	handleEditOn(e) {
		this.setState({
			editOn: true
		})
	}

	handleInput(e) {
		console.log(e.target.value)

		this.setState({
			board: {
				name: e.target.value,
				images: this.state.board.images
			}
		})
	}

	handleEditSubmit(e) {
		e.preventDefault()

		this.updateBoard(this.props.match.params._id, this.state.board)

		this.setState({
			editOn: false
		})
	}

	render() {
		console.log(this.state)
		console.log(this.state.board.images)

		console.log(this.state.editOn)

		let boardImages

		if (this.state.board.images) {
			boardImages = this.state.board.images.map((image, index) => {
				return (
					<div key={index} className="image">
						<img src={image.src} alt={image.description} />
						<h3>{image.description}</h3>
					</div>
				)
			})
		}

		return (
			<section>
				{!this.state.editOn ? (
					<div>
						<h1>{this.state.board.name}</h1>
						<button onClick={e => this.handleEditOn(e)}>Edit</button>
					</div>
				) : (
					<BoardEdit
						board={this.state.board}
						handleInput={e => this.handleInput(e)}
						handleCancel={e => this.handleCancel(e)}
						handleDelete={e => this.handleDelete(e)}
						handleEditSubmit={e => this.handleEditSubmit(e)}
					/>
				)}

				{this.state.board.images ? boardImages : 'loading...'}
			</section>
		)
	}
}

export default BoardShow
