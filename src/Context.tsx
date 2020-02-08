import * as React from "react"
import { years, cours, seasons } from "./constants"

const { useState, useEffect, createContext, useCallback } = React

interface ContextProps {
	allAnimes: Animes[]
	loading: boolean
	getAnime: (year: string, cour: string) => Animes
	getSeason: (cour: string) => string
}

interface Animes {
	year: string
	cour: string
	animes: []
}

const AnimeContext = createContext({} as ContextProps)

const getSeason = (cour: string) => {
	const i = Number(cour)
	const season = seasons[i - 1] ? seasons[i - 1] : "全て"
	return season
}

const AnimeProvider: React.FC<{
	children: React.ReactNode
}> = ({ children }) => {
	const [allAnimes, setAllAnimes] = useState<Animes[]>([])
	const [loading, setLoading] = useState<boolean>(true)

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
						tempAllAnimes.push({ year, cour, animes })
					}
				}
				setAllAnimes(tempAllAnimes)
				setLoading(false)
			} catch (e) {
				console.error(e)
			}
		})()
	}, [])

	const getAnime = useCallback(
		(year: string, cour: string) => {
			return allAnimes.find(e => e.year === year && e.cour === cour)
		},
		[allAnimes]
	)

	return (
		<AnimeContext.Provider
			value={{
				allAnimes,
				loading,
				getAnime,
				getSeason
			}}>
			{children}
		</AnimeContext.Provider>
	)
}

export { AnimeProvider, AnimeContext }
