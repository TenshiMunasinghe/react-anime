import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./Home"
import TempAnimePage from "./AnimePage"

const TempApp = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/:year/:cour' component={TempAnimePage} />
		</Switch>
	)
}

export default TempApp
