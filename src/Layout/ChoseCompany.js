import React from 'react'
import firebase from '../firebase'
import mori from 'mori'

import NewJobButton from './NewJobButton'

function clickCompanyId (e) {
  let companyId = e.target.innerHTML
  firebase.database().ref(companyId).once('value').then(function (snapshot) {
    let company = snapshot.val()
    let computers = company.computers
    const newState1 = mori.assoc(window.CURRENT_STATE, 'computers', computers)
    window.NEXT_STATE = newState1
  })
  const newState1 = mori.assoc(window.CURRENT_STATE, 'companyId', companyId)
  const newState2 = mori.assoc(newState1, 'showPreviousJobComputerResults', true)
  window.NEXT_STATE = newState2
}

function ChoseCompanyName () {
  let companyNameVect = mori.get(window.CURRENT_STATE, 'companyNameArr')
  let companyNameVectJs = mori.toJs(companyNameVect)
  let companyName = companyNameVectJs.map((name, idx) => {
    return <li key={idx} className='table-view-cell'>{name}</li>
  })
  return <ul className='table-view' onClick={clickCompanyId}>{companyName}</ul>
}

function PreviousJobsPage () {
  return (
    <div>
      {ChoseCompanyName()}
      {NewJobButton()}
    </div>
  )
}

export default PreviousJobsPage
