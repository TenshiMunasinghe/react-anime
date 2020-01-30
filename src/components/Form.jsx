import React from "react"
import {Link} from "react-router-dom"
import {AnimeContext} from "../Context"

const Form = () => {
	let {years, cours, year, cour, updateCondition, getSeason} = React.useContext(
		AnimeContext
	)
	const yearsLinks = years.map((e, i) => (
		<Link
			key={i}
			to={`/${e}/${cour}`}
			onClick={() => updateCondition(e, "year")}>
			<span>{e}</span>
		</Link>
	))
	const coursLinks = cours.map((e, i) => {
		const season = getSeason(e)
		return (
			<Link
				key={i}
				to={`/${year}/${e}`}
				onClick={() => updateCondition(e, "cour")}>
				<span>{season}</span>
			</Link>
		)
	})
	return (
		<div className='form' id='year'>
			<div className='dropdown'>
				<button>{year}</button>
				<div className='dropdown-content'>{yearsLinks}</div>
			</div>
			<div className='dropdown'>
				<button>{getSeason(cour)}</button>
				<div className='dropdown-content'>{coursLinks}</div>
			</div>
		</div>
	)
}

export default Form
