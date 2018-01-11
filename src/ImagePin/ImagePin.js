import React, { Component } from 'react'

import '../Form.css'
import './ImagePin.css'

class ImagePin extends Component {
	render() {
		let boards = this.props.boards.map((board, index) => {
			return (
				<option key={index} value={board._id}>
					{board.name}
				</option>
			)
		})

		return (
			<section className="image-pin-container">
				<h2>Pin to a board</h2>
				<form onSubmit={this.props.handlePinSave}>
					<div className="form-sides">
						<div className="form-section form-left form-image">
							<img
								src={this.props.imageToPin.src}
								alt={this.props.imageToPin.description}
							/>
						</div>

						<div className="form-right">
							<div className="form-section">
								<label htmlFor="board" className="form-label">
									Board
								</label>
								<br />
								<select
									className="form-field"
									onChange={this.props.handlePinBoardInput}
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
									value={this.props.imageToPin.origin}
									className="form-field"
									onChange={this.props.handlePinInput}
								/>
							</div>
							<div className="form-section">
								<label htmlFor="description" className="form-label">
									Description{' '}
								</label>
								<br />
								<textarea
									name="description"
									value={this.props.imageToPin.description}
									className="form-field"
									onChange={this.props.handlePinInput}
								/>
							</div>
						</div>
					</div>

					<div className="form-section edit-btns image-edit-btns">
						<button
							className="form-btn form-cancel-btn"
							onClick={this.props.handlePinCancel}
						>
							Cancel
						</button>
						<button type="submit" className="form-btn">
							Save
						</button>
					</div>
				</form>
			</section>
		)
	}
}

export default ImagePin
