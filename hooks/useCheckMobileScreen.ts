import { useEffect, useState } from 'react'

const useCheckMobileScreen = (customBreakpointValue = 768) => {
  const [width, setWidth] = useState(0)
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return width <= customBreakpointValue
}

export default useCheckMobileScreen
