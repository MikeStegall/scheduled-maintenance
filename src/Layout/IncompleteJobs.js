import React from 'react'
import firebase from '../firebase'
import mori from 'mori'

// import {morilog} from '../util'

// import NewJobButton from './NewJobButton'

function companyId (company) {
  firebase.database().ref(company).once('value').then(function (snapshot) {
    let company = snapshot.val()
    console.log(company)
    window.NEXT_STATE = mori.toClj(company)
    // let computers = company.computers
    // const newState1 = mori.assoc(window.CURRENT_STATE, 'computers', computers)
    // const newState2 = mori.assoc(newState1, 'activeComputerIdx', company.activeComputerIdx)
    // const newState3 = mori.assoc(newState2, 'companyName', company.companyName)
    // const newState4 = mori.assoc(newState3, 'step', company.step)
    // const newState5 = mori.assoc(newState4, 'companyId', company.companyId)
    // const newState6 = mori.assoc(newState5, 'showPreviousJobs', false)
    // console.log('newState6')
    // morilog(newState6)
    // window.NEXT_STATE = newState5
    // console.log('CURRENT_STATE')
    // morilog(window.CURRENT_STATE)
  })
}

function ChoseCompanyName () {
  let companyNameVect = mori.get(window.CURRENT_STATE, 'incompleteJobArr')
  let companyNameVectJs = mori.toJs(companyNameVect)
  let companyName = companyNameVectJs.map((company, idx) => {
    let clickCompanyId = companyId.bind(null, company)
    return <li key={idx} onClick={clickCompanyId} className='table-view-cell'>{company}</li>
  })
  return <ul className='table-view continue-jobs'>{companyName}</ul>
}

function IncompleteJobs () {
  return (
    <div>
      {ChoseCompanyName()}
    </div>
  )
}

export default IncompleteJobs
