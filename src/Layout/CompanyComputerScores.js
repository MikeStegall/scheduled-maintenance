import React from 'react'
import mori from 'mori'

import NewJobButton from './NewJobButton'

function CompanyResults () {
  const computers = mori.get(window.CURRENT_STATE, 'computers')
  const computersArr = mori.toJs(computers)
  // console.log(computersArr)
  let companyComputers = computersArr.map((computer, idx) => {
    // let computerName = computersArr.computerName
    // let computerNameJs = mori.toJs(computerName)
    console.log(computer.computerName)
    return <div key={idx}>{computer.computerName}</div>
  })
  // console.log(computersArr)

  return (
    <div>
      <div>{companyComputers}</div>
      {NewJobButton()}
    </div>
  )
}

export default CompanyResults
