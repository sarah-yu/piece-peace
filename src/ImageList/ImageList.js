import React, { Component } from 'react'

import Image from '../Image/Image'
import ImageNewButton from '../ImageNewButton/ImageNewButton'

import './ImageList.css'

class ImageList extends Component {
	render() {
		return (
			<section>
				<Image
					images={this.props.images}
					isBoardImage={false}
					boards={this.props.boards}
					validateImageMove={this.props.validateImageMove}
				/>
				{localStorage.token ? <ImageNewButton /> : ''}
			</section>
		)
	}
}

export default ImageList
