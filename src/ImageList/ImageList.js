import React, { Component } from 'react'

import Image from '../Image/Image'
// import { getImages, getBoards } from '../services/piece-peace'

import './ImageList.css'

class ImageList extends Component {
	// constructor(props) {
	// 	super(props)
	//
	// 	this.state = {
	// 		images: [],
	// 		boards: [] // for displaying boards in image pin dropdown
	// 	}
	//
	// 	this.getImages = getImages.bind(this)
	// 	this.getBoards = getBoards.bind(this)
	// }
	//
	// componentDidMount() {
	// 	this.getImages()
	// 	this.getBoards()
	// }

	render() {
		return (
			<section>
				<h1>All Images</h1>
				<Image
					images={this.props.images}
					isBoardImage={false}
					boards={this.props.boards}
					validateImageMove={this.props.validateImageMove}
				/>
			</section>
		)
	}
}

export default ImageList
