import React from 'react'
import mori from 'mori'
// import {morilog} from '../util'
// ---------------------------------------------------------
// Virus Check
// ---------------------------------------------------------

// Fully updated = 100, needs updates = 50, None found = 0

function fullUpdate (idx) {
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'checkForVirusUpdates'], 100)
}

function needsUpdates (idx) {
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'checkForVirusUpdates'], 50)
}

function noneFound (idx) {
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'checkForVirusUpdates'], 0)
}

function VirusSoftwareCheck (idx) {
  let clickFullyUpdated = fullUpdate.bind(null, idx)
  let clickNeedsUpdates = needsUpdates.bind(null, idx)
  let clickNoneFound = noneFound.bind(null, idx)

  let isFullyUpdatedChecked = (mori.hasKey(['computers', idx, 'checkForVirusUpdates'], 100)) // not sure if this is the righ function for this.
  let isNeedsUpdatedChecked = (mori.hasKey(['computers', idx, 'checkForVirusUpdates'], 50)) // not sure if this is the righ function for this.
  let isNoneFoundChecked = (mori.hasKey(['computers', idx, 'checkForVirusUpdates'], 0)) // not sure if this is the righ function for this.
  // let isFullyUpdatedChecked = (computer[idx].checkForVirusUpdates === 100)
  // let isNeedsUpdatedChecked = (computer[idx].checkForVirusUpdates === 50)
  // let isNoneFoundChecked = (computer[idx].checkForVirusUpdates === 0)

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

function greaterThan25 (idx) {
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, ['computers', idx, 'freeDiskSpace'], 100)
  // window.appState.computers[idx].freeDiskSpace = 100
}

function between25And5 (idx) {
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, ['computers', idx, 'freeDiskSpace'], 50)
  // window.appState.computers[idx].freeDiskSpace = 50
}

function lessThan5 (idx) {
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, ['computers', idx, 'freeDiskSpace'], 0)
  // window.appState.computers[idx].freeDiskSpace = 0
}

function DiskSpaceCheck (idx) {
  let clickgreaterThan25 = greaterThan25.bind(null, idx)
  let clickbetween25And5 = between25And5.bind(null, idx)
  let clicklessThan5 = lessThan5.bind(null, idx)

  let isgreaterThan25 = (mori.equals()) // not sure if this is the righ function for this.
  let isbetween25And5 = (mori.equals()) // not sure if this is the righ function for this.
  let islessThan5 = (mori.equals()) // not sure if this is the righ function for this.
  // let isgreaterThan25 = (computer[idx].freeDiskSpace === 100)
  // let isbetween25And5 = (computer[idx].freeDiskSpace === 50)
  // let islessThan5 = (computer[idx].freeDiskSpace === 0)

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

function ComputerInputStep1 (idx) {
  return (
    <div>
      {VirusSoftwareCheck(idx)}
      {DiskSpaceCheck(idx)}
    </div>
  )
}

export default ComputerInputStep1
