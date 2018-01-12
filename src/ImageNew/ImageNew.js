import React, { Component } from 'react'

import './ImageNew.css'

class ImageNew extends Component {
	render() {
		let boards = this.props.boards.map((board, index) => {
			return (
				<option key={index} value={board._id}>
					{board.name}
				</option>
			)
		})

		return (
			<section className="image-new-container">
				<h2>Create a new pin</h2>
				<form>
					<div className="form-section">
						<label htmlFor="board" className="form-label">
							Board
						</label>
						<br />
						<select
							className="form-field"
							name="boardId"
							defaultValue=""
							onChange={this.props.handleImageNewInput}
						>
							<option value="" disabled>
								Choose a board
							</option>
							{boards}
						</select>
					</div>
					<div className="form-section">
						<label htmlFor="src" className="form-label">
							Image URL{' '}
						</label>
						<br />
						<input
							type="text"
							name="src"
							placeholder="What's the image URL?"
							className="form-field"
							onChange={this.props.handleImageNewInput}
						/>
					</div>
					<div className="form-section">
						<label htmlFor="origin" className="form-label">
							Origin{' '}
						</label>
						<br />
						<input
							type="text"
							name="origin"
							placeholder="i.e. www.itsnicethat.com"
							className="form-field"
							onChange={this.props.handleImageNewInput}
						/>
					</div>
					<div className="form-section">
						<label htmlFor="description" className="form-label">
							Description{' '}
						</label>
						<br />
						<textarea
							name="description"
							placeholder="What is this image about?"
							className="form-field"
							onChange={this.props.handleImageNewInput}
						/>
					</div>

					<div className="form-section edit-btns image-edit-btns">
						<button
							className="form-btn form-cancel-btn"
							onClick={this.props.handleImageNewCancel}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="form-btn"
							onClick={this.props.handleImageNewSubmit}
						>
							Save
						</button>
					</div>
				</form>
			</section>
		)
	}
}

export default ImageNew
