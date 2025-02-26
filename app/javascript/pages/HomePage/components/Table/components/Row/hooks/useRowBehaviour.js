import useHomePageState from '../../../../../hooks/useHomePageState'
import { DISPLAY_MODES } from '../../../../../constants'
import { useState, useEffect } from 'react'

const getDisplayStyleValue = (displayMode) => {
  if (displayMode === DISPLAY_MODES.VERTICAL_LIST) return 'block'
  if (displayMode === DISPLAY_MODES.HORIZONTAL_GRID) return 'inline-block'

  return 'block'
}

const useRowBehaviour = ({ blurOnMount = false }) => {
  const { displayMode } = useHomePageState()

  const [blurred, setBlurred] = useState(blurOnMount)

  useEffect(() => {
    if (!blurOnMount) return

    setTimeout(() => setBlurred(false), 1000)
  }, [])

  return {
    displayStyleValue: getDisplayStyleValue(displayMode),
    filterStyleValue: blurOnMount && blurred ? 'blur(2px)' : 'blur(0px)'
  }
}

export default useRowBehaviour
