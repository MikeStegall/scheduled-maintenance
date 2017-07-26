import React from 'react'
import {createEmptyComputer, morilog} from '../util'
import mori from 'mori'
import MoriComponent from '../MoriComponent'

// -----------------------------------------------------------------------------
// Check on Server Backups
// -----------------------------------------------------------------------------

function isServerFn (idx, isServer) {
  if (!isServer) {
    const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isServer'], true)
    window.NEXT_STATE = newState
  } else if (isServer) {
    const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isServer'], false)
    window.NEXT_STATE = newState
  }
}

function ServerBackups (idx, isServer) {
  let clickIsServer = isServerFn.bind(null, idx, isServer)
  let className = 'toggle'
  if (!isServer) {
    className = 'toggle'
  } else if (isServer) {
    className = 'toggle active'
  }
  return (
    <div className={className} onClick={clickIsServer}>
      <div className='toggle-handle' />
    </div>
  )
}

function isServerBackedUp (idx, isServer, doesServerHaveABackUp) {
  if (!doesServerHaveABackUp) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'doesServerHaveABackUp'], true)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'serverBackups'], 0)
    window.NEXT_STATE = newState2
  } else if (doesServerHaveABackUp) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'doesServerHaveABackUp'], false)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'serverBackups'], 100)
    window.NEXT_STATE = newState2
  }
}

function ToggleDoesServerHaveABackup (idx, isServer, doesServerHaveABackUp) {
  // console.log('doesServerHaveABackUp')
  // morilog(doesServerHaveABackUp)
  let clickIsServerBackedUp = isServerBackedUp.bind(null, idx, isServer, doesServerHaveABackUp)
  let className = 'toggle'
  if (!doesServerHaveABackUp) {
    className = 'toggle'
  } else if (doesServerHaveABackUp) {
    className = 'toggle active'
  }
  return (
    <div className={className} onClick={clickIsServerBackedUp}>
      <div className='toggle-handle' />
    </div>
  )
}

function DoesServeHaveBackup (idx, isServer, doesServerHaveABackUp) {
  if (isServer) {
    return (
      <li className='table-view-cell'>
          Does the server have a backup?
        {ToggleDoesServerHaveABackup(idx, isServer, doesServerHaveABackUp)}
      </li>
    )
  }
}

function isServerBackupWorkingFn (idx, isServerBackupWorking) {
  // morilog(isServerBackupWorking)
  if (isServerBackupWorking) {
    let newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isServerBackupWorking'], false)
    window.NEXT_STATE = newState
  } else if (!isServerBackupWorking) {
    let newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isServerBackupWorking'], true)
    window.NEXT_STATE = newState
  }
}

function ToggleIsBackupWorking (idx, isServer, doesServerHaveABackUp, isServerBackupWorking) {
  // morilog(isServerBackupWorking)
  let clickIsServerBackupWorking = isServerBackupWorkingFn.bind(null, idx, isServerBackupWorking)
  let className = 'toggle'
  if (!isServerBackupWorking) {
    className = 'toggle'
  } else if (isServerBackupWorking) {
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
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'serverBackupNotes'], newName)
}

function changeBackupWorkingNotes (idx, evt) {
  const newName = evt.target.value
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'serverBackupWorkingNotes'], newName)
}

function BackupWorkingNotes (idx, isServer, doesServerHaveABackUp, isServerBackupWorking) {
  let onChangeBackupWorkingNotes = changeBackupWorkingNotes.bind(null, idx)
  // console.log('isServerBackupWorking')
  // morilog(isServerBackupWorking)
  // console.log('isServer')
  // morilog(isServer)
  // console.log('doesServerHaveABackUp')
  // morilog(doesServerHaveABackUp)
  if (isServer && doesServerHaveABackUp && !isServerBackupWorking) {
    morilog(isServerBackupWorking)
    return (
      <li>
        <textarea rows='4' onChange={onChangeBackupWorkingNotes} placeholder='Notes for if the backups arent working' />
      </li>
    )
  }
}

function IsBackupWorking (idx, isServer, doesServerHaveABackUp, isServerBackupWorking) {
  // morilog(isServerBackupWorking)

  let onChangeDoesServerBackupNotes = changeDoesServerBackupNotes.bind(null, idx)
  if (!doesServerHaveABackUp && isServer) {
    return (
      <textarea rows='4' onChange={onChangeDoesServerBackupNotes} placeholder='Notes for if it doesnt have a server' />
    )
  } else if (mori.equals(doesServerHaveABackUp, true) && mori.equals(isServer, true)) {
    return (
      <li className='table-view-cell'>
          Is it working?
        {ToggleIsBackupWorking(idx, isServer, doesServerHaveABackUp, isServerBackupWorking)}
      </li>
    )
  }
}

function CheckServerBackUps (idx, isServer, doesServerHaveABackUp, isServerBackupWorking) {
  return (
    <div className='input-group'>
      <h4 className='check-title'>Check on Server Backups</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Is this a server?
          {ServerBackups(idx, isServer)}
        </li>
        {DoesServeHaveBackup(idx, isServer, doesServerHaveABackUp)}
        {IsBackupWorking(idx, isServer, doesServerHaveABackUp, isServerBackupWorking)}
        {BackupWorkingNotes(idx, isServer, doesServerHaveABackUp, isServerBackupWorking)}
      </ul>
    </div>
  )
}

// -----------------------------------------------------------------------------
// Submit Computer for score
// -----------------------------------------------------------------------------

function increaseComputerNumber () {
  let newState1 = mori.updateIn(window.CURRENT_STATE, ['activeComputerIdx'], mori.inc)
  let newState2 = mori.assoc(newState1, 'computerInputStep', 1)
  window.NEXT_STATE = newState2
}

function SubmitComputerButton (idx, numComputers) {
  if (idx < numComputers - 1) {
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
  let computers = mori.get(window.CURRENT_STATE, 'computers')
  let newComputer = mori.conj(computers, createEmptyComputer())
  let newState = mori.assoc(window.CURRENT_STATE, 'computers', newComputer)
  let newState2 = mori.updateIn(newState, ['numComputers'], mori.inc)
  let newState3 = mori.assoc(newState2, 'computerInputStep', 1)
  let newState4 = mori.updateIn(newState3, ['activeComputerIdx'], mori.inc)
  window.NEXT_STATE = newState4
}

function AddComputer () {
  return <button className='btn btn-block' onClick={addOneComputer}>Add another Computer</button>
}

class ComputerInputStep6 extends MoriComponent {
  render () {
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')

    const isServer = mori.getIn(this.props.imdata, ['computers', idx, 'isServer'])
    const doesServerHaveABackUp = mori.getIn(this.props.imdata, ['computers', idx, 'doesServerHaveABackUp'])
    const isServerBackupWorking = mori.getIn(this.props.imdata, ['computers', idx, 'isServerBackupWorking'])
    // morilog(isServerBackupWorking)
    const numComputers = mori.get(this.props.imdata, 'numComputers')

    return (
      <div>
        {CheckServerBackUps(idx, isServer, doesServerHaveABackUp, isServerBackupWorking)}
        {SubmitComputerButton(idx, numComputers)}
        {AddComputer(idx)}
      </div>
    )
  }
}

export default ComputerInputStep6
