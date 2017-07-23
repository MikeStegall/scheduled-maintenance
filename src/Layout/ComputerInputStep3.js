import React from 'react'
import mori from 'mori'

// -----------------------------------------------------------------------------
// Clean the PC
// -----------------------------------------------------------------------------

function changePcCleanNotes (idx, evt) {
  const newName = evt.target.value
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'pcCleanedNotes'], newName)
  // window.appState.computers[idx].pcCleanedNotes = newName
}

function clickPcCleanedFn (idx) {
  if (mori.equals(['computers', idx, 'clickedPcCleaned'], true)) {
    window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'clickedPcCleaned'], false)
    window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'pcCleaned'], 0)
  } else if (mori.equals(['computers', idx, 'clickedPcCleaned'], false)) {
    window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'clickedPcCleaned'], true)
    window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'pcCleaned'], 100)
  }
  // if (window.appState.computers[idx].clickedPcCleaned) {
  //   window.appState.computers[idx].clickedPcCleaned = false
  //   window.appState.computers[idx].pcCleaned = 0
  // } else {
  //   window.appState.computers[idx].clickedPcCleaned = true
  //   window.appState.computers[idx].pcCleaned = 100
  // }
}

function PcCleanedNotes (idx) {
  let onChangePcCleanedNotes = changePcCleanNotes.bind(null, idx)
  if (mori.equals(['computers', idx, 'clickedPcCleaned'], false)) {
    return (
      <textarea rows='4' onChange={onChangePcCleanedNotes} />
    )
  }
}

function TogglePcCleaned (idx) {
  let clickTogglePcCleaned = clickPcCleanedFn.bind(null, idx)
  let className = 'toggle'
  if (mori.equals(['computers', idx, 'clickedPcCleaned'], false)) {
    className = 'toggle'
  } else {
    className = 'toggle active' // To make the toggle say yes
  }
  return (
    <div id='pcCleanToggle' className={className} onClick={clickTogglePcCleaned}>
      <div className='toggle-handle' />
    </div>
  )
}

function PcCleaned (idx) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Inspect and clean inside of Pc</h4>
      {TogglePcCleaned(idx)}
      {PcCleanedNotes(idx)}
    </div>
  )
}

// -----------------------------------------------------------------------------
// Make sure windows is updated
// -----------------------------------------------------------------------------

// 0 updates = 100, between 1 and 5 updates = 50, 5 or greater = 0

function needsZeroUpdates (idx) {
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'numberOfWindowsUpdates'], 100)
  // window.appState.computers[idx].numberOfWindowsUpdates = 100
}

function needsBetweenOneAndFiveUpdates (idx) {
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'numberOfWindowsUpdates'], 50)
  // window.appState.computers[idx].numberOfWindowsUpdates = 50
}

function needsMoreThanFive (idx) {
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'numberOfWindowsUpdates'], 0)
  // window.appState.computers[idx].numberOfWindowsUpdates = 0
}

function CheckForUpdatess (idx) {
  let clickNeedsZeroUpdates = needsZeroUpdates.bind(null, idx)
  let clickNeedsBetweenOneAndFiveUpdates = needsBetweenOneAndFiveUpdates.bind(null, idx)
  let clickNeedsMoreThanFive = needsMoreThanFive.bind(null, idx)

  let isneedsZeroUpdates = (mori.equals(['computers', idx, 'numberOfWindowsUpdates'], 100))
  let isneedsBetweenOneAndFiveUpdates = (mori.equals(['computers', idx, 'numberOfWindowsUpdates'], 50))
  let isneedsMoreThanFive = (mori.equals(['computers', idx, 'numberOfWindowsUpdates'], 0))

  // let isneedsZeroUpdates = (computer[idx].numberOfWindowsUpdates === 100)
  // let isneedsBetweenOneAndFiveUpdates = (computer[idx].numberOfWindowsUpdates === 50)
  // let isneedsMoreThanFive = (computer[idx].numberOfWindowsUpdates === 0)

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

function ComputerInputStep3 (idx, computer) {
  return (
    <div>
      {PcCleaned(idx, computer)}
      {CheckForUpdatess(idx, computer)}
    </div>
  )
}

export default ComputerInputStep3
