import React, {PureComponent} from "react"
import {Redirect} from "react-router-dom"
import {AnimeContext} from "../Context"
import AnimeItem from "./AnimeItem"
import Form from "./Form"
import gifError from "../gifs/animeGif3.gif"

export class TempAnimePage extends PureComponent {
	static contextType = AnimeContext
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

	render() {
		const {allAnimes, getSeason} = this.context
		let {year, cour} = this.props.match.params

		let animes = allAnimes.find(e => e.year === year && e.cour === cour)
		if (!animes) {
			return <Redirect to='/' />
		}
		animes = animes.animes

		const season = getSeason(cour)

		return (
			<>
				<header>
					<Form />
					<h2>
						<span>{year}</span>年
						{season === "全て" ? "" : <span>{season}</span>}
						アニメ
					</h2>
				</header>
				<div className='space'></div>
				<main>
					{animes.length === 0 ? (
						<section className='error'>
							<div className='error-content'>
								<p>この期間の情報はありません</p>
								<img src={gifError} alt='' />
							</div>
						</section>
					) : (
						<ul className='grid'>
							{animes.map(anime => {
								return <AnimeItem key={anime.id} anime={anime} />
							})}
						</ul>
					)}
				</main>
				<a
					href='#root'
					type='button'
					id='scroll'
					className={this.state.showBtn ? "show" : "hide"}>
					{/* <div> */}
					<span>&#9650;</span>
					{/* </div> */}
				</a>
			</>
		)
	}
}

export default TempAnimePage
