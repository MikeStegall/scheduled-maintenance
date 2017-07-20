import React from 'react'
import createEmptyComputer from '../index.js'

function submitNumberOfComputers () {
  if (window.appState.numberOfComputers === 0) {
    // TODO write a better return
    return
  } else {
    window.appState.step = 3
    addCreateEmptyComputer()
  }
}

function addCreateEmptyComputer () {
  let emptyComputers = []
  for (let cpu = 0; cpu < window.appState.numberOfComputers; cpu++) {
    emptyComputers.push(createEmptyComputer())
  }

  window.appState.computers = emptyComputers
}

function changeNumberOfComputers (evt) {
  const totalComputers = evt.target.value
  window.appState.numberOfComputers = parseInt(totalComputers, 10)
}

function NameOfCompany () {
  return <h3 className='company-name'>{window.appState.companyName}</h3>
}

function NumberOfComputersPage (number) {
  return (
    <div className='input-group'>
      <NameOfCompany />
      <div className='input-row computer-number-input'>
        <label>Number of Computers:</label>
        <input className='number-of-computers' type='text' placeholder='Number of Computers' name='numberOfComputes' onChange={changeNumberOfComputers} value={number} />
        <button className='btn btn-primary btn-block' onClick={submitNumberOfComputers}>Enter</button>
      </div>
    </div>
  )
}

export default NumberOfComputersPage
