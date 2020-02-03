import * as React from "react"
const gifLoad = require("../gifs/animeGif4.gif")

const Loading: React.FC = () => {
	return (
		<section className='loading'>
			<div className='loading__content'>
				<p className='loading__p'>loading...</p>
				<img src={gifLoad} alt='' className='loading__img' />
			</div>
		</section>
	)
}

export default Loading
