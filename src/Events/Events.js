// let appState = window.appState
// import React from 'react'
function onChange (evt) {
  if (evt.target.name === 'companyName') {
    window.appState.companyName = evt.target.value
  }
  if (evt.target.name === 'numberOfComputes') {
    window.appState.numberOfComputers = evt.target.value
  }
}

function insertCompanyName () {
  window.appState.iscompanyNamed = true
}
function insertNumberofComputers () {
  window.appState.computersNumbered = true
}

export {
  onChange,
  insertCompanyName,
  insertNumberofComputers
}
