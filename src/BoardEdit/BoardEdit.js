import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './BoardEdit.css'
import '../Form.css'

class BoardEdit extends Component {
	render() {
		return (
			<section className="board-info">
				<h2 className="board-edit-title">Edit board name</h2>
				<form>
					<div>
						<input
							type="text"
							name="board[name]"
							className="form-field"
							value={this.props.board.name}
							onChange={this.props.handleBoardInput}
						/>
					</div>
					<div className="form-section edit-btns">
						<button className="form-btn" onClick={this.props.handleBoardDelete}>
							Delete
						</button>
						<button className="form-btn" onClick={this.props.handleBoardCancel}>
							Cancel
						</button>
						<button
							className="form-btn"
							onClick={this.props.handleBoardEditSubmit}
						>
							Save
						</button>
					</div>
				</form>
			</section>
		)
	}
}

export default withRouter(BoardEdit)
