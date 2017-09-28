import React from 'react'
// import firebase from '../firebase'
import mori from 'mori'

import NewJobButton from './NewJobButton'
import {companyId} from '../util'

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
