import React, { Component } from 'react'

class ImageEdit extends Component {
	render() {
		return (
			<div>
				<h1>Edit this image</h1>
				<form>
					<div>
						<label htmlFor="image[origin]">Origin </label>
						<input
							type="text"
							name="image[origin]"
							value={this.props.imageToEdit.origin}
						/>
					</div>
					<div>
						<label htmlFor="image[description]">Description </label>
						<textarea
							name="image[description]"
							value={this.props.imageToEdit.description}
						/>
					</div>
					<div>
						<button onClick={this.props.handleImageDelete}>Delete</button>
						<button onClick={this.props.handleImageCancel}>Cancel</button>
						<button>Save</button>
					</div>
				</form>
			</div>
		)
	}
}

export default ImageEdit
