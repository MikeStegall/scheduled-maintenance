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

// TODO write this to actually work

function changeComputerName (evt) {
  const newName = evt.target.value
  window.appState.computers.computerName = newName
}

function ComputerName (state) {
  return (
    <div className='input-group'>
      <input type='text' name='nameofcomputer' placeholder='Computer Name' className='input-row' onChange={changeComputerName} />
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

function VirusSoftwareCheck (idx) {
  let clickFullyUpdated = fullUpdate.bind(null, idx)
  let clickNeedsUpdates = needsUpdates.bind(null, idx)
  let clickNoneFound = noneFound.bind(null, idx)
  return (
    <div className='input-group virus-software check'>
      <h4 className='check-title'>Virus Sofware</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Fully Updated:
          <input className='radio-btn' type='radio' name='virusSoftwareCheck' onClick={clickFullyUpdated} value='VirusFullUpdate' />
        </li>
        <li className='table-view-cell'>
            Needs Updates:
          <input className='radio-btn' type='radio' name='virusSoftwareCheck' onClick={clickNeedsUpdates} value='VirusNeedsUpdate' />
        </li>
        <li className='table-view-cell'>
            None Found:
              <input className='radio-btn' type='radio' name='virusSoftwareCheck' onClick={clickNoneFound} value='NoneFound' />
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Disk Space Check
// ---------------------------------------------------------

// Greater than 25% = 100, between 25% and 5% = 50, lower than 5% = 0

function greaterThan25 (idx) {
  window.appState.computers[idx].freeDiskSpace = 100
}

function between25And5 (idx) {
  window.appState.computers[idx].freeDiskSpace = 50
}

function lessThan5 (idx) {
  window.appState.computers[idx].freeDiskSpace = 0
}

function DiskSpaceCheck (idx, computer) {
  let clickgreaterThan25 = greaterThan25.bind(null, idx)
  let clickbetween25And5 = between25And5.bind(null, idx)
  let clicklessThan5 = lessThan5.bind(null, idx)
  return (
    <div className='disk-space check'>
      <h4 className='check-title'>Percentage of Free Disk Space</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Free space greater than 25%
          <input className='radio-btn' type='radio' name='diskSpaceCheck' onClick={clickgreaterThan25} value='greaterThan25' />
        </li>
        <li className='table-view-cell'>
            between 25% and 5%
            <input className='radio-btn' type='radio' name='diskSpaceCheck' onClick={clickbetween25And5} value='between25And5' />
        </li>
        <li className='table-view-cell'>
            Less than 5%
            <input className='radio-btn' type='radio' name='diskSpaceCheck' onClick={clicklessThan5} value='lessThan5' />
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Size of Temp File Check
// ---------------------------------------------------------

// Less than 1GB = 100 between 1gb and 3gb = 50 greater than 3gb = 0

function lessThan1GB (idx) {
  window.appState.computers[idx].sizeOfTempFiles = 100
}

function between1GBAnd3GB (idx) {
  window.appState.computers[idx].sizeOfTempFiles = 50
}

function greaterThan5GB (idx) {
  window.appState.computers[idx].sizeOfTempFiles = 0
}

function TempFileCheck (idx, computer) {
  let clicklessThan1GB = lessThan1GB.bind(null, idx)
  let clickbetween1GBAnd3GB = between1GBAnd3GB.bind(null, idx)
  let clickgreaterThan5GB = greaterThan5GB.bind(null, idx)
  return (
    <div className='temp-files check'>
      <h4 className='check-title'>Check and clean up temp files:</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Less than 1Gb
          <input className='radio-btn' type='radio' name='TempFileCheck' onClick={clicklessThan1GB} value='lessThan1GB' />
        </li>
        <li className='table-view-cell'>
            Needs Updates
            <input className='radio-btn' type='radio' name='TempFileCheck' onClick={clickbetween1GBAnd3GB} value='between1GBAnd3GB' />
        </li>
        <li className='table-view-cell'>
            None Found
            <input className='radio-btn' type='radio' name='TempFileCheck' onClick={clickgreaterThan5GB} value='greaterThan5GB' />
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Disk fragmentation
// ---------------------------------------------------------

// less than 2% fragmented = 100 between 2% and 5% fragmented = 50 greater than 5% = 0

function lessThanTwoPercent (idx) {
  window.appState.computers[idx].fragmentation = 100
}

function betweenTwoAndFivePercent (idx) {
  window.appState.computers[idx].fragmentation = 50
}

function greaterThanFivePercent (idx) {
  window.appState.computers[idx].fragmentation = 0
}

function DiskFragmentationCheck (idx, computer) {
  let clicklessThanTwoPercent = lessThanTwoPercent.bind(null, idx)
  let clickbetweenTwoAndFivePercent = betweenTwoAndFivePercent.bind(null, idx)
  let clickgreaterThanFivePercent = greaterThanFivePercent.bind(null, idx)
  return (
    <div className='defrag check'>
      <h4 className='check-title'>Defrag disk and check for fragmentation:</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            0% Fragmented
          <input className='radio-btn' type='radio' name='Fragmented' value='lessThanTwoPercent' onClick={clicklessThanTwoPercent} />
        </li>
        <li className='table-view-cell'>
            Needs Updates
            <input className='radio-btn' type='radio' name='Fragmented' value='betweenTwoAndFivePercent' onClick={clickbetweenTwoAndFivePercent} />
        </li>
        <li className='table-view-cell'>
            None Found
            <input className='radio-btn' type='radio' name='Fragmented' value='greaterThanFivePercent' onClick={clickgreaterThanFivePercent} />
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Clean the PC
// ---------------------------------------------------------

function clickPcCleaned (idx) {
  if (window.appState.computers[idx].clickedPcCleaned) {
    window.appState.computers[idx].clickedPcCleaned = false
    window.appState.computers[idx].pcCleaned = 0
  } else {
    window.appState.computers[idx].clickedPcCleaned = true
    window.appState.computers[idx].pcCleaned = 100
  }
}

function TogglePcCleaned (idx) {
  let clickTogglePcCleaned = clickPcCleaned.bind(null, idx)
  if (window.appState.computers[idx].clickedPcCleaned) {
    return (
      <div id='pcCleanToggle' className='toggle active' onClick={clickTogglePcCleaned}>
        <div className='toggle-handle' />
      </div>
    )
  } else {
    return (
      <div id='pcCleanToggle' className='toggle' onClick={clickTogglePcCleaned}>
        <div className='toggle-handle' />
      </div>
    )
  }
}

function PcCleaned (idx, computer) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Inspect and clean inside of Pc</h4>
      {TogglePcCleaned(idx)}
    </div>
  )
}

// ---------------------------------------------------------
// Make sure windows is updated
// ---------------------------------------------------------

// 0 updates = 100, between 1 and 5 updates = 50, 5 or greater = 0

function needsZeroUpdates (idx) {
  window.appState.computers[idx].numberOfWindowsUpdates = 100
}

function needsBetweenOneAndFiveUpdates (idx) {
  window.appState.computers[idx].numberOfWindowsUpdates = 50
}

function needsMoreThanFive (idx) {
  window.appState.computers[idx].numberOfWindowsUpdates = 0
}

function CheckForUpdatess (idx, comptuer) {
  let clickNeedsZeroUpdates = needsZeroUpdates.bind(null, idx)
  let clickNeedsBetweenOneAndFiveUpdates = needsBetweenOneAndFiveUpdates.bind(null, idx)
  let clickNeedsMoreThanFive = needsMoreThanFive.bind(null, idx)
  return (
    <div className='updates check'>
      <h4 className='check-title'>Check and run updates for computer:</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Fully Updated
          <input className='radio-btn' type='radio' name='WindowsUpdates' value='needsZeroUpdates' onClick={clickNeedsZeroUpdates} />
        </li>
        <li className='table-view-cell'>
            Needs Updates
            <input className='radio-btn' type='radio' name='WindowsUpdates' value='needsBetweenOneAndFiveUpdates' onClick={clickNeedsBetweenOneAndFiveUpdates} />
        </li>
        <li className='table-view-cell'>
            None Found
            <input className='radio-btn' type='radio' name='WindowsUpdates' value='needsMoreThanFive' onClick={clickNeedsMoreThanFive} />
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Checking if Viruses were found
// ---------------------------------------------------------

function clickViruesFound (idx) {
  if (!window.appState.computers[idx].clickedVirusFound) {
    window.appState.computers[idx].clickedVirusFound = true
    window.appState.computers[idx].virusesFound = 0
  } else {
    window.appState.computers[idx].clickedVirusFound = false
    window.appState.computers[idx].virusesFound = 100
  }
}

function ToggleVirusesFound (idx) {
  let clickToggleViruesFound = clickViruesFound.bind(null, idx)
  if (window.appState.computers[idx].clickedVirusFound === false) {
    return (
      <div id='pcCleanToggle' className='toggle' onClick={clickToggleViruesFound}>
        <div className='toggle-handle' />
      </div>
    )
  } else {
    return (
      <div id='pcCleanToggle' className='toggle active' onClick={clickToggleViruesFound}>
        <div className='toggle-handle' />
      </div>
    )
  }
}

function VirusesFound (idx) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Malware/Viruses Found</h4>
      {ToggleVirusesFound(idx)}
    </div>
  )
}

// ---------------------------------------------------------
// Checking the Hard drive
// ---------------------------------------------------------

function clickHardDriveHealth (idx) {
  if (window.appState.computers[idx].clickedHarddriveHealth) {
    window.appState.computers[idx].clickedHarddriveHealth = false
    window.appState.computers[idx].hardDriveHealth = 0
  } else {
    window.appState.computers[idx].clickedHarddriveHealth = true
    window.appState.computers[idx].hardDriveHealth = 100
  }
}

function ToggleHardDriveHealth (idx) {
  let clickToggleHardDriveHealth = clickHardDriveHealth.bind(null, idx)
  if (window.appState.computers[idx].clickedHarddriveHealth) {
    return (
      <div id='pcCleanToggle' className='toggle active' onClick={clickToggleHardDriveHealth}>
        <div className='toggle-handle' />
      </div>
    )
  } else {
    return (
      <div id='pcCleanToggle' className='toggle' onClick={clickToggleHardDriveHealth}>
        <div className='toggle-handle' />
      </div>
    )
  }
}

function HardDriveCheck (idx) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Is Hard Drive Good?</h4>
      {ToggleHardDriveHealth(idx)}
    </div>
  )
}

// ---------------------------------------------------------
// Check Event Logs
// ---------------------------------------------------------

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
  if (window.appState.computers[idx].clickedEventLogs) {
    return (
      <div id='pcCleanToggle' className='toggle active' onClick={clickToggleEventLogs}>
        <div className='toggle-handle' />
      </div>
    )
  } else {
    return (
      <div id='pcCleanToggle' className='toggle' onClick={clickToggleEventLogs}>
        <div className='toggle-handle' />
      </div>
    )
  }
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
      {ComputerName(computer)}
      {ComputerInputSteps(idx, state, computer)}
      <span className='badge step-count'>Page {state.computerInputStep}</span>
    </div>
  )
}

export default ComputersInputPage
