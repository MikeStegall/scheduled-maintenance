import React from 'react'
import ReactDOM from 'react-dom'
import CompanyNameInputPage from './Layout/CompanyName'
import NumberOfComputersPage from './Layout/NumberOfComputers'
import ComputersInputPage from './Layout/ComputerInputForm'
import './index.css'
import './ratchet-v2.0.2/css/ratchet.css'

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
    checkForVirusUpdates: '',
    freeDiskSpace: 0,
    sizeOfTempFiles: 0,
    fragmentation: 0,
    pcCleaned: '',
    numberOfWindowsUpdates: 0,
    virusesFound: '',
    hardDriveHealth: '',
    eventLogs: '',
    systemFileCheck: '',
    serverBackups: '',
    averageScore: 0
  }
}

let initialState = {
  companyName: 'Remedy Roofing',
  numberOfComputers: 0,
  computers: [createEmptyComputer(), createEmptyComputer()],
  computersInputPageIdx: 0,
  companyAverage: 0,
  step: 1,
  computerInputStep: 1
}

window.appState = initialState

function InformationSubmit (state) {
  if (state.step === 1) {
    return CompanyNameInputPage(state.companyName)
  } else if (state.step === 2) {
    return NumberOfComputersPage(state.numberOfComputers)
  } else if (state.step === 3) {
    return ComputersInputPage(state, state.computers)
  }
}

function App (state) {
  let stateExplorerComponent = null
  if (showStateExplorer) stateExplorerComponent = StateExplorer(state)
  return (
    <div className='App'>
      {InformationSubmit(state)}
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
