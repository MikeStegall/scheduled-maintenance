import React from 'react'
import ReactDOM from 'react-dom'
import CompanyNameInputPage from './Layout/CompanyName'
import NumberOfComputersPage from './Layout/NumberOfComputers'
import ComputersInputPage from './Layout/ComputerInputForm'
import './ratchet-v2.0.2/css/ratchet.css'
import './index.css'

const showStateExplorer = document.location.search.indexOf('stateexplorer') !== -1

function StateExplorer (state) {
  const stateJSON = JSON.stringify(state, null, 2)

  return (
    <section id='explorerContainer'>
      <h1>State Explorer</h1>
      <textarea value={stateJSON} />
    </section>
  )
}

function createEmptyComputer () {
  return {
    computerName: '',
    checkForVirusUpdates: null,
    freeDiskSpace: null,
    sizeOfTempFiles: null,
    fragmentation: null,
    pcCleaned: null,
    pcCleanedNotes: '',
    clickedPcCleaned: false,
    numberOfWindowsUpdates: null,
    virusesFound: null,
    virusesFoundNotes: '',
    clickedVirusFound: false,
    hardDriveHealth: null,
    hardDriveHealthNotes: '',
    clickedHarddriveHealth: false,
    eventLogs: null,
    eventLogsNotes: '',
    clickedEventLogs: false,
    systemFileCheck: null,
    systemFileCheckNotes: '',
    clickSystemFileCheck: false,
    isServer: false,
    serverBackups: null,
    doesServerHaveABackUp: false,
    isServerBackupWorking: false,
    serverBackupNotes: '',
    serverBackupWorkingNotes: '',
    serverBackupsChecked: false,
    averageScore: null
  }
}

let initialState = {
  companyName: '',
  numberOfComputers: 0,
  computers: [createEmptyComputer()],
  activeComputerIdx: 0,
  computersInputPageIdx: 0,
  companyAverage: 0,
  step: 3,
  computerInputStep: 2
}
window.appState = initialState

function InformationSubmit (state) {
  if (state.step === 1) {
    return CompanyNameInputPage(state.companyName)
  } else if (state.step === 2) {
    return NumberOfComputersPage(state.numberOfComputers)
  } else if (state.step === 3) {
    return ComputersInputPage(state.activeComputerIdx, state, state.computers)
  }
}

function App (state) {
  let stateExplorerComponent = null
  if (showStateExplorer) stateExplorerComponent = StateExplorer(state)
  return (
    <div className='App'>
      <div id='appContainer'>
        {InformationSubmit(state)}
      </div>
      {stateExplorerComponent}
    </div>
  )
}
// ---------------------------------------------------------
// Render Loop
// ---------------------------------------------------------

const rootEl = document.getElementById('root')

function renderNow () {
  ReactDOM.render(App(window.appState), rootEl)
  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)

export default createEmptyComputer
