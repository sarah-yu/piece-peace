import React, { Component } from 'react'
import axios from 'axios'

class ImagesList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			images: []
		}
	}

	componentDidMount() {
		axios
			.get('http://localhost:3001/api/images')
			.then(response => {
				console.log(response)

				this.setState(
					{
						images: response.data
					},
					() => {
						console.log(this.state.images)
					}
				)
			})
			.catch(err => console.log(err))
	}

	render() {
		let images = this.state.images.map((image, index) => {
			return (
				<div key={index}>
					<img src={image.src} alt={image.description} />
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

export default ImagesList
