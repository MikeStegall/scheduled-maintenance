import React from 'react'
import createEmptyComputer from '../index.js'

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
  if (state.computerInputStep === 5) {
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
// Virus Check
// ---------------------------------------------------------

// Fully updated = 100, needs updates = 50, None found = 0

function fullUpdate (idx) {
  window.appState.computers[idx].checkForVirusUpdates = 100
}

function needsUpdates (idx) {
  window.appState.computers[idx].checkForVirusUpdates = 50
}

function noneFound (idx) {
  window.appState.computers[idx].checkForVirusUpdates = 0
}

function VirusSoftwareCheck (idx, computer) {
  let clickFullyUpdated = fullUpdate.bind(null, idx)
  let clickNeedsUpdates = needsUpdates.bind(null, idx)
  let clickNoneFound = noneFound.bind(null, idx)

  let isFullyUpdatedChecked = (computer[idx].checkForVirusUpdates === 100)
  let isNeedsUpdatedChecked = (computer[idx].checkForVirusUpdates === 50)
  let isNoneFoundChecked = (computer[idx].checkForVirusUpdates === 0)

  return (
    <div className='input-group virus-software check'>
      <h4 className='check-title'>Virus Sofware</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Fully Updated:
          <input className='radio-btn' type='radio' name='virusSoftwareCheck' onClick={clickFullyUpdated} checked={isFullyUpdatedChecked} />
        </li>
        <li className='table-view-cell'>
            Needs Updates:
          <input className='radio-btn' type='radio' name='virusSoftwareCheck' onClick={clickNeedsUpdates} checked={isNeedsUpdatedChecked} />
        </li>
        <li className='table-view-cell'>
            None Found:
              <input className='radio-btn' type='radio' name='virusSoftwareCheck' onClick={clickNoneFound} checked={isNoneFoundChecked} />
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Disk Space Check
// ---------------------------------------------------------

// Greater than 25% = 100, between 25% and 5% = 50, lower than 5% = 0

function greaterThan25 (idx, computer) {
  window.appState.computers[idx].freeDiskSpace = 100
}

function between25And5 (idx, computer) {
  window.appState.computers[idx].freeDiskSpace = 50
}

function lessThan5 (idx, computer) {
  window.appState.computers[idx].freeDiskSpace = 0
}

function DiskSpaceCheck (idx, computer) {
  let clickgreaterThan25 = greaterThan25.bind(null, idx, computer)
  let clickbetween25And5 = between25And5.bind(null, idx, computer)
  let clicklessThan5 = lessThan5.bind(null, idx, computer)

  let isgreaterThan25 = (computer[idx].freeDiskSpace === 100)
  let isbetween25And5 = (computer[idx].freeDiskSpace === 50)
  let islessThan5 = (computer[idx].freeDiskSpace === 0)

  return (
    <div className='disk-space check'>
      <h4 className='check-title'>Percentage of Free Disk Space</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Free space greater than 25%
          <input className='radio-btn' type='radio' name='diskSpaceCheck' onClick={clickgreaterThan25} checked={isgreaterThan25} />
        </li>
        <li className='table-view-cell'>
            between 25% and 5%
            <input className='radio-btn' type='radio' name='diskSpaceCheck' onClick={clickbetween25And5} checked={isbetween25And5} />
        </li>
        <li className='table-view-cell'>
            Less than 5%
            <input className='radio-btn' type='radio' name='diskSpaceCheck' onClick={clicklessThan5} checked={islessThan5} />
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Size of Temp File Check
// ---------------------------------------------------------

// Less than 1GB = 100 between 1gb and 3gb = 50 greater than 3gb = 0

function lessThan1GB (idx, computer) {
  window.appState.computers[idx].sizeOfTempFiles = 100
}

function between1GBAnd3GB (idx, computer) {
  window.appState.computers[idx].sizeOfTempFiles = 50
}

function greaterThan5GB (idx, computer) {
  window.appState.computers[idx].sizeOfTempFiles = 0
}

function TempFileCheck (idx, computer) {
  let clicklessThan1GB = lessThan1GB.bind(null, idx, computer)
  let clickbetween1GBAnd3GB = between1GBAnd3GB.bind(null, idx, computer)
  let clickgreaterThan5GB = greaterThan5GB.bind(null, idx, computer)

  let islessThan1GB = (computer[idx].sizeOfTempFiles === 100)
  let isbetween1GBAnd3GB = (computer[idx].sizeOfTempFiles === 50)
  let isgreaterThan5GB = (computer[idx].sizeOfTempFiles === 0)

  return (
    <div className='temp-files check'>
      <h4 className='check-title'>Check and clean up temp files:</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Less than 1Gb
          <input className='radio-btn' type='radio' name='TempFileCheck' onClick={clicklessThan1GB} checked={islessThan1GB} />
        </li>
        <li className='table-view-cell'>
            Needs Updates
            <input className='radio-btn' type='radio' name='TempFileCheck' onClick={clickbetween1GBAnd3GB} checked={isbetween1GBAnd3GB} />
        </li>
        <li className='table-view-cell'>
            None Found
            <input className='radio-btn' type='radio' name='TempFileCheck' onClick={clickgreaterThan5GB} checked={isgreaterThan5GB} />
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Disk fragmentation
// ---------------------------------------------------------

// less than 2% fragmented = 100 between 2% and 5% fragmented = 50 greater than 5% = 0

function lessThanTwoPercent (idx, computer) {
  window.appState.computers[idx].fragmentation = 100
}

function betweenTwoAndFivePercent (idx, computer) {
  window.appState.computers[idx].fragmentation = 50
}

function greaterThanFivePercent (idx, computer) {
  window.appState.computers[idx].fragmentation = 0
}

function DiskFragmentationCheck (idx, computer) {
  let clicklessThanTwoPercent = lessThanTwoPercent.bind(null, idx, computer)
  let clickbetweenTwoAndFivePercent = betweenTwoAndFivePercent.bind(null, idx, computer)
  let clickgreaterThanFivePercent = greaterThanFivePercent.bind(null, idx, computer)

  let islessThanTwoPercent = (computer[idx].fragmentation === 100)
  let isbetweenTwoAndFivePercent = (computer[idx].fragmentation === 50)
  let isgreaterThanFivePercent = (computer[idx].fragmentation === 0)

  return (
    <div className='defrag check'>
      <h4 className='check-title'>Defrag disk and check for fragmentation:</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            0% Fragmented
          <input className='radio-btn' type='radio' name='Fragmented' checked={islessThanTwoPercent} onClick={clicklessThanTwoPercent} />
        </li>
        <li className='table-view-cell'>
            Needs Updates
            <input className='radio-btn' type='radio' name='Fragmented' checked={isbetweenTwoAndFivePercent} onClick={clickbetweenTwoAndFivePercent} />
        </li>
        <li className='table-view-cell'>
            None Found
            <input className='radio-btn' type='radio' name='Fragmented' checked={isgreaterThanFivePercent} onClick={clickgreaterThanFivePercent} />
        </li>
      </ul>
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
  if (window.appState.computers[idx].clickedPcCleaned) {
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

// TODO Write a function to show text box if yes

function changeHardDriveHealthNotes (idx, evt) {
  const newName = evt.target.value
  window.appState.computers[idx].hardDriveHealthNotes = newName
}

function HardDriveHealthNotes (idx) {
  let onChangeHardDriveHealthNotes = changeHardDriveHealthNotes.bind(null, idx)
  if (window.appState.computers[idx].clickedHarddriveHealth) {
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

// TODO Write a function to show text box if yes

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
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// System File Check
// ---------------------------------------------------------

// TODO Write a function to show text box if yes

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
  if (window.appState.computers[idx].clickSystemFileCheck) {
    return (
      <div id='pcCleanToggle' className='toggle active' onClick={clickToggleSystemFilesChecks}>
        <div className='toggle-handle' />
      </div>
    )
  } else {
    return (
      <div id='pcCleanToggle' className='toggle' onClick={clickToggleSystemFilesChecks}>
        <div className='toggle-handle' />
      </div>
    )
  }
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
  if (!window.appState.computers[idx].isServer) {
    return (
      <div className='toggle' onClick={clickIsServer}>
        <div className='toggle-handle' />
      </div>
    )
  } else {
    return (
      <div className='toggle active' onClick={clickIsServer}>
        <div className='toggle-handle' />
      </div>
    )
  }
}
function isServerBackedUp (idx) {
  if (!window.appState.computers[idx].serverBackupsChecked) {
    window.appState.computers[idx].serverBackupsChecked = true
    window.appState.computers[idx].serverBackups = 0
  } else {
    window.appState.computers[idx].serverBackupsChecked = false
    window.appState.computers[idx].serverBackups = 100
  }
}

// serverBackupsChecked
function ToggleServerBackup (idx) {
  let clickIsServerBackedUp = isServerBackedUp.bind(null, idx)
  if (!window.appState.computers[idx].serverBackupsChecked) {
    return (
      <div className='toggle' onClick={clickIsServerBackedUp}>
        <div className='toggle-handle' />
      </div>
    )
  } else {
    return (
      <div className='toggle active' onClick={clickIsServerBackedUp}>
        <div className='toggle-handle' />
      </div>
    )
  }
}

function ShowIfServer (idx) {
  if (!window.appState.computers[idx].isServer) {
    return
  } else {
    return (
      <li className='table-view-cell'>
          Were Problems Found
        {ToggleServerBackup(idx)}
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
        {ShowIfServer(idx)}
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Submit Computer for score
// ---------------------------------------------------------

// TODO fix these functions

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

function Step1 (idx, computer) {
  return (
    <div>
      {VirusSoftwareCheck(idx, computer)}
      {DiskSpaceCheck(idx, computer)}
    </div>
  )
}

function Step2 (idx, computer) {
  return (
    <div>
      {TempFileCheck(idx, computer)}
      {DiskFragmentationCheck(idx, computer)}
    </div>
  )
}

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
      {CheckEventLogs(idx, computer)}
    </div>
  )
}

function Step5 (idx, state, computer) {
  return (
    <div>
      {CheckingSystemFiles(idx, computer)}
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
