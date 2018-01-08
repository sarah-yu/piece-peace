import React, { Component } from 'react'

import BoardEdit from '../BoardEdit/BoardEdit'
import Image from '../Image/Image'
import {
	getBoard,
	deleteBoard,
	updateBoard,
	getBoardImage,
	deleteBoardImage,
	getBoards,
	updateBoardImage,
	removeImageFromBoard,
	pinImageToBoard
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
			imageToEditId: '', // for finding the image to be edited/deleted
			imageToEdit: {
				src: '',
				origin: '',
				description: ''
			}, // for displaying and updating in image edit
			boards: [], // for displaying in image edit dropdown,
			newBoardId: '' // for when user chooses board in image edit dropdown
		}

		this.getBoard = getBoard.bind(this)
		this.deleteBoard = deleteBoard.bind(this)
		this.updateBoard = updateBoard.bind(this)
		this.getBoardImage = getBoardImage.bind(this)
		this.deleteBoardImage = deleteBoardImage.bind(this)
		this.getBoards = getBoards.bind(this)
		this.updateBoardImage = updateBoardImage.bind(this)
		this.removeImageFromBoard = removeImageFromBoard.bind(this)
		this.pinImageToBoard = pinImageToBoard.bind(this)
	}

	componentDidMount() {
		this.getBoard(this.props.match.params._id)
		this.getBoards() // for dropdowns in editing and pinning
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

	handleImageEditOn(e) {
		e.preventDefault()

		this.setState(
			{
				imageEditOn: true,
				imageToEditId: e.target.name,
				newBoardId: this.props.match.params._id
			},
			() => {
				let boardId = this.state.board._id
				let imageId = this.state.imageToEditId

				this.getBoardImage(boardId, imageId)
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
		let newBoardId = this.state.board._id

		this.deleteBoardImage(newBoardId, imageToDeleteId)

		this.setState({
			imageEditOn: false
		})
	}

	handleImageInput(e) {
		e.preventDefault()

		let updatedImage = this.state.imageToEdit
		updatedImage[e.target.name] = e.target.value

		this.setState({ updatedImage }, () => {
			console.log(this.state.imageToEdit)
		})
	}

	// handles dropdown (updating the board that image belongs to)
	handleImageBoardInput(e) {
		e.preventDefault()

		console.log(e.target.value)

		this.setState(
			{
				newBoardId: e.target.value
			},
			() => {
				console.log(this.state.newBoardId)
			}
		)
	}

	handleImageEditSubmit(e) {
		e.preventDefault()

		let currentBoardId = this.state.board._id
		let newBoardId = this.state.newBoardId
		let imageId = this.state.imageToEditId
		let updatedBoardImage = this.state.imageToEdit

		if (currentBoardId === newBoardId) {
			this.updateBoardImage(
				newBoardId, // because board is staying the same
				imageId,
				updatedBoardImage
			)
		} else {
			this.removeImageFromBoard(currentBoardId, imageId)
			this.pinImageToBoard(newBoardId, updatedBoardImage)
		}

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
					isBoardImage={true}
					imageEditOn={this.state.imageEditOn}
					imageToEdit={this.state.imageToEdit}
					newBoardId={this.state.newBoardId}
					boards={this.state.boards}
					handleImageEditOn={e => this.handleImageEditOn(e)}
					handleImageCancel={e => this.handleImageCancel(e)}
					handleImageDelete={e => this.handleImageDelete(e)}
					handleImageInput={e => this.handleImageInput(e)}
					handleImageBoardInput={e => this.handleImageBoardInput(e)}
					handleImageEditSubmit={e => this.handleImageEditSubmit(e)}
				/>
			</section>
		)
	}
}

export default BoardShow
