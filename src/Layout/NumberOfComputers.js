import React from 'react'
import mori from 'mori'
import {createEmptyComputer} from '../util.js'

function submitNumberOfComputers () {
  const numComputers = mori.get(window.CURRENT_STATE, 'numComputers')
  if (numComputers === 0) {
    // TODO: show an error message here
    return
  }

  let emptyComputers = mori.vector()
  for (let i = 0; i < numComputers; i++) {
    let newComputer = createEmptyComputer('Computer ' + (i + 1))
    emptyComputers = mori.conj(emptyComputers, newComputer)
  }
  const newState = mori.assoc(window.CURRENT_STATE, 'computers', emptyComputers,
                                                    'step', 3)
  window.NEXT_STATE = newState
}

function changeNumberOfComputers (evt) {
  const numComputers = parseInt(evt.target.value, 10)
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'numComputers', numComputers)
}

function NameOfCompany (companyName) {
  return <h3 className='company-name'>{companyName}</h3>
}

function NumberOfComputersPage (companyName, number) {
  return (
    <div className='input-group'>
      {NameOfCompany(companyName)}
      <div className='input-row computer-number-input'>
        <label>Number of Computers:</label>
        <input className='number-of-computers' type='number' placeholder='Number of Computers' name='numberOfComputes' onChange={changeNumberOfComputers} value={number} />
        <button className='btn btn-primary btn-block' onClick={submitNumberOfComputers}>Enter</button>
      </div>
    </div>
  )
}

export default NumberOfComputersPage
