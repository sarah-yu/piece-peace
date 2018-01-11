import React, { Component } from 'react'

import '../Form.css'
import './ImageEdit.css'

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
			<section className="image-edit-container">
				<h2>Edit this image</h2>
				<form>
					<div className="form-sides">
						<div className="form-section form-left form-image">
							<img
								src={this.props.imageToEdit.src}
								alt={this.props.imageToEdit.description}
							/>
						</div>

						<div className="form-right">
							<div className="form-section">
								<label htmlFor="board" className="form-label">
									Board
								</label>
								<br />
								<select
									value={this.props.newBoardId}
									className="form-field"
									onChange={this.props.handleImageBoardInput}
								>
									{boards}
								</select>
							</div>
							<div className="form-section">
								<label htmlFor="origin" className="form-label">
									Origin{' '}
								</label>
								<br />
								<input
									type="text"
									name="origin"
									value={this.props.imageToEdit.origin}
									className="form-field"
									onChange={this.props.handleImageInput}
								/>
							</div>
							<div className="form-section">
								<label htmlFor="description" className="form-label">
									Description{' '}
								</label>
								<br />
								<textarea
									name="description"
									value={this.props.imageToEdit.description}
									className="form-field"
									onChange={this.props.handleImageInput}
								/>
							</div>
						</div>
					</div>

					<div className="form-section edit-btns image-edit-btns">
						<button
							className="form-btn form-delete-btn"
							onClick={this.props.handleImageDelete}
						>
							Delete
						</button>
						<button
							className="form-btn form-cancel-btn"
							onClick={this.props.handleImageCancel}
						>
							Cancel
						</button>
						<button
							className="form-btn"
							onClick={this.props.handleImageEditSubmit}
						>
							Save
						</button>
					</div>
				</form>
			</section>
		)
	}
}

export default ImageEdit
