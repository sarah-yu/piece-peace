import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './BoardList.css'

class BoardList extends Component {
	render() {
		let boards = this.props.boards.map((board, index) => {
			return (
				<Link to={`/boards/${board._id}`} key={index}>
					<div className="board-summary-container">
						{board.images.length > 0 ? (
							<img
								src={board.images[board.images.length - 1].src}
								alt=""
								className="board-summary-img"
							/>
						) : (
							''
						)}
						<div className="board-summary-description">
							<h3 className="board-summary-name">{board.name}</h3>
							<p className="board-summary-num-imgs">
								{board.images.length} pins
							</p>
						</div>
					</div>
				</Link>
			)
		})
		return (
			<section>
				<div className="user-area">
					<div className="user-profile">
						<h2 className="username">Username</h2>
						<p className="boards-num">{this.props.boards.length} boards</p>
					</div>
					<div className="logout">
						<Link to="/logout">
							<i className="fa fa-sign-out" aria-hidden="true" /> Log out
						</Link>
					</div>
				</div>
				<div className="boards">
					<Link to="/boards/new">
						<div className="board-summary-container">
							<div className="board-create-img-placeholder">
								<i className="fa fa-plus-circle fa-3x" aria-hidden="true" />
							</div>
							<div className="board-summary-description">
								<h3 className="board-summary-name create-board-link">
									Create board
								</h3>
							</div>
						</div>
					</Link>
					{boards}
				</div>
			</section>
		)
	}
}

export default BoardList
