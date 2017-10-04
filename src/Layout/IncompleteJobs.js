import React from 'react'
import firebase from '../firebase'
import mori from 'mori'

function companyId (company) {
  firebase.database().ref(company).once('value').then(function (snapshot) {
    let company = snapshot.val()
    window.NEXT_STATE = mori.toClj(company)
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
      <header className='bar bar-nav'>
        <h1 className='title'>Incomplete Jobs</h1>
      </header>
      {ChoseCompanyName()}
    </div>
  )
}

export default IncompleteJobs
