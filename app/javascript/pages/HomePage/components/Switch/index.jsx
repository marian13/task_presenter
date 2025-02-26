import React from 'react'

import useSwitchBehaviour from './hooks/useSwitchBehaviour'

const Switch = () => {
  const { checked, onClick } = useSwitchBehaviour()

  return (
    <label>
      <input
        type='checkbox'
        role='switch'
        data-test-id='switch'
        defaultChecked={checked}
        onClick={onClick}
      />

      Vertical List / Horizontal Grid
    </label>
  )
}

export default Switch
