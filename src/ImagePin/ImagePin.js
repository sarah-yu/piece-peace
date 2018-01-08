import React, { Component } from 'react'

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
			<section>
				<h1>Pin to a board</h1>
				<form onSubmit={this.props.handlePinSave}>
					<div>
						<label htmlFor="board">Board</label>
						<select onChange={this.props.handlePinBoardInput}>{boards}</select>
					</div>
					<div>
						<label htmlFor="origin">Origin </label>
						<input
							type="text"
							name="origin"
							value={this.props.imageToPin.origin}
							onChange={this.props.handlePinInput}
						/>
					</div>
					<div>
						<label htmlFor="description">Description </label>
						<textarea
							name="description"
							value={this.props.imageToPin.description}
							onChange={this.props.handlePinInput}
						/>
					</div>
					<div>
						<button onClick={this.props.handlePinCancel}>Cancel</button>
						<button type="submit">Save</button>
					</div>
				</form>
			</section>
		)
	}
}

export default ImagePin
