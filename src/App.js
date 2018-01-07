import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './Header/Header'
import ImageList from './ImageList/ImageList'
import BoardList from './BoardList/BoardList'
import BoardShow from './BoardShow/BoardShow'
import BoardNew from './BoardNew/BoardNew'

import './App.css'

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<main>
					<Switch>
						<Route exact path="/" render={props => <ImageList {...props} />} />
						<Route
							exact
							path="/boards"
							render={props => <BoardList {...props} />}
						/>
						<Route
							exact
							path="/boards/new"
							render={props => <BoardNew {...props} />}
						/>
						<Route
							exact
							path="/boards/:_id"
							render={props => <BoardShow {...props} />}
						/>
						<Route path="/*" render={() => <Redirect to="/" />} />
					</Switch>
				</main>
			</div>
		)
	}
}

export default App
