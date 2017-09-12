import React from 'react'
import mori from 'mori'
import {createEmptyComputer} from '../util.js'

function submitNumberOfComputers () {
  const numComputers = mori.get(window.CURRENT_STATE, 'numComputers')
  if (numComputers === 0 && numComputers > 25) {
    // TODO: show an error message here
    window.alert('Please enter a number of computers between 0 and 25')
  }

  let emptyComputers = mori.vector()
  for (let i = 0; i < numComputers; i++) {
    let newComputer = createEmptyComputer('Computer ' + (i + 1))
    emptyComputers = mori.conj(emptyComputers, newComputer)
  }
  const newState1 = mori.assoc(window.CURRENT_STATE, 'computers', emptyComputers,
                                                    'step', 3)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function changeNumberOfComputers (evt) {
  const numComputers = parseInt(evt.target.value, 10)
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'numComputers', numComputers)
}

function onKeyPress (key) {
  if (key.charCode === 13) {
    submitNumberOfComputers()
  }
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
        <button className='btn btn-primary btn-block' onKeyPress={onKeyPress} onClick={submitNumberOfComputers}>Enter</button>
      </div>
    </div>
  )
}

export default NumberOfComputersPage
