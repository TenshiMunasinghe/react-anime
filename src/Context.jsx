import React, {useState, useEffect, createContext} from "react"

const AnimeContext = createContext()
const years = ["2014", "2015", "2016", "2017", "2018", "2019", "2020"]
const cours = ["1", "2", "3", "4", "all"]
const seasons = ["冬", "春", "夏", "秋"]

const AnimeProvider = props => {
	const [allAnimes, setAllAnimes] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getData = async (year, cour) => {
			cour = cour === "all" ? "" : `/${cour}`
			const response = await fetch(
				`https://api.moemoe.tokyo/anime/v1/master/${year}${cour}`
			)
			return response
		}

		;(async () => {
			try {
				let tempAllAnimes = []
				for (const year of years) {
					for (const cour of cours) {
						const response = await getData(year, cour)
						const animes = await response.json()
						tempAllAnimes.push({year, cour, animes})
					}
				}
				setAllAnimes(tempAllAnimes)
				setLoading(false)
			} catch (e) {
				console.error(e)
			}
		})()
	}, [])

	const getAnime = (year, cour) => {
		return allAnimes.find(e => e.year === year && e.cour === cour)
	}

	const getSeason = e => {
		const season = seasons[e - 1] ? seasons[e - 1] : "全て"
		return season
	}

	return (
		<AnimeContext.Provider
			value={{
				allAnimes,
				loading,
				years,
				cours,
				getAnime,
				getSeason
			}}>
			{props.children}
		</AnimeContext.Provider>
	)
}

const AnimeConsumer = AnimeProvider.Consumer

export {AnimeProvider, AnimeConsumer, AnimeContext}
