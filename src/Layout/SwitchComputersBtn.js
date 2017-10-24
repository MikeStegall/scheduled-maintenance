import React from 'react'
// import mori from 'mori'

import {computerNameArr} from '../util'

function SwitchComputersBtn (numComputers) {
  let clickComputerNameArr = computerNameArr.bind(null, numComputers)
  return <button className='btn btn-positive btn-block' onClick={clickComputerNameArr}>Switch Computers</button>
}

export default SwitchComputersBtn
