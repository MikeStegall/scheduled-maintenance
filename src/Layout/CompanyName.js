import React from 'react'

function submitCompanyName () {
  window.appState.step = 2
}

function changeCompanyName (evt) {
  const newName = evt.target.value
  window.appState.companyName = newName
}

function CompanyNameInputPage (name) {
  // console.log(window.appState.step)
  return (
    <div className='input-group'>
      <label>Insert Company Name:</label>
      <input className='input-name' type='text' name='companyName' placeholder='Company Name' onChange={changeCompanyName} value={name} />
      <input type='submit' className='btn btn-block' value='Enter' onClick={submitCompanyName} />
    </div>
  )
}

export default CompanyNameInputPage
