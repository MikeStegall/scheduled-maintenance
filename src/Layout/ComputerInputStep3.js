import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'
// import {morilog} from '../util.js'

// -----------------------------------------------------------------------------
// Clean the PC
// -----------------------------------------------------------------------------

function changePcCleanNotes (idx, evt) {
  const newName = evt.target.value
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'pcCleanedNotes'], newName)
}

function clickPcCleanedFn (idx, clickedPcCleaned) {
  if (mori.equals(clickedPcCleaned, true)) {
    const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'clickedPcCleaned'], false,
                                                           ['computers', idx, 'pcCleaned'], 0)
    window.NEXT_STATE = newState
  } else if (mori.equals(clickedPcCleaned, false)) {
    const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'clickedPcCleaned'], true,
                                                           ['computers', idx, 'pcCleaned'], 100)
    window.NEXT_STATE = newState
  }
}

function PcCleanedNotes (idx, clickedPcCleaned) {
  let onChangePcCleanedNotes = changePcCleanNotes.bind(null, idx, clickedPcCleaned)
  if (mori.equals(clickedPcCleaned, false)) {
    return (
      <textarea rows='4' onChange={onChangePcCleanedNotes} />
    )
  }
}

function TogglePcCleaned (idx, clickedPcCleaned) {
  let clickTogglePcCleaned = clickPcCleanedFn.bind(null, idx, clickedPcCleaned)
  let className = 'toggle'
  if (mori.equals(clickedPcCleaned, false)) {
    className = 'toggle'
  } else if (mori.equals(clickedPcCleaned, true)) {
    className = 'toggle active' // To make the toggle say yes
  }
  return (
    <div id='pcCleanToggle' className={className} onClick={clickTogglePcCleaned}>
      <div className='toggle-handle' />
    </div>
  )
}

function PcCleaned (idx, clickedPcCleaned) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Inspect and clean inside of Pc</h4>
      {TogglePcCleaned(idx)}
      {PcCleanedNotes(idx, clickedPcCleaned)}
    </div>
  )
}

// -----------------------------------------------------------------------------
// Make sure windows is updated
// -----------------------------------------------------------------------------

// 0 updates = 100, between 1 and 5 updates = 50, 5 or greater = 0

function needsZeroUpdates (idx) {
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'numberOfWindowsUpdates'], 100)
}

function needsBetweenOneAndFiveUpdates (idx) {
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'numberOfWindowsUpdates'], 50)
}

function needsMoreThanFive (idx) {
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'numberOfWindowsUpdates'], 0)
}

function CheckForUpdatess (idx, numberOfWindowsUpdates) {
  let clickNeedsZeroUpdates = needsZeroUpdates.bind(null, idx)
  let clickNeedsBetweenOneAndFiveUpdates = needsBetweenOneAndFiveUpdates.bind(null, idx)
  let clickNeedsMoreThanFive = needsMoreThanFive.bind(null, idx)

  let isneedsZeroUpdates = (mori.equals(numberOfWindowsUpdates, 100))
  let isneedsBetweenOneAndFiveUpdates = (mori.equals(numberOfWindowsUpdates, 50))
  let isneedsMoreThanFive = (mori.equals(numberOfWindowsUpdates, 0))

  return (
    <div className='updates check'>
      <h4 className='check-title'>Check and run updates for computer:</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Fully Updated
          <input className='radio-btn' type='radio' name='WindowsUpdates' checked={isneedsZeroUpdates} onClick={clickNeedsZeroUpdates} />
        </li>
        <li className='table-view-cell'>
            Needs Updates
            <input className='radio-btn' type='radio' name='WindowsUpdates' checked={isneedsBetweenOneAndFiveUpdates} onClick={clickNeedsBetweenOneAndFiveUpdates} />
        </li>
        <li className='table-view-cell'>
            None Found
            <input className='radio-btn' type='radio' name='WindowsUpdates' checked={isneedsMoreThanFive} onClick={clickNeedsMoreThanFive} />
        </li>
      </ul>
    </div>
  )
}

class ComputerInputStep3 extends MoriComponent {
  render () {
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')

    const pcCleaned = mori.getIn(this.props.imdata, ['computers', idx, 'pcCleaned'])
    const clickedPcCleaned = mori.getIn(this.props.imdata, ['computers', idx, 'clickedPcCleaned'])

    const numberOfWindowsUpdates = mori.getIn(this.props.imdata, ['computers', idx, 'numberOfWindowsUpdates'])

    return (
      <div>
        {PcCleaned(idx, pcCleaned, clickedPcCleaned)}
        {CheckForUpdatess(idx, numberOfWindowsUpdates)}
      </div>
    )
  }
}

export default ComputerInputStep3
