import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './Header/Header'
import ImagesList from './ImagesList/ImagesList'
import BoardsList from './BoardsList/BoardsList'

import './App.css'

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<main>
					<Switch>
						<Route exact path="/" render={props => <ImagesList {...props} />} />
						<Route
							exact
							path="/boards"
							render={props => <BoardsList {...props} />}
						/>
						<Route path="/*" render={() => <Redirect to="/" />} />
					</Switch>
				</main>
			</div>
		)
	}
}

export default App
