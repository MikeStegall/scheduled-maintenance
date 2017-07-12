import React from 'react'
import {onChange} from '../Events/Events'

function nameComputers () {
  for (let names = 0; names < window.appState.numberOfComputers; names++) {
    console.log('hi')
    // return (
    //   <div className='computer names'>
    //     <h5>Name the Computers</h5>
    //     <input type='text' name='nameofcomputer' onChange={onChange} />
    //   </div>)
  }
}

function NameofComputers () {
  return (
    <div className='number-of-computers'>
      <h1>{window.appState.companyName}</h1>
      <div className='company-name-form'>
        {nameComputers()}
      </div>
    </div>
  )
}

export default NameofComputers
