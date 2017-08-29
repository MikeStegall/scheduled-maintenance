import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'
import {pushFireBase} from '../util'
// ---------------------------------------------------------
// Virus Check
// ---------------------------------------------------------

// Fully updated = 100, needs updates = 50, None found = 0

function fullUpdate (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'checkForVirusUpdates'], 100)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
  pushFireBase()
}

function needsUpdates (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'checkForVirusUpdates'], 50)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
  pushFireBase()
}

function noneFound (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'checkForVirusUpdates'], 0)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
  pushFireBase()
}

function VirusSoftwareCheck (idx, virusUpdates) {
  let clickFullyUpdated = fullUpdate.bind(null, idx)
  let clickNeedsUpdates = needsUpdates.bind(null, idx)
  let clickNoneFound = noneFound.bind(null, idx)

  let isFullyUpdatedChecked = (mori.equals(virusUpdates, 100))
  let isNeedsUpdatedChecked = (mori.equals(virusUpdates, 50))
  let isNoneFoundChecked = (mori.equals(virusUpdates, 0))

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
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'freeDiskSpace'], 100)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
  pushFireBase()
}

function between25And5 (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'freeDiskSpace'], 50)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
  pushFireBase()
}

function lessThan5 (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'freeDiskSpace'], 0)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
  pushFireBase()
}

function DiskSpaceCheck (idx, freeDiskSpace) {
  let clickgreaterThan25 = greaterThan25.bind(null, idx)
  let clickbetween25And5 = between25And5.bind(null, idx)
  let clicklessThan5 = lessThan5.bind(null, idx)

  let isgreaterThan25 = (mori.equals(freeDiskSpace, 100))
  let isbetween25And5 = (mori.equals(freeDiskSpace, 50))
  let islessThan5 = (mori.equals(freeDiskSpace, 0))

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

class ComputerInputStep1 extends MoriComponent {
  render () {
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')
    const virusUpdates = mori.getIn(this.props.imdata, ['computers', idx, 'checkForVirusUpdates'])
    const freeDiskSpace = mori.getIn(this.props.imdata, ['computers', idx, 'freeDiskSpace'])
    return (
      <div>
        {VirusSoftwareCheck(idx, virusUpdates)}
        {DiskSpaceCheck(idx, freeDiskSpace)}
      </div>
    )
  }
}

export default ComputerInputStep1
