import React from 'react'
import firebase from '../firebase'
import mori from 'mori'

import NewJobButton from './NewJobButton'

function companyId (company) {
  firebase.database().ref(company).once('value').then(function (snapshot) {
    let company = snapshot.val()
    let computers = company.computers
    const newState1 = mori.assoc(window.CURRENT_STATE, 'computers', computers)
    const newState2 = mori.assoc(newState1, 'companyAverage', company.companyAverage)
    const newState3 = mori.assoc(newState2, 'companyName', company.companyName)
    window.NEXT_STATE = newState3
  })
  const newState1 = mori.assoc(window.CURRENT_STATE, 'companyId', companyId)
  const newState2 = mori.assoc(newState1, 'showPreviousJobComputerResults', true)
  window.NEXT_STATE = newState2
}

function ChoseCompanyName () {
  let companyNameVect = mori.get(window.CURRENT_STATE, 'companyNameArr')
  let companyNameVectJs = mori.toJs(companyNameVect)
  let companyName = companyNameVectJs.map((company, idx) => {
    let clickCompanyId = companyId.bind(null, company)
    return <li key={idx} onClick={clickCompanyId} className='table-view-cell'>{company}</li>
  })
  return <ul className='table-view'>{companyName}</ul>
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
