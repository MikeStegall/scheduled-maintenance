// let appState = window.appState
// import React from 'react'
function onChange (evt) {
  let computerData = window.appState.computerData[0]
  if (evt.target.name === 'companyName') window.appState.companyName = evt.target.value
  if (evt.target.name === 'numberOfComputes') window.appState.numberOfComputers = evt.target.value
  if (evt.target.name === 'nameofcomputer') computerData.computerName = evt.target.value
  if (evt.target.name === 'virus') window.appState.computerData[0].checkForVirusUpdates = evt.target.value
  if (evt.target.name === 'disk-space') window.appState.computerData[0].freeDiskSpace = evt.target.value
  if (evt.target.name === 'temp-files') window.appState.computerData[0].sizeOfTempFiles = evt.target.value
  if (evt.target.name === 'defrag') window.appState.computerData[0].fragmentation = evt.target.value
  if (evt.target.name === 'clean-pc') window.appState.computerData[0].pcCleaned = evt.target.value
  if (evt.target.name === 'updates') window.appState.computerData[0].numberOfWindowsUpdates = evt.target.value
  if (evt.target.name === 'malware') window.appState.computerData[0].virusesFound = evt.target.value
  if (evt.target.name === 'hard-drive') window.appState.computerData[0].hardDriveHealth = evt.target.value
  if (evt.target.name === 'event-logs') window.appState.computerData[0].eventLogs = evt.target.value
  if (evt.target.name === 'system-file') window.appState.computerData[0].systemFileCheck = evt.target.value
  if (evt.target.name === 'server-backups') window.appState.computerData[0].serverBackups = evt.target.value
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
