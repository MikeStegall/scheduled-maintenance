import React from 'react'
import {onChange, insertCompanyName} from '../Events/Events'

function CompanyName (appState) {
  return (
    <div className='company-name-form'>
      <label>Insert Company Name:</label> <br />
      <input className='input-name' type='text' name='companyName' placeholder='Company Name' onChange={onChange} />
      <br />
      <input type='submit' className='submit-btn' value='Enter' onClick={insertCompanyName} />
      <br />
      <a href=''>Previous Company Jobs</a>
    </div>
  )
}

export default CompanyName
