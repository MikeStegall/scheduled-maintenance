import React from 'react'
import mori from 'mori'
import firebase from '../firebase'

function submitCompanyName () {
  const companyName = mori.get(window.CURRENT_STATE, 'companyName')
  // do nothing if the user has not entered a company name
  if (companyName !== '') {
    window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'step', 2)
    pushFireBase()
  } else {
    window.alert('Plase enter a company Name')
  }
}

function pushFireBase () {
  const appStateJS = mori.toJs(window.CURRENT_STATE)
  const rootRef = firebase.database().ref().child('CompanyID')
  rootRef.push(appStateJS)
}

function changeCompanyName (evt) {
  const newName = evt.target.value
  const newState = mori.assoc(window.CURRENT_STATE, 'companyName', newName)
  window.NEXT_STATE = newState
}

function onKeyPress (key) {
  if (key.charCode === 13) {
    submitCompanyName()
  }
}

function CompanyNameInputPage (name) {
  return (
    <div className='input-group company-name-input-group'>
      <div className='input-row company-name-input'>
        <input className='input-name' type='text' name='companyName' placeholder='Company Name' onKeyPress={onKeyPress} onChange={changeCompanyName} value={name} />
      </div>
      <button className='btn btn-primary btn-block' onClick={submitCompanyName}>Enter</button>
    </div>
  )
}

export default CompanyNameInputPage
