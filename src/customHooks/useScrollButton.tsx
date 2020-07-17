import { useState, useEffect, useCallback } from 'react'

const useSrollButton = () => {
  const [showBtn, setShowBtn] = useState<boolean>(false)

  const checkScroll = useCallback(() => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', checkScroll)

    return () => window.removeEventListener('scroll', checkScroll)
  }, [checkScroll])

  return showBtn
}

export default useSrollButton
