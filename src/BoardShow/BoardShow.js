import React, { Component } from 'react'

import BoardEdit from '../BoardEdit/BoardEdit'
import Image from '../Image/Image'
import {
	getBoard,
	deleteBoard,
	updateBoard,
	getImage,
	deleteBoardImage
} from '../services/piece-peace'

class BoardShow extends Component {
	constructor(props) {
		super(props)

		this.state = {
			board: {
				name: '',
				images: []
			},
			boardEditOn: false,
			imageEditOn: false,
			currentBoardId: '',
			imageToEditId: '',
			imageToEdit: {}
		}

		this.getBoard = getBoard.bind(this)
		this.deleteBoard = deleteBoard.bind(this)
		this.updateBoard = updateBoard.bind(this)
		this.getImage = getImage.bind(this)
		this.deleteBoardImage = deleteBoardImage.bind(this)
	}

	componentDidMount() {
		this.getBoard(this.props.match.params._id)
	}

	handleBoardEditOn(e) {
		this.setState({
			boardEditOn: true
		})
	}

	handleBoardCancel(e) {
		e.preventDefault()

		this.setState({
			boardEditOn: false
		})
	}

	handleBoardDelete(e) {
		e.preventDefault()

		this.deleteBoard(this.state.board._id)
	}

	handleBoardInput(e) {
		console.log(e.target.value)

		this.setState({
			board: {
				name: e.target.value,
				images: this.state.board.images
			}
		})
	}

	handleBoardEditSubmit(e) {
		e.preventDefault()

		this.updateBoard(this.props.match.params._id, this.state.board)

		this.setState({
			boardEditOn: false
		})
	}

	handleImageEdit(e) {
		e.preventDefault()

		this.setState(
			{
				imageEditOn: true,
				currentBoardId: this.props.match.params._id,
				imageToEditId: e.target.name
			},
			() => {
				this.getImage(this.state.imageToEditId)
			}
		)
	}

	handleImageCancel(e) {
		e.preventDefault()

		this.setState({
			imageEditOn: false
		})
	}

	handleImageDelete(e) {
		e.preventDefault()

		let imageToDeleteId = this.state.imageToEditId
		let currentBoardId = this.state.currentBoardId

		this.deleteBoardImage(currentBoardId, imageToDeleteId)

		this.setState({
			imageEditOn: false
		})
	}

	render() {
		return (
			<section>
				{!this.state.boardEditOn ? (
					<div>
						<h1>{this.state.board.name}</h1>
						<button onClick={e => this.handleBoardEditOn(e)}>Edit</button>
					</div>
				) : (
					<BoardEdit
						board={this.state.board}
						handleBoardInput={e => this.handleBoardInput(e)}
						handleBoardCancel={e => this.handleBoardCancel(e)}
						handleBoardDelete={e => this.handleBoardDelete(e)}
						handleBoardEditSubmit={e => this.handleBoardEditSubmit(e)}
					/>
				)}

				<Image
					images={this.state.board.images}
					showEdit={true}
					imageEditOn={this.state.imageEditOn}
					imageToEdit={this.state.imageToEdit}
					handleImageEdit={e => this.handleImageEdit(e)}
					handleImageCancel={e => this.handleImageCancel(e)}
					handleImageDelete={e => this.handleImageDelete(e)}
				/>
			</section>
		)
	}
}

export default BoardShow
