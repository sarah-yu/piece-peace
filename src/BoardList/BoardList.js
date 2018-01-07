import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { getBoards } from '../services/piece-peace'

import './BoardList.css'

class BoardList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			boards: []
		}

		this.getBoards = getBoards.bind(this)
	}

	componentDidMount() {
		this.getBoards()
	}

	render() {
		let boards = this.state.boards.map((board, index) => {
			return (
				<div key={index}>
					<Link to={`/boards/${board._id}`}>
						{board.images.length > 0 ? (
							<div className="board-summary-img">
								<img src={board.images[board.images.length - 1].src} alt="" />
							</div>
						) : (
							''
						)}
						<h2>{board.name}</h2>
					</Link>
				</div>
			)
		})
		return (
			<section>
				<h1>My Boards - {this.state.boards.length} boards</h1>
				<h2>
					<Link to="/boards/new">Create a new board</Link>
				</h2>
				{boards}
			</section>
		)
	}
}

export default BoardList
