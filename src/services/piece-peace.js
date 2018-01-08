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

// get an (original) image
export function getImage(id) {
	axios
		.get(`${servicePath}/images/${id}`)
		.then(response => {
			// an (original) image (not a board image) for pinning
			this.setState(
				{
					imageToPin: response.data
				},
				() => {
					console.log('pinning an original, non-board image')
					console.log(this.state.imageToPin)
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
			console.log('state of imagePinOn:')
			console.log(this.state.imagePinOn)

			if (this.state.imagePinOn) {
				// a board image for pinning to another board
				// set state of imageToPin
				console.log('set state of imageToPin')

				this.setState(
					{
						imageToPin: response.data
					},
					() => {
						console.log('pinning the following board image:')
						console.log(this.state.imageToPin)
					}
				)
			} else {
				// a board image for editing
				// set state of imageToEdit
				console.log('set state of imageToEdit')

				this.setState(
					{
						// imageToEdit: {
						// 	src: response.data.src,
						// 	origin: response.data.origin,
						// 	description: response.data.description
						// }
						imageToEdit: response.data
					},
					() => {
						console.log('editing the following image:')
						console.log(this.state.imageToEdit)
					}
				)
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

export default {
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
	pinImageToBoard
}
