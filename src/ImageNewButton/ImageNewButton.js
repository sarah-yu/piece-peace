import React from 'react'
import { Link } from 'react-router-dom'

const ImageNewButton = () => (
	<Link to="/images/new">
		<button className="image-new-btn">
			<i className="fa fa-plus fa-2x" aria-hidden="true" />
		</button>
	</Link>
)

export default ImageNewButton
