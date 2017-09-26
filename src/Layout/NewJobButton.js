import React from 'react'
import mori from 'mori'

function clickNewJobButton () {
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'showPreviousJobs', false)
}

function NewJobButton () {
  return <button className='btn btn-primary btn-block' onClick={clickNewJobButton}>New Job</button>
}

export default NewJobButton
