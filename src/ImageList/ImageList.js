import React, { Component } from 'react'

import Image from '../Image/Image'

import './ImageList.css'

class ImageList extends Component {
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
