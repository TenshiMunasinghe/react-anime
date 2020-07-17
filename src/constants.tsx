export const YEARS = [
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
] as const
export type Years = typeof YEARS[number]

export const COURS = ['1', '2', '3', '4', 'all'] as const
export type Cours = typeof COURS[number]

export const SEASONS = ['冬', '春', '夏', '秋'] as const
export type Seasons = typeof SEASONS[number]
