import React, { Component } from 'react'
import { uploadImage } from '../services/piece-peace'

class ImageUpload extends Component {
	constructor(props) {
		super(props)

		this.state = {
			image: ''
		}

		this.uploadImage = uploadImage.bind(this)
	}

	handleChange(e) {
		console.log(e.target.value)

		this.setState(
			{
				[e.target.name]: e.target.value
			},
			() => {
				console.log('state:')
				console.log(this.state)
			}
		)
	}

	handleSubmit(e) {
		e.preventDefault()

		this.uploadImage(this.state)
	}

	render() {
		return (
			<div>
				<form
					encType="multipart/form-data"
					onSubmit={e => this.handleSubmit(e)}
				>
					<div>
						<label htmlFor="image">Upload Image</label>
						<br />
						<input
							type="file"
							name="image"
							onChange={e => this.handleChange(e)}
						/>
					</div>

					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		)
	}
}

export default ImageUpload
