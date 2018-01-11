import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import Header from './Header/Header'
import ImageList from './ImageList/ImageList'
import BoardList from './BoardList/BoardList'
import BoardShow from './BoardShow/BoardShow'
import BoardNew from './BoardNew/BoardNew'
import Login from './Account/Login'
import Logout from './Account/Logout'
import Register from './Account/Register'
import { getBoards, getImages, createBoard } from './services/piece-peace'

import './App.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			boards: [],
			images: [],
			newBoard: {
				name: ''
			}
		}

		this.validateImageMove = this.validateImageMove.bind(this)

		this.getBoards = getBoards.bind(this)
		this.getImages = getImages.bind(this)
		this.createBoard = createBoard.bind(this)
	}

	componentDidMount() {
		this.getBoards()
		this.getImages()
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

	render() {
		return (
			<div>
				<Header />
				<main>
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
								/>
							)}
						/>
						<Route exact path="/login" render={props => <Login {...props} />} />
						<Route
							exact
							path="/logout"
							render={props => <Logout {...props} />}
						/>
						<Route
							exact
							path="/register"
							render={props => <Register {...props} />}
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

						<Route path="/*" render={() => <Redirect to="/" />} />
					</Switch>
				</main>
			</div>
		)
	}
}

export default withRouter(App)
