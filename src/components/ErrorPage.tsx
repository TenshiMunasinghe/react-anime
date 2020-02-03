import * as React from "react"
import Form from "./Form"
const gifError = require("../gifs/animeGif3.gif")

interface ErrorProp {
	text?: string
}

const ErrorPage: React.FC<ErrorProp> = ({text}) => {
	return (
		<>
			<header className='header'>
				<Form />
				<h2 className='header__title'>AniFinder</h2>
			</header>
			<div className='space'></div>
			<main>
				<section className='error'>
					<div className='error__content'>
						<p className='error__text'>{text}</p>
						<img src={gifError} alt='' className='error__img' />
					</div>
				</section>
			</main>
		</>
	)
}

ErrorPage.defaultProps = {
	text: "page not found"
}

export default ErrorPage
