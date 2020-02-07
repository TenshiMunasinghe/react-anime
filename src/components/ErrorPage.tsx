import * as React from "react"
import Form from "./Form"
import gifError from "../gifs/animeGif3.gif"

interface ErrorProp {
	text?: string
	year?: string
	cour?: string
}

const ErrorPage: React.FC<ErrorProp> = ({ text, year, cour }) => {
	return (
		<>
			<header className='header'>
				<Form year={year} cour={cour} />
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
	text: "page not found",
	year: "2014",
	cour: "1"
}

export default ErrorPage
