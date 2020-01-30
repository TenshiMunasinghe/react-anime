import React, {useContext} from "react"
import Form from "./Form"
import {AnimeContext} from "../Context"
import gifHome from "../gifs/animeGif2.gif"
import gifLoad from "../gifs/animeGif4.gif"

const Home = () => {
	const {loading} = useContext(AnimeContext)

	return (
		<>
			{loading ? (
				<main>
					<section className='loading'>
						<div className='loading-content'>
							<p>loading...</p>
							<img src={gifLoad} alt='' />
						</div>
					</section>
				</main>
			) : (
				<>
					<header>
						<Form />
						<h2>AniFinder</h2>
					</header>
					<div className='space'></div>
					<main>
						<section className='home'>
							<div className='home-content'>
								<p>放送年と季節を選択してください</p>
								<img src={gifHome} alt='' />
							</div>
						</section>
					</main>
				</>
			)}
		</>
	)
}

export default Home
