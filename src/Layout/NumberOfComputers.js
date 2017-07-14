import React from 'react'

function submitNumberOfComputers () {
  window.appState.step = 3
}

function changeComputerName (evt) {
  const newName = evt.target.value
  window.appState.companyName = newName
}

function NumberOfComputersPage (number) {
  return (
    <div className='number-of-computers'>
      <h1>{window.appState.companyName}</h1>
      <div className='company-name-form'>
        <label>Number of Computers:</label> <br />
        <input className='input-name' type='numbers' placeholder='Number of Computers' name='numberOfComputes' onChange={changeComputerName} value={number} />
        <br />
        <input type='submit' className='submit-btn' onClick={submitNumberOfComputers} />
      </div>
    </div>
  )
}

export default NumberOfComputersPage
