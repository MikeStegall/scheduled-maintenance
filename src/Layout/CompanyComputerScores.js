import React from 'react'
import mori from 'mori'

import NewJobButton from './NewJobButton'
import ChooseNewCompanyBtn from './ChooseNewCompanyBtn'

function CompanyResults () {
  const computers = mori.get(window.CURRENT_STATE, 'computers')
  const companyAverage = mori.get(window.CURRENT_STATE, 'companyAverage')
  const computersArr = mori.toJs(computers)
  const companyAverageJs = mori.toJs(companyAverage)
  const companyName = mori.get(window.CURRENT_STATE, 'companyName')
  const companyNameJs = mori.toJs(companyName)
  let companyComputers = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.computerName}</p>
  })
  let companyVirusCheckUpdates = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.checkForVirusUpdates}</p>
  })
  let companyFreeDiskSpace = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.freeDiskSpace}</p>
  })
  let companyTempFileSize = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.sizeOfTempFiles}</p>
  })
  let companyFragmentation = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.fragmentation}</p>
  })
  let companyWindowsUpdates = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.numberOfWindowsUpdates}</p>
  })
  let companyPcCleaned = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.pcCleaned}</p>
  })
  let companyPcCleanedNotes = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.pcCleanedNotes}</p>
  })
  let companyVirusesFound = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.virusesFound}</p>
  })
  let companyVirusesFoundNotes = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.virusesFoundNotes}</p>
  })
  let companyHardDriveHealth = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.hardDriveHealth}</p>
  })
  let companyHardDriveHealthNotes = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.hardDriveHealthNotes}</p>
  })
  let companyEventLogs = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.eventLogs}</p>
  })
  let companyEventLogsNotes = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.eventLogsNotes}</p>
  })
  let companySystemFileCheck = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.systemFileCheck}</p>
  })
  let companySystemFileCheckNotes = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.systemFileCheckNotes}</p>
  })
  let companyComputerScore = computersArr.map((computer, idx) => {
    return <p key={idx} className='spread-sheet-data'>{computer.averageScore}</p>
  })

  return (
    <div>
      <h1 className='company-name-score-board'>{companyNameJs}</h1>
      <div className='spread-sheet-headers'>
        <div>
          <h4 className='headers'>Computer Names</h4>
          {companyComputers}
        </div>
        <div>
          <h4 className='headers'>Virus Software Updates</h4>
          {companyVirusCheckUpdates}
        </div>
        <div>
          <h4 className='headers'>Free Disk Space</h4>
          {companyFreeDiskSpace}
        </div>
        <div>
          <h4 className='headers'>Size of Temp Files</h4>
          {companyTempFileSize}
        </div>
        <div>
          <h4 className='headers'>Disk Fragmen-tation</h4>
          {companyFragmentation}
        </div>
        <div>
          <h4 className='headers'>Windows Updates</h4>
          {companyWindowsUpdates}
        </div>
        <div>
          <h4 className='headers'>PC Cleaned</h4>
          {companyPcCleaned}
        </div>
        <div>
          <h4 className='headers'>PcCleaned Notes</h4>
          {companyPcCleanedNotes}
        </div>
        <div>
          <h4 className='headers'>Viruses Found</h4>
          {companyVirusesFound}
        </div>
        <div>
          <h4 className='headers'>Viruses Found Notes</h4>
          {companyVirusesFoundNotes}
        </div>
        <div>
          <h4 className='headers'>Hard Drive Status</h4>
          {companyHardDriveHealth}
        </div>
        <div>
          <h4 className='headers'>Hard Drive Status Notes</h4>
          {companyHardDriveHealthNotes}
        </div>
        <div>
          <h4 className='headers'>Event Logs</h4>
          {companyEventLogs}
        </div>
        <div>
          <h4 className='headers'>Event Logs Notes</h4>
          {companyEventLogsNotes}
        </div>
        <div>
          <h4 className='headers'>File Check</h4>
          {companySystemFileCheck}
        </div>
        <div>
          <h4 className='headers'>File Check Notes</h4>
          {companySystemFileCheckNotes}
        </div>
        <div>
          <h4 className='headers'>Computer Score</h4>
          {companyComputerScore}
        </div>
      </div>
      <div className='company-name-score-board'>
        <h2>{companyNameJs} Company Average</h2>
        <h4>{companyAverageJs}</h4>
      </div>
      {NewJobButton()}
      {ChooseNewCompanyBtn()}
    </div>
  )
}

export default CompanyResults
