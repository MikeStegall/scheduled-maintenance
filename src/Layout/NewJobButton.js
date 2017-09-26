import React from 'react'
import mori from 'mori'

function clickNewJobButton () {
  const newState1 = mori.assoc(window.CURRENT_STATE, 'showPreviousJobs', false)
  const newState2 = mori.assoc(newState1, 'showPreviousJobComputerResults', false)
  const newState3 = mori.assoc(newState2, 'companyNameArr', [])
  const newState4 = mori.assoc(newState3, 'computerNameArr', [])
  const newState5 = mori.assoc(newState4, 'computers', [])
  window.NEXT_STATE = newState5
}

function NewJobButton () {
  return <button className='btn btn-primary btn-block' onClick={clickNewJobButton}>New Job</button>
}

export default NewJobButton
