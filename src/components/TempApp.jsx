import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./Home"
import TempAnimePage from "./TempAnimePage"

const TempApp = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/:year/:cour' component={TempAnimePage} />
			</Switch>
		</Router>
	)
}

export default TempApp
