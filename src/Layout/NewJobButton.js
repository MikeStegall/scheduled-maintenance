import React from 'react'
import mori from 'mori'

function clickNewJobButton () { // basically resets the state
  const newState1 = mori.assoc(window.CURRENT_STATE, 'showPreviousJobs', false)
  const newState2 = mori.assoc(newState1, 'showPreviousJobComputerResults', false)
  const newState3 = mori.assoc(newState2, 'companyNameArr', [])
  const newState4 = mori.assoc(newState3, 'computerNameArr', [])
  const newState5 = mori.assoc(newState4, 'computers', [])
  const newState6 = mori.assoc(newState5, 'companyName', '')
  const newState7 = mori.assoc(newState6, 'numComputers', '')
  const newState8 = mori.assoc(newState7, 'activeComputerIdx', 0)
  const newState9 = mori.assoc(newState8, 'companyAverage', null)
  const newState10 = mori.assoc(newState9, 'step', 1)
  const newState11 = mori.assoc(newState10, 'companyId', '')
  const newState12 = mori.assoc(newState11, 'showIncompleteJobs', false)
  const newState13 = mori.assoc(newState12, 'incompleteJobArr', [])
  window.NEXT_STATE = newState13
}

function NewJobButton () {
  return <button className='btn btn-primary btn-block' onClick={clickNewJobButton}>New Job</button>
}

export default NewJobButton
