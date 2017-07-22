import React from 'react'

// ---------------------------------------------------------
// Virus Check
// ---------------------------------------------------------

// Fully updated = 100, needs updates = 50, None found = 0

function fullUpdate (idx) {
  window.appState.computers[idx].checkForVirusUpdates = 100
}

function needsUpdates (idx) {
  window.appState.computers[idx].checkForVirusUpdates = 50
}

function noneFound (idx) {
  window.appState.computers[idx].checkForVirusUpdates = 0
}

function VirusSoftwareCheck (idx, computer) {
  let clickFullyUpdated = fullUpdate.bind(null, idx)
  let clickNeedsUpdates = needsUpdates.bind(null, idx)
  let clickNoneFound = noneFound.bind(null, idx)

  let isFullyUpdatedChecked = (computer[idx].checkForVirusUpdates === 100)
  let isNeedsUpdatedChecked = (computer[idx].checkForVirusUpdates === 50)
  let isNoneFoundChecked = (computer[idx].checkForVirusUpdates === 0)

  return (
    <div className='input-group virus-software check'>
      <h4 className='check-title'>Virus Sofware</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Fully Updated:
          <input className='radio-btn' type='radio' name='virusSoftwareCheck' onClick={clickFullyUpdated} checked={isFullyUpdatedChecked} />
        </li>
        <li className='table-view-cell'>
            Needs Updates:
          <input className='radio-btn' type='radio' name='virusSoftwareCheck' onClick={clickNeedsUpdates} checked={isNeedsUpdatedChecked} />
        </li>
        <li className='table-view-cell'>
            None Found:
              <input className='radio-btn' type='radio' name='virusSoftwareCheck' onClick={clickNoneFound} checked={isNoneFoundChecked} />
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Disk Space Check
// ---------------------------------------------------------

// Greater than 25% = 100, between 25% and 5% = 50, lower than 5% = 0

function greaterThan25 (idx, computer) {
  window.appState.computers[idx].freeDiskSpace = 100
}

function between25And5 (idx, computer) {
  window.appState.computers[idx].freeDiskSpace = 50
}

function lessThan5 (idx, computer) {
  window.appState.computers[idx].freeDiskSpace = 0
}

function DiskSpaceCheck (idx, computer) {
  let clickgreaterThan25 = greaterThan25.bind(null, idx, computer)
  let clickbetween25And5 = between25And5.bind(null, idx, computer)
  let clicklessThan5 = lessThan5.bind(null, idx, computer)

  let isgreaterThan25 = (computer[idx].freeDiskSpace === 100)
  let isbetween25And5 = (computer[idx].freeDiskSpace === 50)
  let islessThan5 = (computer[idx].freeDiskSpace === 0)

  return (
    <div className='disk-space check'>
      <h4 className='check-title'>Percentage of Free Disk Space</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Free space greater than 25%
          <input className='radio-btn' type='radio' name='diskSpaceCheck' onClick={clickgreaterThan25} checked={isgreaterThan25} />
        </li>
        <li className='table-view-cell'>
            between 25% and 5%
            <input className='radio-btn' type='radio' name='diskSpaceCheck' onClick={clickbetween25And5} checked={isbetween25And5} />
        </li>
        <li className='table-view-cell'>
            Less than 5%
            <input className='radio-btn' type='radio' name='diskSpaceCheck' onClick={clicklessThan5} checked={islessThan5} />
        </li>
      </ul>
    </div>
  )
}


function Step1 (idx, computer) {
  return (
    <div>
      {VirusSoftwareCheck(idx, computer)}
      {DiskSpaceCheck(idx, computer)}
    </div>
  )
}

export default Step1
