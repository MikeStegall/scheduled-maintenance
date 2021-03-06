import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'
import SubmitComputerButton from './SubmitComputerButton'
import ErrorMessages from './ErrorMessage'

// -----------------------------------------------------------------------------
// Check on Server Backups
// -----------------------------------------------------------------------------

function isServerFn (idx, isServer) {
  if (!isServer) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isServer'], true)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'isEverythingEntered'], false)
    const newState3 = mori.assoc(newState2, 'time', Date())
    window.NEXT_STATE = newState3
  } else if (isServer) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isServer'], false)
    const newState2 = mori.assoc(newState1, 'time', Date())
    window.NEXT_STATE = newState2
  }
}

function ServerBackups (idx, isServer) {
  let clickIsServer = isServerFn.bind(null, idx, isServer)
  let className = 'toggle'
  if (!isServer) {
    className = 'toggle' // To make the toggle say no
  } else if (isServer) {
    className = 'toggle active' // To make the toggle say yes
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
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'serverBackups'], 100)
    const newState3 = mori.assocIn(newState2, ['computers', idx, 'serverBackupsNotes'], 'No Problems Found')
    const newState4 = mori.assoc(newState3, 'time', Date())
    window.NEXT_STATE = newState4
  } else if (doesServerHaveABackUp) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'doesServerHaveABackUp'], false)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'serverBackups'], 0)
    const newState3 = mori.assocIn(newState2, ['computers', idx, 'serverBackupsNotes'], '')
    const newState4 = mori.assoc(newState3, 'time', Date())
    window.NEXT_STATE = newState4
  }
}

function ToggleDoesServerHaveABackup (idx, isServer, doesServerHaveABackUp) {
  let clickIsServerBackedUp = isServerBackedUp.bind(null, idx, isServer, doesServerHaveABackUp)
  let className = 'toggle'
  if (!doesServerHaveABackUp) {
    className = 'toggle' // To make the toggle say no
  } else if (doesServerHaveABackUp) {
    className = 'toggle active' // To make the toggle say yes
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
  if (isServerBackupWorking) {
    let newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isServerBackupWorking'], false)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'isServerBackupWorkingNotes'], '')
    const newState3 = mori.assoc(newState2, 'time', Date())
    window.NEXT_STATE = newState3
  } else if (!isServerBackupWorking) {
    let newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isServerBackupWorking'], true)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'isServerBackupWorkingNotes'], 'No Problems Found')
    const newState3 = mori.assoc(newState2, 'time', Date())
    window.NEXT_STATE = newState3
  }
}

function ToggleIsBackupWorking (idx, isServer, doesServerHaveABackUp, isServerBackupWorking) {
  let clickIsServerBackupWorking = isServerBackupWorkingFn.bind(null, idx, isServerBackupWorking)
  let className = 'toggle'
  if (!isServerBackupWorking) {
    className = 'toggle' // To make the toggle say no
  } else if (isServerBackupWorking) {
    className = 'toggle active' // To make the toggle say yes
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

function BackupWorkingNotes (idx, isServer, doesServerHaveABackUp, isServerBackupWorking, serverBackupWorkingNotes) {
  let onChangeBackupWorkingNotes = changeBackupWorkingNotes.bind(null, idx)
  if (isServer && doesServerHaveABackUp && !isServerBackupWorking) {
    return (
      <li>
        <textarea rows='4' onChange={onChangeBackupWorkingNotes} placeholder='Notes for if the backups arent working' value={serverBackupWorkingNotes} />
      </li>
    )
  }
}

function IsBackupWorking (idx, isServer, doesServerHaveABackUp, isServerBackupWorking, serverBackupNotes) {
  let onChangeDoesServerBackupNotes = changeDoesServerBackupNotes.bind(null, idx)
  if (!doesServerHaveABackUp && isServer) {
    return (
      <textarea rows='4' onChange={onChangeDoesServerBackupNotes} placeholder='Notes for if it doesnt have a server' value={serverBackupNotes} />
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

function CheckServerBackUps (idx, isServer, doesServerHaveABackUp, isServerBackupWorking, serverBackupNotes, serverBackupWorkingNotes) {
  return (
    <div className='input-group'>
      <h4 className='check-title'>Check on Server Backups</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Is this a server?
          {ServerBackups(idx, isServer)}
        </li>
        {DoesServeHaveBackup(idx, isServer, doesServerHaveABackUp)}
        {IsBackupWorking(idx, isServer, doesServerHaveABackUp, isServerBackupWorking, serverBackupNotes)}
        {BackupWorkingNotes(idx, isServer, doesServerHaveABackUp, isServerBackupWorking, serverBackupWorkingNotes)}
      </ul>
    </div>
  )
}

class ComputerInputStep6 extends MoriComponent {
  render () {
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')

    const isServer = mori.getIn(this.props.imdata, ['computers', idx, 'isServer'])

    const doesServerHaveABackUp = mori.getIn(this.props.imdata, ['computers', idx, 'doesServerHaveABackUp'])
    const serverBackupNotes = mori.getIn(this.props.imdata, ['computers', idx, 'serverBackupNotes'])

    const isServerBackupWorking = mori.getIn(this.props.imdata, ['computers', idx, 'isServerBackupWorking'])
    const serverBackupWorkingNotes = mori.getIn(this.props.imdata, ['computers', idx, 'serverBackupWorkingNotes'])

    return (
      <div>
        {CheckServerBackUps(idx, isServer, doesServerHaveABackUp, isServerBackupWorking, serverBackupNotes, serverBackupWorkingNotes)}
        <SubmitComputerButton imdata={this.props.imdata} />
        <ErrorMessages imdata={this.props.imdata} />
      </div>
    )
  }
}

export default ComputerInputStep6
