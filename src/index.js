import React from 'react'
import ReactDOM from 'react-dom'
import CompanyName from './Layout/CompanyName'
import NumberOfComputers from './Layout/NumberOfComputers'
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

let initialState = {
  iscompanyNamed: false,
  companyName: '',
  numberOfComputers: 0,
  computersNumbered: false,
  nameofComputers: []
}

window.appState = initialState

function InformationSubmit () {
  if (window.appState.iscompanyNamed) {
    return (
      <div>
        {NumberOfComputers()}
      </div>
    )
  }
  return (
    <div className='App'>
      {CompanyName(window.appState)}
    </div>
  )
}

function App (state) {
  let stateExplorerComponent = null
  if (showStateExplorer) stateExplorerComponent = StateExplorer(state)
  return (
    <div className='App'>
      {InformationSubmit()}
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
