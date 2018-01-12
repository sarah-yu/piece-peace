import React, { Component } from 'react'

class ImageShow extends Component {
	render() {
		return (
			<div className="show-image-container">
				<img
					className="image show-image"
					src={this.props.imageToShow.src}
					alt={this.props.imageToShow.description}
				/>
			</div>
		)
	}
}

export default ImageShow
