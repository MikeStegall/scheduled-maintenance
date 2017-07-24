import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'

// -----------------------------------------------------------------------------
// Check Event Logs
// -----------------------------------------------------------------------------

function changeEventLogsNotes (idx, evt) {
  const newName = evt.target.value
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'eventLogsNotes'], newName)
}

function EventLogNotes (idx, clickedEventLogs) {
  let onChangeEventLogsNotes = changeEventLogsNotes.bind(null, idx)
  if (mori.equals(clickedEventLogs, false)) {
    return (
      <textarea rows='4' onChange={onChangeEventLogsNotes} />
    )
  }
}

function clickEventLogs (idx, clickedEventLogs) {
  if (mori.equals(clickedEventLogs, false)) {
    const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'clickedEventLogs'], true,
                                                        ['computers', idx, 'eventLogs'], 100)
    window.NEXT_STATE = newState
  } else if (mori.equals(clickedEventLogs, true)) {
    const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'clickedEventLogs'], false,
                                                        ['computers', idx, 'eventLogs'], 0)
    window.NEXT_STATE = newState
  }
}

function ToggleEventLogs (idx, clickedEventLogs) {
  let clickToggleEventLogs = clickEventLogs.bind(null, idx)
  let className = 'toggle'
  if (mori.equals(clickedEventLogs, true)) {
    className = 'toggle active'
  } else {
    className = 'toggle'
  }
  return (
    <div id='pcCleanToggle' className={className} onClick={clickToggleEventLogs}>
      <div className='toggle-handle' />
    </div>
  )
}

function CheckEventLogs (idx, clickedEventLogs) {
  return (
    <div className='input-group'>
      <h4 className='check-title'>Events Logs</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Were Problems Found
          {ToggleEventLogs(idx, clickedEventLogs)}
        </li>
        {EventLogNotes(idx)}
      </ul>
    </div>
  )
}

// -----------------------------------------------------------------------------
// System File Check
// -----------------------------------------------------------------------------

function changeSystemFileCheckNotes (idx, evt) {
  const newName = evt.target.value
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'systemFileCheckNotes'], newName)
}

function SystemFilesCheckNotes (idx, clickSystemFileCheck) {
  let onChangeystemFilesCheckNotes = changeSystemFileCheckNotes.bind(null, idx)
  if (mori.equals(clickSystemFileCheck, false)) {
    return (
      <textarea rows='4' onChange={onChangeystemFilesCheckNotes} />
    )
  }
}

function clickSystemFilesChecks (idx, clickSystemFileCheck) {
  if (mori.equals(clickSystemFileCheck, true)) {
    const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'clickSystemFileCheck'], false,
                                                           ['computers', idx, 'systemFileCheck'], 0)
    window.NEXT_STATE = newState
  } else if (mori.equals(clickSystemFileCheck, false)) {
    const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'clickSystemFileCheck'], true,
                                                           ['computers', idx, 'systemFileCheck'], 100)
    window.NEXT_STATE = newState
  }
}

function ToggleSystemFilesChecks (idx, clickSystemFileCheck) {
  let clickToggleSystemFilesChecks = clickSystemFilesChecks.bind(null, idx)
  let className = 'toggle'
  if (mori.equals(clickSystemFileCheck, false)) {
    className = 'toggle'
  } else {
    className = 'toggle active'
  }
  return (
    <div id='pcCleanToggle' className={className} onClick={clickToggleSystemFilesChecks}>
      <div className='toggle-handle' />
    </div>
  )
}

function CheckingSystemFiles (idx, clickSystemFileCheck) {
  return (
    <div className='input-group'>
      <h4 className='check-title'>System File Check</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Were Problems Found
          {ToggleSystemFilesChecks(idx, clickSystemFileCheck)}
        </li>
        {SystemFilesCheckNotes(idx)}
      </ul>
    </div>
  )
}
class ComputerInputStep5 extends MoriComponent {
  render () {
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')

    const clickedEventLogs = mori.getIn(this.props.imdata, ['computers', idx, 'clickedEventLogs'])

    const clickSystemFileCheck = mori.getIn(this.props.imdata, ['comptuers', idx, 'clickSystemFileCheck'])

    return (
      <div>
        {CheckEventLogs(idx, clickedEventLogs)}
        {CheckingSystemFiles(idx, clickSystemFileCheck)}
      </div>
    )
  }
}

export default ComputerInputStep5
