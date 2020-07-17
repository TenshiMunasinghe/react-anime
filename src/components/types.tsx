import { Years, Cours, Seasons } from '../constants'

export type GetAnime = (year: string, cour: string) => Animes

export type GetSeason = (cour: string) => Seasons | '全て'

export type ContextProps = {
  allAnimes: Animes[]
  loading: boolean
  getAnime: GetAnime
  getSeason: GetSeason
}

export type Animes = {
  year: Years
  cour: Cours
  animes: []
}
