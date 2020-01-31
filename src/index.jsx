import React from "react"
import ReactDOM from "react-dom"
import TempApp from "./components/App"
import {BrowserRouter as Router} from "react-router-dom"
import {AnimeProvider} from "./Context"
import "./css/main.css"

ReactDOM.render(
	<AnimeProvider>
		<Router>
			<TempApp />
		</Router>
	</AnimeProvider>,
	document.getElementById("root")
)
