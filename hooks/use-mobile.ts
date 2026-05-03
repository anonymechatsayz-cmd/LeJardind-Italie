import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Determine screen size based on ResizeObserver to avoid matchMedia SSR hydration issues
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Initial calculation
    handleResize()

    const observer = new ResizeObserver(() => {
      handleResize()
    })
    
    observer.observe(document.body)
    return () => observer.disconnect()
  }, [])

  return isMobile
}
