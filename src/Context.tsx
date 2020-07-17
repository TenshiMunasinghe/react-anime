import React, { useState, useEffect, createContext, useCallback } from 'react'

import { YEARS, COURS, SEASONS, Years, Cours } from './constants'
import { ContextProps, Animes, GetSeason, GetAnime } from './components/types'

const AnimeContext = createContext({} as ContextProps)

const getSeason: GetSeason = cour => {
  const i = Number(cour)
  const season = SEASONS[i - 1] || '全て'
  return season
}

const AnimeProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [allAnimes, setAllAnimes] = useState<Animes[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getData = async (year: Years, cour: Cours) => {
      const courUrl = cour === 'all' ? '' : `/${cour}`
      const response = await fetch(
        `https://api.moemoe.tokyo/anime/v1/master/${year}${courUrl}`
      )
      return response
    }
    // gets all the data from api and stores in one array
    ;(async () => {
      try {
        let tempAllAnimes = []
        for (const year of YEARS) {
          for (const cour of COURS) {
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

  const getAnime: GetAnime = useCallback(
    (year, cour) => {
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
        getSeason,
      }}>
      {children}
    </AnimeContext.Provider>
  )
}

export { AnimeProvider, AnimeContext }
