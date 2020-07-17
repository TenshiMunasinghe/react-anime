import { useRef, useEffect } from 'react'

const usePrev = (year: string, cour: string) => {
  const yearRef = useRef('')
  const courRef = useRef('')
  useEffect(() => {
    yearRef.current = year
    courRef.current = cour
  })
  return {
    prevYear: yearRef.current,
    prevCour: courRef.current,
  }
}

export default usePrev
