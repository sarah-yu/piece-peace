import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import ReactModal from 'react-modal'

import Header from './Header/Header'
import ImageList from './ImageList/ImageList'
import BoardList from './BoardList/BoardList'
import BoardShow from './BoardShow/BoardShow'
import BoardNew from './BoardNew/BoardNew'
import Login from './Account/Login'
import Logout from './Account/Logout'
import Register from './Account/Register'
import ImageNew from './ImageNew/ImageNew'
import ImageUpload from './ImageUpload/ImageUpload'

import {
	getBoards,
	getImages,
	createBoard,
	createImage,
	pinImageToBoard
} from './services/piece-peace'

import './App.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			boards: [],
			images: [],
			newBoard: {
				name: ''
			},
			showLogin: false,
			showRegister: false,
			newImage: {
				boardId: '',
				src: '',
				origin: '',
				description: ''
			}
		}

		this.validateImageMove = this.validateImageMove.bind(this)
		this.handleOpenLogin = this.handleOpenLogin.bind(this)
		this.handleCloseLogin = this.handleCloseLogin.bind(this)
		this.handleOpenRegister = this.handleOpenRegister.bind(this)
		this.handleCloseRegister = this.handleCloseRegister.bind(this)

		this.getBoards = getBoards.bind(this)
		this.getImages = getImages.bind(this)
		this.createBoard = createBoard.bind(this)
		this.createImage = createImage.bind(this)
		this.pinImageToBoard = pinImageToBoard.bind(this)
	}

	componentDidMount() {
		this.getBoards()
		this.getImages()

		ReactModal.setAppElement('#main')
		ReactModal.defaultStyles.overlay.top = '70px'
		ReactModal.defaultStyles.content.width = '500px'
		ReactModal.defaultStyles.content.height = '600px'
		ReactModal.defaultStyles.content.border = '1px solid #f2f2f2'
		ReactModal.defaultStyles.content.borderRadius = '5px'
	}

	handleOpenLogin() {
		this.setState({
			showLogin: true,
			showRegister: false
		})
	}

	handleCloseLogin() {
		this.setState({
			showLogin: false
		})
	}

	handleOpenRegister() {
		this.setState({
			showRegister: true,
			showLogin: false
		})
	}

	handleCloseRegister() {
		this.setState({
			showRegister: false
		})
	}

	handleNewBoardInput(e) {
		console.log(e.target.value)
		this.setState({
			newBoard: {
				name: e.target.value
			}
		})
	}

	handleNewBoardSubmit(e) {
		e.preventDefault()

		this.createBoard(this.state.newBoard)
	}

	// same image (identical image._id) cannot be pinned to same board twice
	validateImageMove(boardId, imageId) {
		// find the board in question
		let board = this.state.boards.filter(board => board._id === boardId)
		board = board[0]
		// find the image that is to be moved/pinned
		let image = board.images.filter(image => image._id === imageId)

		// check if board already contains that image
		if (image.length > 0) {
			return false
		} else {
			return true
		}
	}

	handleImageNewInput(e) {
		e.preventDefault()

		let newImage = this.state.newImage
		newImage[e.target.name] = e.target.value
		this.setState({ newImage })
	}

	handleImageNewSubmit(e) {
		e.preventDefault()

		let newImage = {
			src: this.state.newImage.src,
			origin: this.state.newImage.origin,
			description: this.state.newImage.description
		}

		let boardId = this.state.newImage.boardId

		if (newImage.src && boardId) {
			this.createImage(newImage)
			this.pinImageToBoard(boardId, newImage)
		} else {
			console.log('need at least board and image url')
		}
	}

	handleImageNewCancel(e) {
		e.preventDefault()

		this.props.history.push('/')
	}

	render() {
		return (
			<div>
				<Header handleOpenLogin={this.handleOpenLogin} />
				<main id="main">
					<ReactModal
						isOpen={this.state.showLogin}
						contentLabel="Login"
						onRequestClose={this.handleCloseLogin}
					>
						<Login
							handleCloseLogin={this.handleCloseLogin}
							handleOpenRegister={this.handleOpenRegister}
						/>
					</ReactModal>
					<ReactModal
						isOpen={this.state.showRegister}
						contentLabel="Register"
						onRequestClose={this.handleCloseRegister}
					>
						<Register handleCloseRegister={this.handleCloseRegister} />
					</ReactModal>
					<Switch>
						<Route
							exact
							path="/"
							render={props => (
								<ImageList
									{...props}
									images={this.state.images}
									boards={this.state.boards}
									validateImageMove={this.validateImageMove}
									handleImageNew={e => this.handleImageNew(e)}
								/>
							)}
						/>
						<Route
							exact
							path="/logout"
							render={props => <Logout {...props} />}
						/>
						<Route
							exact
							path="/boards"
							render={props => (
								<BoardList {...props} boards={this.state.boards} />
							)}
						/>
						<Route
							exact
							path="/boards/new"
							render={props => (
								<BoardNew
									{...props}
									handleNewBoardInput={e => this.handleNewBoardInput(e)}
									handleNewBoardSubmit={e => this.handleNewBoardSubmit(e)}
								/>
							)}
						/>
						<Route
							exact
							path="/boards/:_id"
							render={props => (
								<BoardShow
									{...props}
									boards={this.state.boards}
									validateImageMove={this.validateImageMove}
								/>
							)}
						/>
						<Route
							exact
							path="/images/new"
							render={props => (
								<ImageNew
									{...props}
									boards={this.state.boards}
									handleImageNewInput={e => this.handleImageNewInput(e)}
									handleImageNewSubmit={e => this.handleImageNewSubmit(e)}
									handleImageNewCancel={e => this.handleImageNewCancel(e)}
								/>
							)}
						/>
						<Route
							exact
							path="/upload"
							render={props => <ImageUpload {...props} />}
						/>

						<Route path="/*" render={() => <Redirect to="/" />} />
					</Switch>
				</main>
			</div>
		)
	}
}

export default withRouter(App)
