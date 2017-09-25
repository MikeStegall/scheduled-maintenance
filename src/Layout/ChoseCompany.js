import React from 'react'
import firebase from '../firebase'
import mori from 'mori'

function clickNewJobButton () {
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'showPreviousJobs', false)
}

function NewJobButton () {
  return <button className='btn btn-primary btn-block' onClick={clickNewJobButton}>New Job</button>
}

function ChoseCompanyName () {
  let companyNameArr = []
  firebase.database().ref().once('value').then(function (snapshot) {
    let company = snapshot.val()
    for (let NameOfCompany in company) {
      companyNameArr.push(NameOfCompany)
    }
    let newState = mori.assoc(window.CURRENT_STATE, 'companyNameArr', companyNameArr)
    window.NEXT_STATE = newState
    return companyNameArr
  })

  let companyNameVect = mori.get(window.CURRENT_STATE, 'companyNameArr')
  let companyNameVectJs = mori.toJs(companyNameVect)
  let companyName = companyNameVectJs.map((name, idx) => {
    return <li key={idx} className='table-view-cell'>{name}</li>
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
