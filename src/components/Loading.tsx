import * as React from "react"
import gifLoad from "../gifs/animeGif4.gif"

const Loading: React.FC = () => {
	return (
		<section className='loading'>
			<div className='loading__content'>
				<p className='loading__p'>loading...</p>
				<figure>
					<img src={gifLoad} alt='' className='loading__img' />
				</figure>
			</div>
		</section>
	)
}

export default Loading
