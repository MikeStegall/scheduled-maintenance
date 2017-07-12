import React from 'react'
import {onChange} from '../Events/Events'

function NumberOfComputers () {
  return (
    <div className='number-of-computers'>
      <h1>{window.appState.companyName}</h1>
      <div className='company-name-form'>
        <label>Number of Computers:</label> <br />
        <input className='input-name' type='numbers' placeholder='Number of Computers' name='numberOfComputes' onChange={onChange} />
        <br />
        <input type='submit' className='submit-btn' />
      </div>
    </div>
  )
}

export default NumberOfComputers
