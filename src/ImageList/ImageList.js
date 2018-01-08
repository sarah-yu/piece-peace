import React, { Component } from 'react'

import Image from '../Image/Image'
import { getImages } from '../services/piece-peace'

import './ImageList.css'

class ImageList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			images: []
		}

		this.getImages = getImages.bind(this)
	}

	componentDidMount() {
		this.getImages()
	}

	render() {
		return (
			<section>
				<h1>All Images</h1>
				<Image images={this.state.images} showEdit={false} />
			</section>
		)
	}
}

export default ImageList
