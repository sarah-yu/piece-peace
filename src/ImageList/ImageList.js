import React, { Component } from 'react'

import Image from '../Image/Image'

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
			</section>
		)
	}
}

export default ImageList
