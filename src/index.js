import React from 'react'
import ReactDOM from 'react-dom'
import mori from 'mori'
// import {morilog} from './util'

import App from './App'

import './ratchet-v2.0.2/css/ratchet.css'
import './index.css'

const initialState = {
  companyName: '',
  // TODO: remove this property, it should be a count of computers[]
  numComputers: '',
  computers: [],
  activeComputerIdx: 0,
  companyAverage: 0,
  step: 1,
  computerInputStep: 1,
  showStateExplorer: document.location.search.indexOf('stateexplorer') !== -1
}

// ----------------------------------------------------------------------------
// Render Loop
// ----------------------------------------------------------------------------

const rootEl = document.getElementById('root')

window.NEXT_STATE = mori.toClj(initialState)
window.CURRENT_STATE = null

// let renderCount = 0

function renderNow () {
  if (!mori.equals(window.CURRENT_STATE, window.NEXT_STATE)) {
    // TODO: you could check right here that window.NEXT_STATE is a valid state

    window.CURRENT_STATE = window.NEXT_STATE

    ReactDOM.render(<App imdata={window.CURRENT_STATE} />, rootEl)
    // renderCount++

    // console.log('Render #' + renderCount)
  }

  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)
