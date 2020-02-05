import * as React from "react"
import { RouteComponentProps } from "react-router-dom"
import { AnimeContext } from "../Context"
import AnimeItem from "./AnimeItem"
import Form from "./Form"
import Loading from "./Loading"
import ErrorPage from "./ErrorPage"

interface PageProps
	extends RouteComponentProps<{ year: string; cour: string }> {}

const { useState, useContext, useEffect } = React

const AnimePage: React.FC<PageProps> = React.memo(props => {
	const [showBtn, setShowBtn] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", checkScroll)

		return () => window.removeEventListener("scroll", checkScroll)
	}, [])

	const checkScroll = () => {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			setShowBtn(true)
		} else {
			setShowBtn(false)
		}
	}

	const { getAnime, getSeason, loading } = useContext(AnimeContext)

	if (loading) return <Loading />

	const { year, cour } = props.match.params

	//goes to error page if url is invalid
	const data = getAnime(year, cour)
	if (!data) return <ErrorPage />

	const { animes } = data
	const season = getSeason(cour)

	if (animes.length === 0) {
		return (
			<ErrorPage text='この期間の情報はありません' year={year} cour={cour} />
		)
	}

	return (
		<>
			<header className='header'>
				<Form year={year} cour={cour} />
				<h2 className='header__info'>
					<span className='header__info--emphasis'>{year}</span>年
					{season === "全て" ? (
						""
					) : (
						<span className='header__info--emphasis'>{season}</span>
					)}
					アニメ
				</h2>
			</header>
			<div className='space'></div>
			<main>
				<ul className='grid'>
					{animes.map((anime: any) => {
						return <AnimeItem key={anime.id} anime={anime} />
					})}
				</ul>
			</main>
			<a
				href='#root'
				type='button'
				id='scroll-btn'
				className={showBtn ? "show" : "hide"}>
				<span className='scroll-btn__icon'>&#9650;</span>
			</a>
		</>
	)
})

export default AnimePage
