import React from 'react'
import {createEmptyComputer} from '../util'


// -----------------------------------------------------------------------------
// Check on Server Backups
// -----------------------------------------------------------------------------

function isServer (idx) {
  if (!window.appState.computers[idx].isServer) {
    window.appState.computers[idx].isServer = true
  } else {
    window.appState.computers[idx].isServer = false
  }
}

function ServerBackups (idx) {
  let clickIsServer = isServer.bind(null, idx)
  let className = 'toggle'
  if (!window.appState.computers[idx].isServer) {
    className = 'toggle'
  } else {
    className = 'toggle active'
  }
  return (
    <div className={className} onClick={clickIsServer}>
      <div className='toggle-handle' />
    </div>
  )
}

function isServerBackedUp (idx) {
  if (!window.appState.computers[idx].doesServerHaveABackUp) {
    window.appState.computers[idx].doesServerHaveABackUp = true
    window.appState.computers[idx].serverBackups = 0
  } else {
    window.appState.computers[idx].doesServerHaveABackUp = false
    window.appState.computers[idx].serverBackups = 100
  }
}

// doesServerHaveABackUp
function ToggleDoesServerHaveABackup (idx) {
  let clickIsServerBackedUp = isServerBackedUp.bind(null, idx)
  let className = 'toggle'
  if (!window.appState.computers[idx].doesServerHaveABackUp) {
    className = 'toggle'
  } else {
    className = 'toggle active'
  }
  return (
    <div className={className} onClick={clickIsServerBackedUp}>
      <div className='toggle-handle' />
    </div>
  )
}

function DoesServeHaveBackup (idx) {
  if (window.appState.computers[idx].isServer) {
    return (
      <li className='table-view-cell'>
          Does the server have a backup?
        {ToggleDoesServerHaveABackup(idx)}
      </li>
    )
  }
}

function isServerBackupWorking (idx) {
  if (window.appState.computers[idx].isServerBackupWorking) {
    window.appState.computers[idx].isServerBackupWorking = false
  } else {
    window.appState.computers[idx].isServerBackupWorking = true
  }
}

function ToggleIsBackupWorking (idx) {
  let clickIsServerBackupWorking = isServerBackupWorking.bind(null, idx)
  let className = 'toggle'
  if (!window.appState.computers[idx].isServerBackupWorking) {
    className = 'toggle'
  } else {
    className = 'toggle active'
  }
  return (
    <div className={className} onClick={clickIsServerBackupWorking}>
      <div className='toggle-handle' />
    </div>
  )
}

function changeDoesServerBackupNotes (idx, evt) {
  const newName = evt.target.value
  window.appState.computers[idx].serverBackupNotes = newName
}

function changeBackupWorkingNotes (idx, evt) {
  const newName = evt.target.value
  window.appState.computers[idx].serverBackupWorkingNotes = newName
}

function BackupWorkingNotes (idx) {
  let onChangeBackupWorkingNotes = changeBackupWorkingNotes.bind(null, idx)
  if (!window.appState.computers[idx].isServerBackupWorking && window.appState.computers[idx].isServer && window.appState.computers[idx].doesServerHaveABackUp) {
    return (
      <li>
        <textarea rows='4' onChange={onChangeBackupWorkingNotes} placeholder='Notes for if the backups arent working' />
      </li>
    )
  }
}

function IsBackupWorking (idx) {
  let onChangeDoesServerBackupNotes = changeDoesServerBackupNotes.bind(null, idx)
  if (!window.appState.computers[idx].doesServerHaveABackUp && window.appState.computers[idx].isServer) {
    return (
      <textarea rows='4' onChange={onChangeDoesServerBackupNotes} placeholder='Notes for if it doesnt have a server' />
    )
  } else if (window.appState.computers[idx].doesServerHaveABackUp && window.appState.computers[idx].isServer) {
    return (
      <li className='table-view-cell'>
          Is it working?
        {ToggleIsBackupWorking(idx)}
      </li>
    )
  }
}

function CheckServerBackUps (idx) {
  return (
    <div className='input-group'>
      <h4 className='check-title'>Check on Server Backups</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Is this a server?
          {ServerBackups(idx)}
        </li>
        {DoesServeHaveBackup(idx)}
        {IsBackupWorking(idx)}
        {BackupWorkingNotes(idx)}
      </ul>
    </div>
  )
}

// -----------------------------------------------------------------------------
// Submit Computer for score
// -----------------------------------------------------------------------------

function increaseComputerNumber () {
  window.appState.activeComputerIdx += 1
}

function SubmitComputerButton (state) {
  if (state.activeComputerIdx < state.numberOfComputers) {
    return <button className='btn btn-primary btn-block' onClick={increaseComputerNumber}>Next Computer</button>
  } else {
    return <button className='btn btn-positive btn-block'>Submit for score</button>
  }
}

// -----------------------------------------------------------------------------
// Add another Comptuer
// -----------------------------------------------------------------------------

// TODO fix these functions

function addOneComputer () {
  window.appState.numberOfComputers += 1
  window.appState.computerInputStep = 1
  increaseComputerNumber()
  window.appState.computers.push(createEmptyComputer())
}

function AddComputer (state) {
  return <button className='btn btn-block' onClick={addOneComputer}>Add another Computer</button>
}

function ComputerInputStep6 (idx, state, computer) {
  return (
    <div>
      {CheckServerBackUps(idx, computer)}
      {SubmitComputerButton(idx, state)}
      {AddComputer(state)}
    </div>
  )
}

export default ComputerInputStep6
