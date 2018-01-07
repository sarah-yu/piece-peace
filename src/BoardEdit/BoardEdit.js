import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class BoardEdit extends Component {
	render() {
		return (
			<section>
				<h1>Edit</h1>
				<form>
					<div>
						<label htmlFor="board[name]">Name </label>
						<input
							type="text"
							name="board[name]"
							value={this.props.board.name}
							onChange={this.props.handleInput}
						/>
					</div>
					<div>
						<button onClick={this.props.handleDelete}>Delete</button>
						<button onClick={this.props.handleCancel}>Cancel</button>
						<button onClick={this.props.handleEditSubmit}>Save</button>
					</div>
				</form>
			</section>
		)
	}
}

export default withRouter(BoardEdit)
