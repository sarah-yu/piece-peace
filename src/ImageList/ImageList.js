import React, { Component } from 'react'

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
		let images = this.state.images.map((image, index) => {
			return (
				<div key={index}>
					<div className="image">
						<img src={image.src} alt={image.description} />
					</div>
					<h3>{image.description}</h3>
				</div>
			)
		})
		return (
			<section>
				<h1>All Images</h1>
				{images}
			</section>
		)
	}
}

export default ImageList
