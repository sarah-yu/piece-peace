import React, { Component } from 'react'

// handle inputs
///// handle image origin --> can be blank, otherwise must be a URL
///// handle image description --> can be blank
///// handle image board (where to pin it) --> validate that a board was chosen
// POST: push image into chosen board's images --> do not create a new Image instance
// **POST from bookmarklet** create a new Image instance && push image into chosen board's images

class ImagePin extends Component {
	render() {
		console.log('in ImagePin component now!')
		console.log(this.props.imageToPin)

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
				<form>
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
						<button onClick={this.props.handlePinSave}>Save</button>
					</div>
				</form>
			</section>
		)
	}
}

export default ImagePin
