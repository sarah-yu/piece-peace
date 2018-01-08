import React, { Component } from 'react'

class ImageEdit extends Component {
	render() {
		let boards = this.props.boards.map((board, index) => {
			return (
				<option key={index} value={board._id}>
					{board.name}
				</option>
			)
		})

		return (
			<section>
				<h1>Edit this image</h1>
				<form>
					<div>
						<label htmlFor="board">Board</label>
						<select
							value={this.props.newBoardId}
							onChange={this.props.handleImageBoardInput}
						>
							{boards}
						</select>
					</div>
					<div>
						<label htmlFor="origin">Origin </label>
						<input
							type="text"
							name="origin"
							value={this.props.imageToEdit.origin}
							onChange={this.props.handleImageInput}
						/>
					</div>
					<div>
						<label htmlFor="description">Description </label>
						<textarea
							name="description"
							value={this.props.imageToEdit.description}
							onChange={this.props.handleImageInput}
						/>
					</div>
					<div>
						<button onClick={this.props.handleImageDelete}>Delete</button>
						<button onClick={this.props.handleImageCancel}>Cancel</button>
						<button onClick={this.props.handleImageEditSubmit}>Save</button>
					</div>
				</form>
			</section>
		)
	}
}

export default ImageEdit
