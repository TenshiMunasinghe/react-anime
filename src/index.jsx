import React from "react"
import ReactDOM from "react-dom"
import TempApp from "./components/TempApp"
import {AnimeProvider} from "./Context"
import "./css/main.css"

ReactDOM.render(
	<AnimeProvider>
		<TempApp />
	</AnimeProvider>,
	document.getElementById("root")
)
