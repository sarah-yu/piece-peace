import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import ImageEdit from '../ImageEdit/ImageEdit'

import './Image.css'

class Image extends Component {
	render() {
		let images = this.props.images.map((image, index) => {
			return (
				<div key={index} className="image-container">
					<div className="image">
						<img src={image.src} alt={image.description} />
					</div>
					<div className="image-edit">
						{this.props.showEdit ? (
							<button name={image._id} onClick={this.props.handleImageEdit}>
								Edit
							</button>
						) : (
							''
						)}
						<button>Save</button>
					</div>
					<h3>{image.description}</h3>
				</div>
			)
		})

		return !this.props.imageEditOn ? (
			<div className="images">{images}</div>
		) : (
			<div>
				<ImageEdit
					imageToEdit={this.props.imageToEdit}
					currentBoardId={this.props.currentBoardId}
					handleImageCancel={this.props.handleImageCancel}
					handleImageDelete={this.props.handleImageDelete}
				/>
			</div>
		)
	}
}

Image.propTypes = {
	images: PropTypes.array.isRequired,
	showEdit: PropTypes.bool.isRequired
}

export default withRouter(Image)
