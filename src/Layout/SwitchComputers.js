import React from 'react'
import mori from 'mori'

function computerNameArr (numComputers) {
  let computerNameVect = mori.vector()
  for (let idx = 0; idx < numComputers; idx++) {
    let computerName = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'computerName'])
    computerNameVect = mori.conj(computerNameVect, computerName)
  }
  let computerNameArr = mori.toJs(computerNameVect)
  console.log(computerNameArr)
}

function SwitchComputers (numComputers) {
  let clickComputerNameArr = computerNameArr.bind(null, numComputers)
  return (
    <div className='btn btn-primary btn-block btn-outlined'>
      <button onClick={clickComputerNameArr}>Switch Computers</button>
    </div>
  )
}

export default SwitchComputers
