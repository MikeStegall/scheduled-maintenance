import React from 'react'
import mori from 'mori'

// -----------------------------------------------------------------------------
// Checking if Viruses were found
// -----------------------------------------------------------------------------

function changeVirusesFoundNotes (idx, evt) {
  const newName = evt.target.value
  const newState = mori.assoc(window.CURRENT_STATE, 'virusesFoundNotes', newName)
  window.NEXT_STATE = newState
  // window.appState.computers[idx].virusesFoundNotes = newName
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

// -----------------------------------------------------------------------------
// Checking the Hard drive
// -----------------------------------------------------------------------------

function changeHardDriveHealthNotes (idx, evt) {
  const newName = evt.target.value
  window.appState.computers[idx].hardDriveHealthNotes = newName
}

function HardDriveHealthNotes (idx) {
  let onChangeHardDriveHealthNotes = changeHardDriveHealthNotes.bind(null, idx)
  if (!window.appState.computers[idx].clickedHarddriveHealth) {
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

function ComputerInputStep4 (idx, computer) {
  return (
    <div>
      {VirusesFound(idx, computer)}
      {HardDriveCheck(idx, computer)}
    </div>
  )
}

export default ComputerInputStep4
