import React, { Component } from 'react'

import './BoardNew.css'

class BoardNew extends Component {
	handleCancel(e) {
		e.preventDefault()
		this.props.history.push('/boards')
	}

	render() {
		return (
			<section className="board-info board-new">
				<h2 className="board-new-title">Create a new board</h2>
				<form onSubmit={this.props.handleNewBoardSubmit}>
					<div className="form-section">
						<input
							type="text"
							name="name"
							placeholder="Name your new board"
							className="form-field"
							onChange={this.props.handleNewBoardInput}
						/>
					</div>
					<div className="form-section edit-btns">
						<button
							className="form-btn form-cancel-btn"
							onClick={e => this.handleCancel(e)}
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

export default BoardNew
