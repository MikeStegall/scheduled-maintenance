import React from 'react'
import createEmptyComputer from '../index.js'
import Step1 from './ComputerInputStep1'
import Step2 from './ComputerInputStep2'

// ---------------------------------------------------------
// Company Name
// ---------------------------------------------------------

function clickPageUp () {
  window.appState.computerInputStep += 1
}

function clickPageDown () {
  if (window.appState.computerInputStep === 1) {
    window.appState.computerInputStep = 1
  } else {
    window.appState.computerInputStep -= 1
  }
}

function LeftButton (state) {
  if (state.computerInputStep === 1) {
    return
  } else {
    return (
      <button className='btn btn-link btn-nav pull-left' onClick={clickPageDown}>
        <span className='icon icon-left-nav' />
        Left
      </button>
    )
  }
}

function RightButton (state) {
  if (state.computerInputStep === 6) {
    return
  } else {
    return (
      <button className='btn btn-link btn-nav pull-right' onClick={clickPageUp}>
        Right
        <span className='icon icon-right-nav' />
      </button>
    )
  }
}

function CompanyName (state) {
  return (
    <header className='bar bar-nav'>
      {LeftButton(state)}
      {RightButton(state)}
      <h1 className='title'>{state.companyName}</h1>
    </header>
  )
}

// ---------------------------------------------------------
// Change Commputer Name
// ---------------------------------------------------------

function changeComputerName (idx, evt) {
  const newName = evt.target.value
  window.appState.computers[idx].computerName = newName
}

function ComputerName (idx) {
  let onChangeComputerName = changeComputerName.bind(null, idx)
  return (
    <div className='input-group'>
      <input type='text' name='nameofcomputer' placeholder='Computer Name' className='input-row' onChange={onChangeComputerName} />
    </div>
  )
}

// ---------------------------------------------------------
// Clean the PC
// ---------------------------------------------------------

function changePcCleanNotes (idx, evt) {
  const newName = evt.target.value
  window.appState.computers[idx].pcCleanedNotes = newName
}

function clickPcCleanedFn (idx, computer) {
  if (window.appState.computers[idx].clickedPcCleaned) {
    window.appState.computers[idx].clickedPcCleaned = false
    window.appState.computers[idx].pcCleaned = 0
  } else {
    window.appState.computers[idx].clickedPcCleaned = true
    window.appState.computers[idx].pcCleaned = 100
  }
}

function PcCleanedNotes (idx) {
  let onChangePcCleanedNotes = changePcCleanNotes.bind(null, idx)
  if (!window.appState.computers[idx].clickedPcCleaned) {
    return (
      <textarea rows='4' onChange={onChangePcCleanedNotes} />
    )
  }
}

function TogglePcCleaned (idx, computer) {
  let clickTogglePcCleaned = clickPcCleanedFn.bind(null, idx, computer)
  let className = 'toggle'
  if (!window.appState.computers[idx].clickedPcCleaned) {
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

function PcCleaned (idx, computer) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Inspect and clean inside of Pc</h4>
      {TogglePcCleaned(idx, computer)}
      {PcCleanedNotes(idx)}
    </div>
  )
}

// ---------------------------------------------------------
// Make sure windows is updated
// ---------------------------------------------------------

// 0 updates = 100, between 1 and 5 updates = 50, 5 or greater = 0

function needsZeroUpdates (idx, computer) {
  window.appState.computers[idx].numberOfWindowsUpdates = 100
}

function needsBetweenOneAndFiveUpdates (idx, computer) {
  window.appState.computers[idx].numberOfWindowsUpdates = 50
}

function needsMoreThanFive (idx, computer) {
  window.appState.computers[idx].numberOfWindowsUpdates = 0
}

function CheckForUpdatess (idx, computer) {
  let clickNeedsZeroUpdates = needsZeroUpdates.bind(null, idx, computer)
  let clickNeedsBetweenOneAndFiveUpdates = needsBetweenOneAndFiveUpdates.bind(null, idx, computer)
  let clickNeedsMoreThanFive = needsMoreThanFive.bind(null, idx, computer)

  let isneedsZeroUpdates = (computer[idx].numberOfWindowsUpdates === 100)
  let isneedsBetweenOneAndFiveUpdates = (computer[idx].numberOfWindowsUpdates === 50)
  let isneedsMoreThanFive = (computer[idx].numberOfWindowsUpdates === 0)

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

// ---------------------------------------------------------
// Checking if Viruses were found
// ---------------------------------------------------------

function changeVirusesFoundNotes (idx, evt) {
  const newName = evt.target.value
  window.appState.computers[idx].virusesFoundNotes = newName
}

function VirusesFoundNotes (idx) {
  let onChangeVirusesFoundNotes = changeVirusesFoundNotes.bind(null, idx)
  if (window.appState.computers[idx].clickedVirusFound) {
    return (
      <textarea rows='4' onChange={onChangeVirusesFoundNotes} />
    )
  }
}

function clickViruesFound (idx, computer) {
  if (!window.appState.computers[idx].clickedVirusFound) {
    window.appState.computers[idx].clickedVirusFound = true
    window.appState.computers[idx].virusesFound = 0
  } else {
    window.appState.computers[idx].clickedVirusFound = false
    window.appState.computers[idx].virusesFound = 100
  }
}

function ToggleVirusesFound (idx, computer) {
  let clickToggleViruesFound = clickViruesFound.bind(null, idx, computer)
  let className = 'toggle'
  if (!window.appState.computers[idx].clickedVirusFound) {
    className = 'toggle'
  } else {
    className = 'toggle active'
  }
  return (
    <div id='pcCleanToggle' className={className} onClick={clickToggleViruesFound}>
      <div className='toggle-handle' />
    </div>
  )
}

function VirusesFound (idx, computer) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Malware/Viruses Found</h4>
      {ToggleVirusesFound(idx, computer)}
      {VirusesFoundNotes(idx)}
    </div>
  )
}

