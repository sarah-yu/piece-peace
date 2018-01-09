import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './Header/Header'
import ImageList from './ImageList/ImageList'
import ImageUpload from './ImageUpload/ImageUpload'
import BoardList from './BoardList/BoardList'
import BoardShow from './BoardShow/BoardShow'
import BoardNew from './BoardNew/BoardNew'
import { getBoards, getImages } from './services/piece-peace'

import './App.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			boards: [],
			images: []
		}

		this.getBoards = getBoards.bind(this)
		this.getImages = getImages.bind(this)

		this.validateImageMove = this.validateImageMove.bind(this)
	}

	componentDidMount() {
		this.getBoards()
		this.getImages()
	}

	// same image (identical image._id) cannot be pinned to same board twice
	validateImageMove(boardId, imageId) {
		// takes a board id and an image id and checks if the board already contains that image
		console.log('validate image move!')
		console.log('board:')
		console.log(boardId)
		console.log('image')
		console.log(imageId)

		let board = this.state.boards.filter(board => board._id === boardId)
		board = board[0]
		let image = board.images.filter(image => image._id === imageId)

		if (image.length > 0) {
			// alert(`image already exists on ${board.name}`)
			return false
		} else {
			// alert(`you may move the image to ${board.name}`)
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
						<Route
							exact
							path="/upload-image"
							render={props => <ImageUpload {...props} />}
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
							render={props => <BoardNew {...props} />}
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

export default App
