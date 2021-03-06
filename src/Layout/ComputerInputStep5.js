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

function EventLogNotes (idx, hasCritcalEventLogs, eventLogsNotes) {
  let onChangeEventLogsNotes = changeEventLogsNotes.bind(null, idx)
  if (hasCritcalEventLogs) { // Shows a text box to enter notes
    return (
      <textarea rows='4' onChange={onChangeEventLogsNotes} value={eventLogsNotes} />
    )
  }
}

function clickEventLogs (idx, hasCritcalEventLogs) {
  if (!hasCritcalEventLogs) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'hasCritcalEventLogs'], true)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'eventLogs'], 0)
    const newState3 = mori.assocIn(newState2, ['computers', idx, 'eventLogsNotes'], '')
    const newState4 = mori.assoc(newState3, 'time', Date())
    window.NEXT_STATE = newState4
  } else if (hasCritcalEventLogs) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'hasCritcalEventLogs'], false)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'eventLogs'], 100)
    const newState3 = mori.assocIn(newState2, ['computers', idx, 'eventLogsNotes'], 'No Problems Found')
    const newState4 = mori.assoc(newState3, 'time', Date())
    window.NEXT_STATE = newState4
  }
}

function ToggleEventLogs (idx, hasCritcalEventLogs) {
  let clickToggleEventLogs = clickEventLogs.bind(null, idx, hasCritcalEventLogs)
  let className = 'toggle'
  if (mori.equals(hasCritcalEventLogs, true)) {
    className = 'toggle active' // To make the toggle say yes
  } else {
    className = 'toggle' // To make the toggle say no
  }
  return (
    <div id='pcCleanToggle' className={className} onClick={clickToggleEventLogs}>
      <div className='toggle-handle' />
    </div>
  )
}

function CheckEventLogs (idx, hasCritcalEventLogs, eventLogsNotes) {
  return (
    <div className='input-group'>
      <h4 className='check-title'>Events Logs</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Were Problems Found
          {ToggleEventLogs(idx, hasCritcalEventLogs)}
        </li>
        {EventLogNotes(idx, hasCritcalEventLogs, eventLogsNotes)}
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

function SystemFilesCheckNotes (idx, hasCurroptedSystemFiles, systemFileCheckNotes) {
  let onChangeystemFilesCheckNotes = changeSystemFileCheckNotes.bind(null, idx)
  if (hasCurroptedSystemFiles) { // Shows a text box to enter notes
    return (
      <textarea rows='4' onChange={onChangeystemFilesCheckNotes} value={systemFileCheckNotes} />
    )
  }
}

function clickSystemFilesChecks (idx, hasCurroptedSystemFiles) {
  if (hasCurroptedSystemFiles) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'hasCurroptedSystemFiles'], false)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'systemFileCheck'], 100)
    const newState3 = mori.assocIn(newState2, ['computers', idx, 'systemFileCheckNotes'], 'No Problems Found')
    const newState4 = mori.assoc(newState3, 'time', Date())
    window.NEXT_STATE = newState4
  } else if (!hasCurroptedSystemFiles) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'hasCurroptedSystemFiles'], true)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'systemFileCheck'], 0)
    const newState3 = mori.assocIn(newState2, ['computers', idx, 'systemFileCheckNotes'], '')
    const newState4 = mori.assoc(newState3, 'time', Date())
    window.NEXT_STATE = newState4
  }
}

function ToggleSystemFilesChecks (idx, hasCurroptedSystemFiles) {
  let clickToggleSystemFilesChecks = clickSystemFilesChecks.bind(null, idx, hasCurroptedSystemFiles)
  let className = 'toggle'
  if (!hasCurroptedSystemFiles) {
    className = 'toggle' // To make the toggle say no
  } else if (hasCurroptedSystemFiles) {
    className = 'toggle active' // To make the toggle say yes
  }
  return (
    <div id='pcCleanToggle' className={className} onClick={clickToggleSystemFilesChecks}>
      <div className='toggle-handle' />
    </div>
  )
}

function CheckingSystemFiles (idx, hasCurroptedSystemFiles, systemFileCheckNotes) {
  return (
    <div className='input-group'>
      <h4 className='check-title'>System File Check</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Were Problems Found
          {ToggleSystemFilesChecks(idx, hasCurroptedSystemFiles)}
        </li>
        {SystemFilesCheckNotes(idx, hasCurroptedSystemFiles, systemFileCheckNotes)}
      </ul>
    </div>
  )
}
class ComputerInputStep5 extends MoriComponent {
  render () {
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')

    const hasCritcalEventLogs = mori.getIn(this.props.imdata, ['computers', idx, 'hasCritcalEventLogs'])
    const eventLogsNotes = mori.getIn(this.props.imdata, ['computers', idx, 'eventLogsNotes'])

    const hasCurroptedSystemFiles = mori.getIn(this.props.imdata, ['computers', idx, 'hasCurroptedSystemFiles'])
    const systemFileCheckNotes = mori.getIn(this.props.imdata, ['computers', idx, 'systemFileCheckNotes'])

    return (
      <div>
        {CheckEventLogs(idx, hasCritcalEventLogs, eventLogsNotes)}
        {CheckingSystemFiles(idx, hasCurroptedSystemFiles, systemFileCheckNotes)}
      </div>
    )
  }
}

export default ComputerInputStep5
