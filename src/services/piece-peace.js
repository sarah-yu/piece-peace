import axios from 'axios'

let servicePath
// if (document.location.hostname === 'localhost') {
servicePath = 'http://localhost:3001/api'
// } else {
// 	servicePath = 'deployed api'
// }

// login or register
export function getToken(action, username, password) {
	axios
		.post(`${servicePath}/${action}`, {
			username: username,
			password: password
		})
		.then(response => {
			localStorage.token = response.data.token
			localStorage.username = response.data.username
			console.log(localStorage.token)
			console.log(localStorage.username)

			if (action === 'register') {
				console.log('registration successful')
				this.props.handleCloseRegister()
			} else {
				// if (action === 'login')
				console.log('login successful')
				this.props.handleCloseLogin()
			}

			this.props.history.push('/')
		})
		.catch(err => console.log(err))
}

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
		.then(response => {
			console.log(response.data)
			window.location.href = '/boards'
			//this.props.history.push(`/boards`)
		})
		.catch(err => console.log(err))
}

export function deleteBoard(id) {
	axios
		.delete(`${servicePath}/boards/${id}`)
		.then(response => {
			this.props.history.push('/boards')
			window.location.href = '/boards'
		})
		.catch(err => console.log(err))
}

export function updateBoard(id, updatedBoard) {
	axios
		.put(`${servicePath}/boards/${id}`, updatedBoard)
		.then(response => {
			this.props.history.push(`/boards/${response.data._id}`)

			console.log(response.data)
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

// get an (original) image
export function getImage(id) {
	axios
		.get(`${servicePath}/images/${id}`)
		.then(response => {
			// (original) image (not a board image) for pinning
			this.setState(
				{
					imageToPin: response.data
				},
				() => {
					console.log('***IMAGE TO PIN***')
					console.log(this.state.imageToPin)
					console.log('******************')
				}
			)
		})
		.catch(err => console.log(err))
}

// get an image from a specific board, not the original image
export function getBoardImage(boardId, imageId) {
	axios
		.get(`${servicePath}/boards/${boardId}/images/${imageId}`)
		.then(response => {
			if (this.state.imagePinOn) {
				// board image for pinning to another board
				this.setState({
					imageToPin: response.data
				})
			} else {
				// board image for editing
				this.setState({
					imageToEdit: response.data
				})
			}
		})
		.catch(err => console.log(err))
}

// deletes image off board but not the entire app
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

// update the image from board but not the original image
export function updateBoardImage(boardId, imageId, updatedBoardImage) {
	axios
		.put(
			`${servicePath}/boards/${boardId}/images/${imageId}`,
			updatedBoardImage
		)
		.then(response => {
			this.setState({
				board: response.data
			})

			this.props.history.push(`/boards/${boardId}`)
		})
		.catch(err => console.log(err))
}

export function removeImageFromBoard(boardId, imageId) {
	axios
		.delete(`${servicePath}/boards/${boardId}/images/${imageId}`)
		.then(response => {
			this.setState({
				board: response.data
			})
		})
		.catch(err => console.log(err))
}

export function pinImageToBoard(boardId, imageToPin) {
	axios
		.post(`${servicePath}/boards/${boardId}`, imageToPin)
		.then(() => this.props.history.push(`/boards/${boardId}`))
		.catch(err => console.log(err))
}

export function uploadImage(stuff) {
	console.log(stuff)
	axios
		.post(`${servicePath}/upload`, stuff)
		.then(response => {
			console.log(response)
		})
		.catch(err => console.log(err))
}

export default {
	getToken,
	getBoards,
	getBoard,
	createBoard,
	deleteBoard,
	updateBoard,
	getImages,
	getImage,
	getBoardImage,
	deleteBoardImage,
	updateBoardImage,
	removeImageFromBoard,
	pinImageToBoard,
	uploadImage
}
