import React from 'react'
import mori from 'mori'

import NewJobButton from './NewJobButton'
import IncompleteJobs from './IncompleteJobs'
import {companyId} from '../util'

function ChoseCompanyName () {
  let companyNameVect = mori.get(window.CURRENT_STATE, 'companyNameArr')
  let companyNameVectJs = mori.toJs(companyNameVect)
  let companyName = companyNameVectJs.map((company, idx) => {
    let clickCompanyId = companyId.bind(null, company)
    return <li key={idx} onClick={clickCompanyId} className='table-view-cell'>{company}</li>
  })
  console.log(companyNameVectJs)
  return <ul className='table-view previous-jobs'>{companyName}</ul>
}

function PreviousJobsPage () {
  return (
    <div>
      <header className='bar bar-nav previous-jobs'>
        <h1 className='title'>All Jobs</h1>
      </header>
      {ChoseCompanyName()}
      {IncompleteJobs()}
      {NewJobButton()}
    </div>
  )
}

export default PreviousJobsPage