// ---------------------------------------------------------
// Checking the Hard drive
// ---------------------------------------------------------

function changeHardDriveHealthNotes (idx, evt) {
  const newName = evt.target.value
  window.appState.computers[idx].hardDriveHealthNotes = newName
}

function HardDriveHealthNotes (idx) {
  let onChangeHardDriveHealthNotes = changeHardDriveHealthNotes.bind(null, idx)
  if (!window.appState.computers[idx].clickedHarddriveHealth) {
    return (
      <textarea rows='4' onChange={onChangeHardDriveHealthNotes} />
    )
  }
}

function clickHardDriveHealth (idx, computer) {
  if (window.appState.computers[idx].clickedHarddriveHealth) {
    window.appState.computers[idx].clickedHarddriveHealth = false
    window.appState.computers[idx].hardDriveHealth = 0
  } else {
    window.appState.computers[idx].clickedHarddriveHealth = true
    window.appState.computers[idx].hardDriveHealth = 100
  }
}

function ToggleHardDriveHealth (idx, computer) {
  let clickToggleHardDriveHealth = clickHardDriveHealth.bind(null, idx, computer)
  let className = 'toggle'
  if (!window.appState.computers[idx].clickedHarddriveHealth) {
    className = 'toggle'
  } else {
    className = 'toggle active'
  }
  return (
    <div id='pcCleanToggle' className={className} onClick={clickToggleHardDriveHealth}>
      <div className='toggle-handle' />
    </div>
  )
}

function HardDriveCheck (idx, computer) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Is Hard Drive Good?</h4>
      {ToggleHardDriveHealth(idx, computer)}
      {HardDriveHealthNotes(idx)}
    </div>
  )
}

// ---------------------------------------------------------
// Check Event Logs
// ---------------------------------------------------------

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

// ---------------------------------------------------------
// System File Check
// ---------------------------------------------------------

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

// ---------------------------------------------------------
// Check on Server Backups
// ---------------------------------------------------------

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

// ---------------------------------------------------------
// Submit Computer for score
// ---------------------------------------------------------

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

// ---------------------------------------------------------
// Add another Comptuer
// ---------------------------------------------------------

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

// ---------------------------------------------------------
// Computer Input Change Page
// ---------------------------------------------------------

function Step3 (idx, computer) {
  return (
    <div>
      {PcCleaned(idx, computer)}
      {CheckForUpdatess(idx, computer)}
    </div>
  )
}

function Step4 (idx, computer) {
  return (
    <div>
      {VirusesFound(idx, computer)}
      {HardDriveCheck(idx, computer)}
    </div>
  )
}

function Step5 (idx, state, computer) {
  return (
    <div>
      {CheckEventLogs(idx, computer)}
      {CheckingSystemFiles(idx, computer)}
    </div>
  )
}

function Step6 (idx, state, computer) {
  return (
    <div>
      {CheckServerBackUps(idx, computer)}
      {SubmitComputerButton(idx, state)}
      {AddComputer(state)}
    </div>
  )
}

function ComputerInputSteps (idx, state, computer) {
  if (state.computerInputStep === 1) {
    return Step1(idx, computer)
  }
  if (state.computerInputStep === 2) {
    return Step2(idx, computer)
  }
  if (state.computerInputStep === 3) {
    return Step3(idx, computer)
  }
  if (state.computerInputStep === 4) {
    return Step4(idx, computer)
  }
  if (state.computerInputStep === 5) {
    return Step5(idx, state, computer)
  }
  if (state.computerInputStep === 6) {
    return Step6(idx, state, computer)
  }
}

// ---------------------------------------------------------
// Computer Input Page
// ---------------------------------------------------------
function ComputersInputPage (idx, state, computer) {
  return (
    <div className='computer-input'>
      {CompanyName(state)}
      {ComputerName(idx, computer)}
      {ComputerInputSteps(idx, state, computer)}
      <span className='badge step-count'>Page {state.computerInputStep}</span>
    </div>
  )
}

export default ComputersInputPage
