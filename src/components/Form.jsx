import React from "react"
import {Link} from "react-router-dom"
import {AnimeContext} from "../Context"

const Form = ({year, cour}) => {
	let {years, cours, getSeason} = React.useContext(AnimeContext)

	const yearsLinks = years.map((e, i) => (
		<Link key={i} to={`/${e}/${cour}`} className='form__link'>
			<span className='form__link-text'>{e}</span>
		</Link>
	))

	const coursLinks = cours.map((e, i) => {
		const season = getSeason(e)
		return (
			<Link key={i} to={`/${year}/${e}`} className='form__link'>
				<span className='form__link-text'>{season}</span>
			</Link>
		)
	})

	return (
		<div className='form' id='year'>
			<div className='form__dropdown'>
				<div className='form__button'>{year}</div>
				<div className='form__dropdown-content'>{yearsLinks}</div>
			</div>
			<div className='form__dropdown'>
				<div className='form__button'>{getSeason(cour)}</div>
				<div className='form__dropdown-content'>{coursLinks}</div>
			</div>
		</div>
	)
}

Form.defaultProps = {
	year: "2014",
	cour: "1"
}

export default Form
