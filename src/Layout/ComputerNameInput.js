import React from 'react'
import mori from 'mori'

// -----------------------------------------------------------------------------
// Change Commputer Name
// -----------------------------------------------------------------------------

function changeComputerName (idx, evt) {
  const newName = evt.target.value
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'computerName'], newName)
}

function ComputerNameInput (idx, name) { // name = computerName
  let onChangeComputerName = changeComputerName.bind(null, idx)
  return (
    <div className='input-group'>
      <input type='text' value={name} className='input-row' onChange={onChangeComputerName} />
    </div>
  )
}

export default ComputerNameInput
