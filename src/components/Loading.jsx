import React from "react"
import gifLoad from "../gifs/animeGif4.gif"

const Loading = () => {
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