import axios from 'axios'

let servicePath
// if (document.location.hostname === 'localhost') {
servicePath = 'http://localhost:3001/api'
// } else {
// 	servicePath = 'deployed api'
// }

export function getBoards() {
	axios
		.get(`${servicePath}/boards`)
		.then(response => {
			this.setState(
				{
					boards: response.data
				},
				() => {
					console.log(this.state.boards)
				}
			)
		})
		.catch(err => console.log(err))
}

export function getBoard(id) {
	axios
		.get(`${servicePath}/boards/${id}`)
		.then(response => {
			this.setState(
				{
					board: response.data
				},
				() => {
					console.log('got board!:')
					console.log(this.state.board.name)
				}
			)
		})
		.catch(err => console.log(err))
}

export function createBoard(newBoard) {
	axios
		.post(`${servicePath}/boards`, newBoard)
		.then(response => this.props.history.push(`/boards/${response.data._id}`))
		.catch(err => console.log(err))
}

export function deleteBoard(id) {
	axios
		.delete(`${servicePath}/boards/${id}`)
		.then(response => this.props.history.push('/boards'))
		.catch(err => console.log(err))
}

export function updateBoard(id, updatedBoard) {
	axios
		.put(`${servicePath}/boards/${id}`, updatedBoard)
		.then(response => {
			console.log('succesfully updated')
			this.props.history.push(`/boards/${response.data._id}`)
		})
		.catch(err => console.log(err))
}

export function getImages() {
	axios
		.get(`${servicePath}/images`)
		.then(response => {
			this.setState(
				{
					images: response.data
				},
				() => {
					console.log(this.state.images)
				}
			)
		})
		.catch(err => console.log(err))
}

export default {
	getBoards,
	getBoard,
	createBoard,
	deleteBoard,
	updateBoard,
	getImages
}
