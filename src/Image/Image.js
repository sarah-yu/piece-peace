import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import ImageEdit from '../ImageEdit/ImageEdit'
import ImagePin from '../ImagePin/ImagePin'
import {
	getImage,
	getBoardImage,
	pinImageToBoard
} from '../services/piece-peace'

import './Image.css'

class Image extends Component {
	constructor(props) {
		super(props)

		this.state = {
			imageToPin: {},
			imagePinOn: false,
			newBoardId: ''
		}

		this.getImage = getImage.bind(this)
		this.getBoardImage = getBoardImage.bind(this)
		this.pinImageToBoard = pinImageToBoard.bind(this)
	}

	handlePin(e) {
		e.preventDefault()

		let currentBoardId = this.props.match.params._id
		let imageToPinId = e.target.name

		this.setState(
			{
				imagePinOn: true
			},
			() => {
				if (this.props.isBoardImage) {
					this.getBoardImage(currentBoardId, imageToPinId)
				} else {
					this.getImage(imageToPinId)
				}
			}
		)
	}

	handlePinInput(e) {
		let imageToPin = this.state.imageToPin
		imageToPin[e.target.name] = e.target.value

		this.setState({ imageToPin })
	}

	// handles dropdown (which board image will be pinned to)
	handlePinBoardInput(e) {
		this.setState({
			newBoardId: e.target.value
		})
	}

	handlePinCancel(e) {
		e.preventDefault()

		this.setState({
			imagePinOn: false
		})
	}

	handlePinSave(e) {
		e.preventDefault()

		let imageToPin = this.state.imageToPin

		let boardId
		if (!this.state.newBoardId) {
			boardId = this.props.boards[0]._id
		} else {
			boardId = this.state.newBoardId
		}

		if (this.props.validateImageMove(boardId, imageToPin._id)) {
			console.log('you can pin the image')

			this.pinImageToBoard(boardId, imageToPin)

			this.setState({
				imagePinOn: false
			})
		} else {
			alert('image already exists on that board')
		}
	}

	render() {
		let images = this.props.images.map((image, index) => {
			return (
				<div key={index} className="image-container">
					<div className="image">
						<img src={image.src} alt={image.description} />
					</div>
					<div className="image-edit">
						{this.props.isBoardImage ? (
							<button name={image._id} onClick={this.props.handleImageEditOn}>
								Edit
							</button>
						) : (
							''
						)}
						<button name={image._id} onClick={e => this.handlePin(e)}>
							Pin
						</button>
					</div>
					<h3>{image.description}</h3>
				</div>
			)
		})

		images = images.reverse()

		return this.props.imageEditOn ? (
			<div>
				<ImageEdit
					imageToEdit={this.props.imageToEdit}
					newBoardId={this.props.newBoardId}
					boards={this.props.boards}
					handleImageCancel={this.props.handleImageCancel}
					handleImageDelete={this.props.handleImageDelete}
					handleImageInput={this.props.handleImageInput}
					handleImageBoardInput={this.props.handleImageBoardInput}
					handleImageEditSubmit={this.props.handleImageEditSubmit}
				/>
			</div>
		) : this.state.imagePinOn ? (
			<ImagePin
				imageToPin={this.state.imageToPin}
				boards={this.props.boards}
				handlePinCancel={e => this.handlePinCancel(e)}
				handlePinInput={e => this.handlePinInput(e)}
				handlePinBoardInput={e => this.handlePinBoardInput(e)}
				handlePinSave={e => this.handlePinSave(e)}
			/>
		) : (
			<div className="images">{images}</div>
		)
	}
}

Image.propTypes = {
	images: PropTypes.array.isRequired,
	isBoardImage: PropTypes.bool.isRequired
}

export default withRouter(Image)
