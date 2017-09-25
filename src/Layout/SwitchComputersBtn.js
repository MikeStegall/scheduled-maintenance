import React from 'react'
import mori from 'mori'

function computerNameArr (numComputers) {
  let computerNameVect = mori.vector()
  for (let idx = 0; idx < numComputers; idx++) {
    let computerName = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'computerName'])
    computerNameVect = mori.conj(computerNameVect, computerName)
  }
  let newState1 = mori.assoc(window.CURRENT_STATE, 'computerNameArr', computerNameVect)
  let newState2 = mori.assoc(newState1, 'showComputerNames', true)
  window.NEXT_STATE = newState2
}

function SwitchComputersBtn (numComputers) {
  let clickComputerNameArr = computerNameArr.bind(null, numComputers)
  return <button className='btn btn-positive btn-block' onClick={clickComputerNameArr}>Switch Computers</button>
}

export default SwitchComputersBtn
