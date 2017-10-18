import React from 'react'
import mori from 'mori'

import {computerNameArr} from '../util'

function SwitchComputersBtn (numComputers) {
  const idx = mori.get(window.CURRENT_STATE, 'activeComputerIdx')
  const computerInputStep = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'computerInputStep'])
  let isEverythingEntered = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'isEverythingEntered'])
  let clickComputerNameArr = computerNameArr.bind(null, numComputers)
  if (isEverythingEntered) {
    if (computerInputStep === 6) {
      return
    }
    return (
      <header className='bar bar-nav'>
        <h1 className='title'>Go to page 6 and hit Next Computer Button</h1>
      </header>
    )
  } else if (!isEverythingEntered) {
    return <button className='btn btn-positive btn-block' onClick={clickComputerNameArr}>Switch Computers</button>
  }
}

export default SwitchComputersBtn
