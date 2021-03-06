import React from 'react'
import mori from 'mori'
import {fetchCompanyIdFromFirebase} from '../util'

function submitCompanyName () {
  const companyName = mori.get(window.CURRENT_STATE, 'companyName')
  let month = new Date().getMonth()
  const dayOfMonth = new Date().getDate()
  const year = new Date().getFullYear()

  if (month === 0) month = 'Jan'
  if (month === 1) month = 'Feb'
  if (month === 2) month = 'Mar'
  if (month === 3) month = 'Apr'
  if (month === 4) month = 'May'
  if (month === 5) month = 'Jun'
  if (month === 6) month = 'Jul'
  if (month === 7) month = 'Aug'
  if (month === 8) month = 'Sep'
  if (month === 9) month = 'Oct'
  if (month === 10) month = 'Nov'
  if (month === 11) month = 'Dec'

  const date = dayOfMonth + '-' + month + '-' + year
  const companyId = date + ' ' + companyName // the company id is formated like dd-mm-yyyy NameOfCompany
  if (companyName !== '') {
    let newState1 = mori.assoc(window.CURRENT_STATE, 'step', 2)
    let newState2 = mori.assoc(newState1, 'time', Date())
    const newState3 = mori.assoc(newState2, 'companyId', companyId)
    window.NEXT_STATE = newState3
  } else {
    window.alert('Plase enter a company Name')
  }
}

// changes the name when you type anything in the field
function changeCompanyName (evt) {
  const newName = evt.target.value
  const newState = mori.assoc(window.CURRENT_STATE, 'companyName', newName)
  window.NEXT_STATE = newState
}

function onKeyPress (key) {
  if (key.charCode === 13) { // if enter is pushed then submit the compnay name
    submitCompanyName()
  }
}

function clickShowIncompleteJobs () {
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'showPreviousJobs', true)
  fetchCompanyIdFromFirebase()
}

function clickShowPreviousJobs () {
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'showPreviousJobs', true)
  fetchCompanyIdFromFirebase()
}

function CompanyNameInputPage (name) {
  return (
    <div className='input-group company-name-input-group'>
      <div className='input-row company-name-input'>
        <input className='input-name' type='text' name='companyName' placeholder='Company Name' onKeyPress={onKeyPress} onChange={changeCompanyName} value={name} />
      </div>
      <button className='btn btn-primary btn-block' onClick={submitCompanyName}>Enter</button>
      <button className='btn btn-positive btn-block previous-jobs' onClick={clickShowPreviousJobs}>All Jobs</button>
      <button className='btn btn-positive btn-block continue-jobs-btn' onClick={clickShowIncompleteJobs}>Incomplete Jobs</button>
    </div>
  )
}

export default CompanyNameInputPage
