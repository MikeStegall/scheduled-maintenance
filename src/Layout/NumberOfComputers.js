import React from 'react'

function submitNumberOfComputers () {
  window.appState.step = 3
}

function changeNumberOfComputers (evt) {
  const newName = evt.target.value
  window.appState.numberOfComputers = newName
}

function NameOfCompany () {
  return <h3 className='company-name'>{window.appState.companyName}</h3>
}

function NumberOfComputersPage (number) {
  return (
    <div className='input-group'>
      {NameOfCompany()}
      <div className='input-row'>
        <label>Number of Computers:</label>
        <input className='number-of-computers' type='numbers' placeholder='Number of Computers' name='numberOfComputes' onChange={changeNumberOfComputers} value={number} />
        <button className='btn btn-primary btn-block' onClick={submitNumberOfComputers}>Enter</button>
      </div>
    </div>
  )
}

export default NumberOfComputersPage
