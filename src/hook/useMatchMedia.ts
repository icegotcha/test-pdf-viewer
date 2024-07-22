import { useState, useEffect } from 'react'

const useMatchMedia = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)')
    const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1024px)')

    const handleMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    const handleTabletChange = (e: MediaQueryListEvent) => setIsTablet(e.matches)

    // Initial check
    setIsMobile(mobileQuery.matches)
    setIsTablet(tabletQuery.matches)

    // Add listeners
    mobileQuery.addEventListener('change', handleMobileChange)
    tabletQuery.addEventListener('change', handleTabletChange)

    return () => {
      // Clean up listeners on unmount
      mobileQuery.removeEventListener('change', handleMobileChange)
      tabletQuery.removeEventListener('change', handleTabletChange)
    }
  }, [])

  return { isMobile, isTablet }
}

export default useMatchMedia
