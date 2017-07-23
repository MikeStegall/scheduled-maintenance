import React from 'react'

// -----------------------------------------------------------------------------
// Check Event Logs
// -----------------------------------------------------------------------------

function changeEventLogsNotes (idx, evt) {
  const newName = evt.target.value
  window.appState.computers[idx].eventLogsNotes = newName
}

function EventLogNotes (idx) {
  let onChangeEventLogsNotes = changeEventLogsNotes.bind(null, idx)
  if (window.appState.computers[idx].clickedEventLogs) {
    return (
      <textarea rows='4' onChange={onChangeEventLogsNotes} />
    )
  }
}

function clickEventLogs (idx) {
  if (window.appState.computers[idx].clickedEventLogs) {
    window.appState.computers[idx].clickedEventLogs = false
    window.appState.computers[idx].eventLogs = 0
  } else {
    window.appState.computers[idx].clickedEventLogs = true
    window.appState.computers[idx].eventLogs = 100
  }
}

function ToggleEventLogs (idx) {
  let clickToggleEventLogs = clickEventLogs.bind(null, idx)
  let className = 'toggle'
  if (window.appState.computers[idx].clickedEventLogs) {
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

function CheckEventLogs (idx) {
  return (
    <div className='input-group'>
      <h4 className='check-title'>Events Logs</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Were Problems Found
          {ToggleEventLogs(idx)}
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
  window.appState.computers[idx].systemFileCheckNotes = newName
}

function SystemFilesCheckNotes (idx) {
  let onChangeystemFilesCheckNotes = changeSystemFileCheckNotes.bind(null, idx)
  if (window.appState.computers[idx].clickSystemFileCheck) {
    return (
      <textarea rows='4' onChange={onChangeystemFilesCheckNotes} />
    )
  }
}

function clickSystemFilesChecks (idx) {
  if (window.appState.computers[idx].clickSystemFileCheck) {
    window.appState.computers[idx].clickSystemFileCheck = false
    window.appState.computers[idx].systemFileCheck = 0
  } else {
    window.appState.computers[idx].clickSystemFileCheck = true
    window.appState.computers[idx].systemFileCheck = 100
  }
}

function ToggleSystemFilesChecks (idx) {
  let clickToggleSystemFilesChecks = clickSystemFilesChecks.bind(null, idx)
  let className = 'toggle'
  if (!window.appState.computers[idx].clickSystemFileCheck) {
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

function CheckingSystemFiles (idx) {
  return (
    <div className='input-group'>
      <h4 className='check-title'>System File Check</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Were Problems Found
          {ToggleSystemFilesChecks(idx)}
        </li>
        {SystemFilesCheckNotes(idx)}
      </ul>
    </div>
  )
}

function ComputerInputStep5 (idx, computer) {
  return (
    <div>
      {CheckEventLogs(idx, computer)}
      {CheckingSystemFiles(idx, computer)}
    </div>
  )
}

export default ComputerInputStep5
