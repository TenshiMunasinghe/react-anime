import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./Home"
import AnimePage from "./AnimePage"
import Error from "./Error"

const App = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/:year/:cour' component={AnimePage} />
			<Route component={Error} />
		</Switch>
	)
}

export default App
