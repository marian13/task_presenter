import { useCallback } from 'react'
import useHomePageState from '../../../hooks/useHomePageState'
import useHomePageDispatch from '../../../hooks/useHomePageDispatch'

import { DISPLAY_MODES } from '../../../constants'

const useSwitchBehaviour = () => {
  const { displayMode: currentDisplayMode } = useHomePageState()
  const dispatch = useHomePageDispatch()

  const checked = currentDisplayMode === DISPLAY_MODES.HORIZONTAL_GRID

  const onClick = useCallback(() => {
    dispatch({ type: 'SWITCH_DISPLAY_MODE', payload: { currentDisplayMode } })
  })

  return { checked, onClick }
}

export default useSwitchBehaviour
