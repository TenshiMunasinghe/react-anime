import * as React from "react"
const { useRef, useEffect } = React

const usePrev = (year, cour) => {
	const yearRef = useRef()
	const courRef = useRef()
	useEffect(() => {
		yearRef.current = year
		courRef.current = cour
	})
	return {
		prevYear: yearRef.current,
		prevCour: courRef.current
	}
}

export default usePrev
