import React from 'react'

let computernumber = 0
// ---------------------------------------------------------
// Company Name
// ---------------------------------------------------------

function pageUp () {
  window.appState.computerInputStep += 1
}

function pageDown () {
  if (window.appState.computerInputStep === 1) {
    window.appState.computerInputStep = 1
  } else {
    window.appState.computerInputStep -= 1
  }
}

function LeftButton () {
  if (window.appState.computerInputStep === 1) {
    return
  } else {
    return (
      <button className='btn btn-link btn-nav pull-left' onClick={pageDown}>
        <span className='icon icon-left-nav' />
        Left
      </button>
    )
  }
}

function RightButton () {
  if (window.appState.computerInputStep === 5) {
    return
  } else {
    return (
      <button className='btn btn-link btn-nav pull-right' onClick={pageUp}>
        Right
        <span className='icon icon-right-nav' />
      </button>
    )
  }
}

function CompanyName (state) {
  return (
    <header className='bar bar-nav'>
      {LeftButton()}
      {RightButton()}
      <h1 className='title'>{state.companyName}</h1>
    </header>
  )
}

// ---------------------------------------------------------
// Change Commputer Name
// ---------------------------------------------------------

function changeComputerName (evt) {
  const newName = evt.target.value
  window.appState.numberOfComputers = newName
}

function ComputerName (state) {
  return (
    <div className='input-group'>
      {/* <label>Name of Computer</label> */}
      <input type='text' name='nameofcomputer' placeholder='Computer Name' className='input-row' onChange={changeComputerName} />
    </div>
  )
}

// ---------------------------------------------------------
// Virus Check
// ---------------------------------------------------------

