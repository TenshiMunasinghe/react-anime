import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { AnimeContext } from "../Context"
import Loading from "./Loading"
import Home from "./Home"
import AnimePage from "./AnimePage"
import Error from "./ErrorPage"

const App: React.FC = () => {
	const { loading } = React.useContext(AnimeContext)
	if (loading) {
		return <Loading />
	}
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/:year/:cour' component={AnimePage} />
			<Route component={Error} />
		</Switch>
	)
}

export default App
