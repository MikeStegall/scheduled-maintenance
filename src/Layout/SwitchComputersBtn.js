import React from 'react'
// import mori from 'mori'

import {computerNameArr} from '../util'

// function NumberOfComputersLeft () {
//   const computers = mori.get(window.CURRENT_STATE, 'computers')
//   const computersJs = mori.toJs(computers)
//   const numComputers = mori.get(window.CURRENT_STATE, 'numComputers')
//   const numComputersJs = mori.toJs(numComputers)
//   let computersLeft = numComputersJs
//   computersJs.forEach((computers) => {
//     if (computers.isEverythingEntered) {
//       computersLeft--
//       return computersLeft
//     }
//   })
//   if (numComputersJs === 1) {
//     return
//   }
//   if (computersLeft > 0) {
//     return <span className='badge badge-primary'>Number of Computers Left {computersLeft}</span>
//   }
// }

function SwitchComputersBtn (numComputers) {
  let clickComputerNameArr = computerNameArr.bind(null, numComputers)
  if (numComputers > 1) {
    return <button className='btn btn-positive btn-block' onClick={clickComputerNameArr}>Switch Computers</button>
  }
}

export default SwitchComputersBtn
