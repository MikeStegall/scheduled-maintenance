import React from 'react'
import ReactDOM from 'react-dom'
import mori from 'mori'

import App from './App'

import './ratchet-v2.0.2/css/ratchet.css'
import './index.css'

const initialState = {
  companyName: '',
  numComputers: '',
  computers: [],
  activeComputerIdx: 0,
  companyAverage: null,
  step: 1,
  isSwitchModalShowing: false,
  time: Date(),
  showPreviousJobs: false,
  showComputerNames: false,
  showPreviousJobComputerResults: false,
  companyNameArr: [],
  computerNameArr: [],
  incompleteJobArr: [],
  companyId: '',
  allComputersFinished: false,
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
    window.CURRENT_STATE = window.NEXT_STATE

    ReactDOM.render(<App imdata={window.CURRENT_STATE} />, rootEl)
    // renderCount++

    // console.log('Render #' + renderCount)
  }

  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)