function VirusSoftwareCheck (computer) {
  return (
    <div className='input-group'>
      <h4 className='check-title'>Virus Sofware</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Fully Updated
          <div className='toggle'>
            <div className='toggle-handle' />
          </div>
        </li>
        <li className='table-view-cell'>
            Needs Updates
            <div className='toggle active'>
              <div className='toggle-handle' />
            </div>
        </li>
        <li className='table-view-cell'>
            None Found
            <div className='toggle'>
              <div className='toggle-handle' />
            </div>
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Disk Space Check
// ---------------------------------------------------------

function DiskSpaceCheck (computer) {
  return (
    <div className='disk-space check'>
      <h4 className='check-title'>Percentage of Free Disk Space</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Free space greater than 5%
          <div className='toggle'>
            <div className='toggle-handle' />
          </div>
        </li>
        <li className='table-view-cell'>
            Needs Updates
            <div className='toggle active'>
              <div className='toggle-handle' />
            </div>
        </li>
        <li className='table-view-cell'>
            None Found
            <div className='toggle'>
              <div className='toggle-handle' />
            </div>
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Size of Temp File Check
// ---------------------------------------------------------

function TempFileCheck (computer) {
  return (
    <div className='temp-files check'>
      <h4 className='check-title'>Check and clean up temp files:</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Less than 1Gb
          <div className='toggle'>
            <div className='toggle-handle' />
          </div>
        </li>
        <li className='table-view-cell'>
            Needs Updates
            <div className='toggle active'>
              <div className='toggle-handle' />
            </div>
        </li>
        <li className='table-view-cell'>
            None Found
            <div className='toggle'>
              <div className='toggle-handle' />
            </div>
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Computer Input Change Page
// ---------------------------------------------------------

function DiskFragmentationCheck (computer) {
  return (
    <div className='defrag check'>
      <h4 className='check-title'>Defrag disk and check for fragmentation:</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            0% Fragmented
          <div className='toggle'>
            <div className='toggle-handle' />
          </div>
        </li>
        <li className='table-view-cell'>
            Needs Updates
            <div className='toggle active'>
              <div className='toggle-handle' />
            </div>
        </li>
        <li className='table-view-cell'>
            None Found
            <div className='toggle'>
              <div className='toggle-handle' />
            </div>
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Computer Input Change Page
// ---------------------------------------------------------

function PcCleaned (computer) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Inspect and clean inside of Pc</h4>
      <div id='pcCleanToggle' className='toggle'>
        <div className='toggle-handle' />
      </div>
    </div>
  )
}

// ---------------------------------------------------------
// Computer Input Change Page
// ---------------------------------------------------------

function CheckForUpdatess (comptuer) {
  return (
    <div className='updates check'>
      <h4 className='check-title'>Check and run updates for computer:</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Fully Updated
          <div className='toggle'>
            <div className='toggle-handle' />
          </div>
        </li>
        <li className='table-view-cell'>
            Needs Updates
            <div className='toggle active'>
              <div className='toggle-handle' />
            </div>
        </li>
        <li className='table-view-cell'>
            None Found
            <div className='toggle'>
              <div className='toggle-handle' />
            </div>
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Checking if Viruses were found
// ---------------------------------------------------------

function VirusesFound (computer) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Malware/Viruses Found</h4>
      <div id='pcCleanToggle' className='toggle'>
        <div className='toggle-handle' />
      </div>
    </div>
  )
}

// ---------------------------------------------------------
// Checking the Hard drive
// ---------------------------------------------------------

function HardDriveCheck (computer) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Is Hard Drive Good?</h4>
      <div id='pcCleanToggle' className='toggle'>
        <div className='toggle-handle' />
      </div>
    </div>
  )
}

// ---------------------------------------------------------
// Computer Input Change Page
// ---------------------------------------------------------

function CheckEventLogs (Computer) {
  return (
    <div className='input-group'>
      <h4 className='check-title'>Events Logs</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Were Problems Found
          <div className='toggle'>
            <div className='toggle-handle' />
          </div>
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// System File Check
// ---------------------------------------------------------

function CheckingSystemFiles (computer) {
  return (
    <div className='input-group'>
      <h4 className='check-title'>Events Logs</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Were Problems Found
          <div className='toggle'>
            <div className='toggle-handle' />
          </div>
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Computer Input Change Page
// ---------------------------------------------------------

function CheckServerBackUps (computer) {
  return (
    <div className='input-group'>
      <h4 className='check-title'>Check on Server Backups</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Do they have a server?
          <div className='toggle'>
            <div className='toggle-handle' />
          </div>
        </li>
        <li className='table-view-cell'>
            Were Problems Found
          <div className='toggle'>
            <div className='toggle-handle' />
          </div>
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Submit Computer for score
// ---------------------------------------------------------

function SubmitComputerButton (state) {
  // let computernumber = 0
  if (computernumber < state.numberOfComputes) {
    computernumber += 1
    return <button className='btn btn-primary btn-block'>Next Computer</button>
  } else {
    return <button className='btn btn-primary btn-block'>Submit for score</button>
  }
}

// ---------------------------------------------------------
// Computer Input Change Page
// ---------------------------------------------------------
function addOneComputer () {
  window.appState.numberOfComputes += 1
  window.appState.computerInputStep = 1
}

function AddComputer (state) {
  return <button className='btn btn-primary btn-block' onClick={addOneComputer}>Add another Computer</button>
}

// ---------------------------------------------------------
// Computer Input Change Page
// ---------------------------------------------------------

function Step1 (computer) {
  return (
    <div>
      {VirusSoftwareCheck(computer)}
      {DiskSpaceCheck(computer)}
    </div>
  )
}

function Step2 (computer) {
  return (
    <div>
      {TempFileCheck(computer)}
      {DiskFragmentationCheck(computer)}
    </div>
  )
}

function Step3 (computer) {
  return (
    <div>
      {PcCleaned(computer)}
      {CheckForUpdatess(computer)}
    </div>
  )
}

function Step4 (computer) {
  return (
    <div>
      {VirusesFound(computer)}
      {HardDriveCheck(computer)}
      {CheckEventLogs(computer)}
    </div>
  )
}

function Step5 (state, computer) {
  return (
    <div>
      {CheckingSystemFiles(computer)}
      {CheckServerBackUps(computer)}
      {SubmitComputerButton(state)}
      {AddComputer(state)}
    </div>
  )
}

function ComputerInputPage (state, computer) {
  if (state.computerInputStep === 1) {
    return Step1(computer)
  }
  if (state.computerInputStep === 2) {
    return Step2(computer)
  }
  if (state.computerInputStep === 3) {
    return Step3(computer)
  }
  if (state.computerInputStep === 4) {
    return Step4(computer)
  }
  if (state.computerInputStep === 5) {
    return Step5(state, computer)
  }
}

// ---------------------------------------------------------
// Computer Input Page
// ---------------------------------------------------------
function ComputersInputPage (state, computer) {
  return (
    <div className='computer-input'>
      {CompanyName(state)}
      {ComputerName(computer)}
      {ComputerInputPage(state, computer)}
    </div>
  )
    // <div className='computer-diagnostics'>
    //   <div className='system-file-check check'>
    //     <lable>Check System File Corruptions:</lable>
    //     <input className='system-file-input' type='text' name='system-file' onChange={onChange} placeholder='Enter NPF or NFT' />
    //   </div>
    //   <div className='server-backups check'>
    //     <lable>Check Server Backups:</lable>
    //     <input className='server-backups-input' type='text' name='server-backups' onChange={onChange} placeholder='Enter NPF, NFT or NA' />
    //   </div>
    // </div>
}

export default ComputersInputPage
