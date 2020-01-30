import React, {PureComponent} from "react"

const AnimeContext = React.createContext()
const years = ["2014", "2015", "2016", "2017", "2018", "2019", "2020"]
const cours = ["1", "2", "3", "4", "all"]
const seasons = ["冬", "春", "夏", "秋"]

class AnimeProvider extends PureComponent {
	state = {
		allAnimes: [],
		loading: false,
		year: "2014",
		cour: "1"
	}

	componentDidMount = async () => {
		this.setState({loading: true})
		let allAnimes = []
		for (const year of years) {
			for (const cour of cours) {
				const response = await this.getAnime(year, cour)
				const animes = await response.json()
				allAnimes.push({year, cour, animes})
			}
		}
		this.setState({allAnimes, loading: false})
	}

	async getAnime(year, cour) {
		cour = cour === "all" ? "" : `/${cour}`
		const response = await fetch(
			`https://api.moemoe.tokyo/anime/v1/master/${year}${cour}`
		)
		return response
	}

	updateCondition = (value, yearOrCour) => {
		this.setState({[yearOrCour]: value})
	}

	getSeason = e => {
		const season = seasons[e - 1] ? seasons[e - 1] : "全て"
		return season
	}

	render() {
		return (
			<AnimeContext.Provider
				value={{
					...this.state,
					years,
					cours,
					updateCondition: this.updateCondition,
					getSeason: this.getSeason
				}}>
				{this.props.children}
			</AnimeContext.Provider>
		)
	}
}

const AnimeConsumer = AnimeProvider.Consumer

export {AnimeProvider, AnimeConsumer, AnimeContext}
