import * as React from "react"
import {years, cours, seasons} from "./constants"

const {useState, useEffect, createContext} = React

interface ContextProps {
	allAnimes: any[]
	loading: boolean
	getAnime: any
	getSeason: any
}

const AnimeContext = createContext({} as ContextProps)

const AnimeProvider: React.FC<{
	children: React.ReactNode
}> = props => {
	const [allAnimes, setAllAnimes] = useState<any[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getData = async (year: string, cour: string) => {
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

	const getAnime = (year: string, cour: string) => {
		return allAnimes.find(e => e.year === year && e.cour === cour)
	}

	const getSeason = (cour: string) => {
		const i = Number(cour)
		const season = seasons[i - 1] ? seasons[i - 1] : "全て"
		return season
	}

	return (
		<AnimeContext.Provider
			value={{
				allAnimes,
				loading,
				getAnime,
				getSeason
			}}>
			{props.children}
		</AnimeContext.Provider>
	)
}

export {AnimeProvider, AnimeContext}
