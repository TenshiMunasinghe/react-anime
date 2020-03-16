import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { BrowserRouter as Router } from "react-router-dom"
import { AnimeProvider } from "./Context"
import "./global.css"

ReactDOM.render(
    <AnimeProvider>
        <Router>
            <App />
        </Router>
    </AnimeProvider>,
    document.getElementById("root")
)
