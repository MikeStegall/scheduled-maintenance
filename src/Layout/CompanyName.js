import React from 'react'

function submitCompanyName () {
  window.appState.step = 2
}

function changeCompanyName (evt) {
  const newName = evt.target.value
  window.appState.companyName = newName
}

function CompanyNameInputPage (name) {
  return (
    <div className='input-group'>
      <div className='input-row'>
        {/* <label>Company Name:</label> */}
        <input className='input-name' type='text' name='companyName' placeholder='Company Name' onChange={changeCompanyName} value={name} />
      </div>
      <button className='btn btn-primary btn-block' onClick={submitCompanyName}>Enter</button>
    </div>
  )
}

export default CompanyNameInputPage
