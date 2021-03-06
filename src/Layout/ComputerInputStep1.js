import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'
// ---------------------------------------------------------
// Virus Check
// ---------------------------------------------------------

// Fully updated = 100, needs updates = 50, None found = 0

function fullUpdate (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'checkForVirusUpdates'], 100)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function needsUpdates (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'checkForVirusUpdates'], 50)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function noneFound (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'checkForVirusUpdates'], 0)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function VirusSoftwareCheck (idx, virusUpdates) {
  // binding functions to variables
  let clickFullyUpdated = fullUpdate.bind(null, idx)
  let clickNeedsUpdates = needsUpdates.bind(null, idx)
  let clickNoneFound = noneFound.bind(null, idx)

  // if the following equals the number then it is true
  let isFullyUpdatedChecked = (mori.equals(virusUpdates, 100))
  let isNeedsUpdatedChecked = (mori.equals(virusUpdates, 50))
  let isNoneFoundChecked = (mori.equals(virusUpdates, 0))

  return (
    <div className='input-group virus-software check'>
      <h4 className='check-title'>Virus Software</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
          Fully Updated:
          <input className='radio-btn' type='radio' name='virusSoftwareCheck' onClick={clickFullyUpdated} defaultChecked={isFullyUpdatedChecked} />
        </li>
        <li className='table-view-cell'>
          Needs Updates:
          <input className='radio-btn' type='radio' name='virusSoftwareCheck' onClick={clickNeedsUpdates} defaultChecked={isNeedsUpdatedChecked} />
        </li>
        <li className='table-view-cell'>
            None Found:
            <input className='radio-btn' type='radio' name='virusSoftwareCheck' onClick={clickNoneFound} defaultChecked={isNoneFoundChecked} />
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
}

function between25And5 (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'freeDiskSpace'], 50)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function lessThan5 (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'freeDiskSpace'], 0)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function DiskSpaceCheck (idx, freeDiskSpace) {
  // binding functions to variables
  let clickgreaterThan25 = greaterThan25.bind(null, idx)
  let clickbetween25And5 = between25And5.bind(null, idx)
  let clicklessThan5 = lessThan5.bind(null, idx)

  // if the following equals the number then it is true
  let isgreaterThan25 = (mori.equals(freeDiskSpace, 100))
  let isbetween25And5 = (mori.equals(freeDiskSpace, 50))
  let islessThan5 = (mori.equals(freeDiskSpace, 0))

  return (
    <div className='disk-space check'>
      <h4 className='check-title'>Percentage of Free Disk Space</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Free space greater than 25%
          <input className='radio-btn' type='radio' name='diskSpaceCheck' onClick={clickgreaterThan25} defaultChecked={isgreaterThan25} />
        </li>
        <li className='table-view-cell'>
            between 25% and 5%
            <input className='radio-btn' type='radio' name='diskSpaceCheck' onClick={clickbetween25And5} defaultChecked={isbetween25And5} />
        </li>
        <li className='table-view-cell'>
            Less than 5%
            <input className='radio-btn' type='radio' name='diskSpaceCheck' onClick={clicklessThan5} defaultChecked={islessThan5} />
        </li>
      </ul>
    </div>
  )
}

class ComputerInputStep1 extends MoriComponent {
  render () {
    // assigning variables from mori
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
