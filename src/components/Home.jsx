import React, {useContext} from "react"
import Form from "./Form"
import {AnimeContext} from "../Context"
import gif from "../animeGif2.gif"

const Home = () => {
	const {loading} = useContext(AnimeContext)

	return (
		<>
			{loading ? (
				<div className='loading'>loading...</div>
			) : (
				<>
					<header>
						<Form />
						<h2>AniFinder</h2>
					</header>
					<div className='space'></div>
					<section className='home'>
						<div className='home-content'>
							<p>放送年と季節を選択してください</p>
							<img src={gif} alt='' />
						</div>
					</section>
				</>
			)}
		</>
	)
}

export default Home
