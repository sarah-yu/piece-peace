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
			this.setState({
				boards: response.data
			})
		})
		.catch(err => console.log(err))
}

export function getBoard(id) {
	axios
		.get(`${servicePath}/boards/${id}`)
		.then(response => {
			this.setState({
				board: response.data
			})
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
			this.setState({
				images: response.data
			})
		})
		.catch(err => console.log(err))
}

export function getImage(id) {
	axios
		.get(`${servicePath}/images/${id}`)
		.then(response => {
			this.setState({
				imageToEdit: response.data
			})
		})
		.catch(err => console.log(err))
}

export function deleteBoardImage(boardId, imageId) {
	axios
		.delete(`${servicePath}/boards/${boardId}/images/${imageId}`)
		.then(response => {
			this.setState({
				board: response.data
			})

			this.props.history.push(`/boards/${boardId}`)
		})
		.catch(err => console.log(err))
}

export default {
	getBoards,
	getBoard,
	createBoard,
	deleteBoard,
	updateBoard,
	getImages,
	getImage,
	deleteBoardImage
}
