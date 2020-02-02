import React, {PureComponent} from "react"
import {AnimeContext} from "../Context"
import AnimeItem from "./AnimeItem"
import Form from "./Form"
import Loading from "./Loading"
import Error from "./Error"

export class AnimePage extends PureComponent {
	_isMounted = false
	state = {
		showBtn: false
	}

	componentDidMount = () => {
		this._isMounted = true
		if (!this._isMounted) {
			return
		}
		window.addEventListener("scroll", this.checkScroll)
	}

	componentWillUnmount = () => {
		window.removeEventListener("scroll", this.checkScroll)
		this._isMounted = false
	}

	checkScroll = () => {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			this.setState({showBtn: true})
		} else {
			this.setState({showBtn: false})
		}
	}

	static contextType = AnimeContext

	render() {
		const {getAnime, getSeason, loading} = this.context

		if (loading) return <Loading />

		const {year, cour} = this.props.match.params

		const data = getAnime(year, cour)
		if (!data) return <Error />

		const {animes} = data
		const season = getSeason(cour)

		if (animes.length === 0) {
			return <Error text='この期間の情報はありません' />
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
						{animes.map(anime => {
							return <AnimeItem key={anime.id} anime={anime} />
						})}
					</ul>
				</main>
				<a
					href='#root'
					type='button'
					id='scroll-btn'
					className={this.state.showBtn ? "show" : "hide"}>
					<span className='scroll-btn__icon'>&#9650;</span>
				</a>
			</>
		)
	}
}

export default AnimePage
