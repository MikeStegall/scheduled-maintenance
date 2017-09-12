import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'

// -----------------------------------------------------------------------------
// Clean the PC
// -----------------------------------------------------------------------------

function changePcCleanNotes (idx, evt) {
  const newName = evt.target.value
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'pcCleanedNotes'], newName)
}

function clickPcCleanedFn (idx, hasPcBeenCleaned) {
  if (hasPcBeenCleaned) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'hasPcBeenCleaned'], false)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'pcCleaned'], 0)
    const newState3 = mori.assoc(newState2, 'time', Date())
    window.NEXT_STATE = newState3
  } else if (!hasPcBeenCleaned) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'hasPcBeenCleaned'], true)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'pcCleaned'], 100)
    const newState3 = mori.assoc(newState2, 'time', Date())
    window.NEXT_STATE = newState3
  }
}

function PcCleanedNotes (idx, hasPcBeenCleaned, pcCleanedNotes) {
  let onChangePcCleanedNotes = changePcCleanNotes.bind(null, idx)
  if (mori.equals(hasPcBeenCleaned, false)) {
    return (
      <textarea rows='4' onChange={onChangePcCleanedNotes} value={pcCleanedNotes} />
    )
  }
}

function TogglePcCleaned (idx, hasPcBeenCleaned) {
  let clickTogglePcCleaned = clickPcCleanedFn.bind(null, idx, hasPcBeenCleaned)
  let className = 'toggle'
  if (!hasPcBeenCleaned) {
    className = 'toggle'
  } else if (hasPcBeenCleaned) {
    className = 'toggle active' // To make the toggle say yes
  }
  return (
    <div id='pcCleanToggle' className={className} onClick={clickTogglePcCleaned}>
      <div className='toggle-handle' />
    </div>
  )
}

function PcCleaned (idx, hasPcBeenCleaned, pcCleanedNotes) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Inspect and clean inside of Pc</h4>
      {TogglePcCleaned(idx, hasPcBeenCleaned)}
      {PcCleanedNotes(idx, hasPcBeenCleaned, pcCleanedNotes)}
    </div>
  )
}

// -----------------------------------------------------------------------------
// Make sure windows is updated
// -----------------------------------------------------------------------------

// 0 updates = 100, between 1 and 5 updates = 50, 5 or greater = 0

function needsZeroUpdates (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'numberOfWindowsUpdates'], 100)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function needsBetweenOneAndFiveUpdates (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'numberOfWindowsUpdates'], 50)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function needsMoreThanFive (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'numberOfWindowsUpdates'], 0)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
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
            Needs 5 to 10
            <input className='radio-btn' type='radio' name='WindowsUpdates' checked={isneedsBetweenOneAndFiveUpdates} onClick={clickNeedsBetweenOneAndFiveUpdates} />
        </li>
        <li className='table-view-cell'>
            Needs 10 or more
            <input className='radio-btn' type='radio' name='WindowsUpdates' checked={isneedsMoreThanFive} onClick={clickNeedsMoreThanFive} />
        </li>
      </ul>
    </div>
  )
}

class ComputerInputStep3 extends MoriComponent {
  render () {
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')

    const hasPcBeenCleaned = mori.getIn(this.props.imdata, ['computers', idx, 'hasPcBeenCleaned'])
    const pcCleanedNotes = mori.getIn(this.props.imdata, ['computers', idx, 'pcCleanedNotes'])

    const numberOfWindowsUpdates = mori.getIn(this.props.imdata, ['computers', idx, 'numberOfWindowsUpdates'])

    return (
      <div>
        {PcCleaned(idx, hasPcBeenCleaned, pcCleanedNotes)}
        {CheckForUpdatess(idx, numberOfWindowsUpdates)}
      </div>
    )
  }
}

export default ComputerInputStep3
