import React, { Component } from 'react'

import { getBoard } from '../services/piece-peace'

class BoardShow extends Component {
	constructor(props) {
		super(props)

		this.state = {
			board: {}
		}

		this.getBoard = getBoard.bind(this)
	}

	componentDidMount() {
		this.getBoard(this.props.match.params._id)
	}

	render() {
		console.log(this.state.board.images)

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
			<div>
				<h1>{this.state.board.name}</h1>
				{this.state.board.images ? boardImages : 'loading...'}
			</div>
		)
	}
}

export default BoardShow
