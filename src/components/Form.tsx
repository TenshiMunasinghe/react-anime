import * as React from "react"
import AnimateOnChange from "react-animate-on-change"
import usePrev from "../customHooks/usePrev"
import { YEARS, COURS } from "../constants"
import { Link } from "react-router-dom"
import { AnimeContext } from "../Context"

interface FormProp {
    year?: string
    cour?: string
}

const { useContext, useMemo, memo } = React

const Form: React.FC<FormProp> = memo(({ year, cour }) => {
    const filteredYears = YEARS.filter(e => e !== year)
    const filteredCours = COURS.filter(e => e !== cour)
    let { getSeason } = useContext(AnimeContext)
    const { prevYear, prevCour } = usePrev(year, cour)

    const yearsLinks = useMemo(
        () =>
            filteredYears.map((e, i) => (
                <Link key={i} to={`/${e}/${cour}`} className='form__link'>
                    <span className='form__link-text'>{e}</span>
                </Link>
            )),
        [filteredYears, cour]
    )

    const coursLinks = useMemo(
        () =>
            filteredCours.map((e, i) => {
                const season = getSeason(e)
                return (
                    <Link key={i} to={`/${year}/${e}`} className='form__link'>
                        <span className='form__link-text'>{season}</span>
                    </Link>
                )
            }),
        [filteredCours, year, getSeason]
    )

    return (
        <div className='form' id='year'>
            <div className='form__dropdown'>
                <div className='form__button'>
                    <AnimateOnChange
                        baseClassName='fade'
                        animationClassName='fade--active'
                        animate={prevYear !== year}>
                        {year}
                    </AnimateOnChange>
                </div>
                <div className='form__dropdown-content'>{yearsLinks}</div>
            </div>

            <div className='form__dropdown'>
                <div className='form__button'>
                    <AnimateOnChange
                        baseClassName='fade'
                        animationClassName='fade--active'
                        animate={prevCour !== cour}>
                        {getSeason(cour)}{" "}
                    </AnimateOnChange>
                </div>
                <div className='form__dropdown-content'>{coursLinks}</div>
            </div>
        </div>
    )
})

Form.defaultProps = {
    year: "2014",
    cour: "1"
}

export default Form
