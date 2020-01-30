import React, {PureComponent} from "react"
import AnimePage from "./AnimePage"

class App extends PureComponent {
	state = {
		year: "2014",
		cour: "1",
		animes: []
	}

	componentDidMount = async _ => {
		try {
			const response = await this.getAnime()
			const animes = await response.json()
			if (animes.length === 0) {
				console.log(animes)

				throw new Error("failed to fetch data")
			}
			this.setState({animes})
		} catch (err) {
			console.error(err)
		}
	}

	async getAnime(name, value) {
		let {year, cour} = this.state
		let url
		if (name === "year") {
			cour === "all" ? (url = "") : (url = `/${cour}`)
			const response = await fetch(
				`https://api.moemoe.tokyo/anime/v1/master/${value}${url}`
			)
			return response
		}
		if (name === "cour") {
			value === "all" ? (url = "") : (url = `/${value}`)
			const response = await fetch(
				`https://api.moemoe.tokyo/anime/v1/master/${year}${url}`
			)
			return response
		}
		cour === "all" ? (url = "") : (url = `/${cour}`)
		const response = await fetch(
			`https://api.moemoe.tokyo/anime/v1/master/${year}${url}`
		)
		return response
	}

	handleChange = async ev => {
		let {value, name} = ev.target
		const response = await this.getAnime(name, value).catch(e =>
			console.error(e)
		)
		const animes = await response.json()
		this.setState({animes, [name]: value})
	}

	render() {
		let {animes, year, cour} = this.state
		let season
		if (cour === "1") {
			season = "冬"
		} else if (cour === "2") {
			season = "春"
		} else if (cour === "3") {
			season = "夏"
		} else if (cour === "4") {
			season = "秋"
		} else {
			season = ""
		}

		return (
			<AnimePage
				year={year}
				cour={cour}
				season={season}
				animes={animes}
				handleChange={this.handleChange}
			/>
		)
	}
}

export default App
