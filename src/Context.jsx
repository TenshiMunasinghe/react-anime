import React, {PureComponent} from "react"

const AnimeContext = React.createContext()
const years = ["2014", "2015", "2016", "2017", "2018", "2019", "2020"]
const cours = ["1", "2", "3", "4", "all"]
const seasons = ["冬", "春", "夏", "秋"]
let allAnimes = []

class AnimeProvider extends PureComponent {
	state = {
		allAnimes: [],
		loading: true
	}

	componentDidMount = async () => {
		try {
			for (const year of years) {
				for (const cour of cours) {
					const response = await this.getData(year, cour)
					const animes = await response.json()
					allAnimes.push({year, cour, animes})
				}
			}
			this.setState({allAnimes, loading: false})
		} catch (e) {
			console.error(e)
		}
	}

	getData = async (year, cour) => {
		cour = cour === "all" ? "" : `/${cour}`
		const response = await fetch(
			`https://api.moemoe.tokyo/anime/v1/master/${year}${cour}`
		)
		return response
	}

	getAnime = (year, cour) => {
		return this.state.allAnimes.find(e => e.year === year && e.cour === cour)
	}

	getSeason = e => {
		const season = seasons[e - 1] ? seasons[e - 1] : "全て"
		return season
	}

	render() {
		console.log(this.state.allAnimes)

		return (
			<AnimeContext.Provider
				value={{
					...this.state,
					years,
					cours,
					updateCondition: this.updateCondition,
					getAnime: this.getAnime,
					getSeason: this.getSeason
				}}>
				{this.props.children}
			</AnimeContext.Provider>
		)
	}
}

const AnimeConsumer = AnimeProvider.Consumer

export {AnimeProvider, AnimeConsumer, AnimeContext}
