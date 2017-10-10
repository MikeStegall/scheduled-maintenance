import React from 'react'
import mori from 'mori'

// Clcik to view a list of previous jobs that have been complete to view different company data

function clickChooseNewCompanyBtn () {
  const newState1 = mori.assoc(window.CURRENT_STATE, 'computers', [])
  const newState2 = mori.assoc(newState1, 'companyAverage', 0)
  const newState3 = mori.assoc(newState2, 'companyName', '')
  const newState4 = mori.assoc(newState3, 'companyId', null)
  const newState5 = mori.assoc(newState4, 'showPreviousJobComputerResults', false)
  window.NEXT_STATE = newState5
}

function ChooseNewCompanyBtn () {
  return <button className='btn btn-positive btn-block' onClick={clickChooseNewCompanyBtn}>Choose Different Company</button>
}

export default ChooseNewCompanyBtn
