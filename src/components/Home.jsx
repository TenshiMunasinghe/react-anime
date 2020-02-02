import React, {useContext} from "react"
import {AnimeContext} from "../Context"
import Form from "./Form"
import Loading from "./Loading"
import gifHome from "../gifs/animeGif2.gif"

const Home = () => {
	const {loading} = useContext(AnimeContext)

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<header className='header'>
						<Form />
						<h2 className='header__title'>AniFinder</h2>
					</header>
					<div className='space'></div>
					<section className='home'>
						<div className='home__content'>
							<p className='home__p'>放送年と季節を選択してください</p>
							<img src={gifHome} alt='' className='home__img' />
						</div>
					</section>
				</>
			)}
		</>
	)
}

export default Home
