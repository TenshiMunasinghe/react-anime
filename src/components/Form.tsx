import React, { useContext, useMemo, memo } from 'react'
import styled from 'styled-components'
import AnimateOnChange from 'react-animate-on-change'
import { Link } from 'react-router-dom'

import { YEARS, COURS } from '../constants'
import { secondaryColor, desktop } from '../globalStyle'
import { AnimeContext } from '../Context'
import usePrev from '../customHooks/usePrev'

interface FormProp {
  year?: string
  cour?: string
}

const Form: React.FC<FormProp> = memo(({ year = '2014', cour = '1' }) => {
  const filteredYears = YEARS.filter(e => e !== year)
  const filteredCours = COURS.filter(e => e !== cour)
  let { getSeason } = useContext(AnimeContext)
  const { prevYear, prevCour } = usePrev(year, cour)

  const yearsLinks = useMemo(
    () =>
      filteredYears.map((e, i) => (
        <DropDownLink key={i} to={`/${e}/${cour}`} className='form__link'>
          <span>{e}</span>
        </DropDownLink>
      )),
    [filteredYears, cour]
  )

  const coursLinks = useMemo(
    () =>
      filteredCours.map((e, i) => {
        const season = getSeason(e)
        return (
          <DropDownLink key={i} to={`/${year}/${e}`} className='form__link'>
            <span>{season}</span>
          </DropDownLink>
        )
      }),
    [filteredCours, year, getSeason]
  )

  return (
    <Wrapper>
      <DropDown>
        <Button>
          <AnimateOnChange
            baseClassName='fade'
            animationClassName='fade--active'
            animate={prevYear !== year}>
            {year}
          </AnimateOnChange>
        </Button>
        <DropDownContent>{yearsLinks}</DropDownContent>
      </DropDown>

      <DropDown>
        <Button>
          <AnimateOnChange
            baseClassName='fade'
            animationClassName='fade--active'
            animate={prevCour !== cour}>
            {getSeason(cour)}
          </AnimateOnChange>
        </Button>
        <DropDownContent>{coursLinks}</DropDownContent>
      </DropDown>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  min-width: 50vw;
  display: flex;
  justify-content: flex-start;
`

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  min-width: 8vw;
  width: 6rem;
  background-color: #fff;
  box-shadow: 0.05rem 0.1rem 0.4rem -0.1rem rgba(0, 0, 0, 0.5);
`

const DropDown = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 1rem;

  &:hover {
    ${DropDownContent} {
      display: flex;
      flex-direction: column;
      animation: showList 1s ease-in-out;
    }
  }
  @media only screen and (min-width: 1224px) {
    width: 7rem;
    margin-left: 0;
  }
`

const Button = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  border: none;
  width: 5rem;
  height: 2.5rem;
  font-size: 1rem;
  font-family: inherit;

  &:hover {
    background-color: darken($color: #fff, $amount: 10%);
    cursor: pointer;
  }

  @media only screen and (${desktop}) {
    width: 5rem;
    height: 2rem;
  }
`

const DropDownLink = styled(Link)`
  font-size: 1rem;
  height: 2.5rem;
  display: flex;
  width: 100%;
  text-align: center;
  color: $font-color;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: ${secondaryColor};
  }

  span {
    text-align: center;
    margin: auto;
  }
`

export default Form
