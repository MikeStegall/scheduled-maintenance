import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'

// -----------------------------------------------------------------------------
// Checking if Viruses were found
// -----------------------------------------------------------------------------

function changeVirusesFoundNotes (idx, evt) {
  const newName = evt.target.value
  const newState = mori.assoc(window.CURRENT_STATE, 'virusesFoundNotes', newName)
  window.NEXT_STATE = newState
}

function VirusesFoundNotes (idx, clickedVirusFound) {
  let onChangeVirusesFoundNotes = changeVirusesFoundNotes.bind(null, idx)
  if (mori.equals(clickedVirusFound, true)) {
    return (
      <textarea rows='4' onChange={onChangeVirusesFoundNotes} />
    )
  }
}

function clickViruesFound (idx, clickedVirusFound) {
  if (mori.equals(clickedVirusFound, false)) {
    const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'clickedVirusFound'], false,
                                                         ['computers', idx, 'virusesFound'], 0)
    window.NEXT_STATE = newState
  } else if (mori.euqals(clickedVirusFound, true)) {
    const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'clickedVirusFound'], true,
                                                         ['computers', idx, 'virusesFound'], 100)
    window.NEXT_STATE = newState
  }
}

function ToggleVirusesFound (idx, clickedVirusFound) {
  let clickToggleViruesFound = clickViruesFound.bind(null, idx, clickedVirusFound)
  let className = 'toggle'
  if (mori.equals(clickedVirusFound, false)) {
    className = 'toggle'
  } else if (mori.equals(clickedVirusFound, true)) {
    className = 'toggle active'
  }
  return (
    <div id='pcCleanToggle' className={className} onClick={clickToggleViruesFound}>
      <div className='toggle-handle' />
    </div>
  )
}

function VirusesFound (idx, clickedVirusFound) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Malware/Viruses Found</h4>
      {ToggleVirusesFound(idx, clickedVirusFound)}
      {VirusesFoundNotes(idx)}
    </div>
  )
}

// -----------------------------------------------------------------------------
// Checking the Hard drive
// -----------------------------------------------------------------------------

function changeHardDriveHealthNotes (idx, evt) {
  const newName = evt.target.value
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'hardDriveHealthNotes'], newName)
}

function HardDriveHealthNotes (idx, clickedHarddriveHealth) {
  let onChangeHardDriveHealthNotes = changeHardDriveHealthNotes.bind(null, idx)
  if (mori.equals(clickedHarddriveHealth, false)) {
    return (
      <textarea rows='4' onChange={onChangeHardDriveHealthNotes} />
    )
  }
}

function clickHardDriveHealth (idx, clickedHarddriveHealth) {
  if (mori.equals(clickedHarddriveHealth, true)) {
    const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'clickedHarddriveHealth'], false,
                                                           ['computers', idx, 'hardDriveHealth'], 0)
    window.NEXT_STATE = newState
  } else if (mori.equals(clickedHarddriveHealth, false)) {
    const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'clickedHarddriveHealth'], true,
                                                           ['computers', idx, 'hardDriveHealth'], 100)
    window.NEXT_STATE = newState
  }
}

function ToggleHardDriveHealth (idx, clickedHarddriveHealth) {
  let clickToggleHardDriveHealth = clickHardDriveHealth.bind(null, idx)
  let className = 'toggle'
  if (mori.equals(clickedHarddriveHealth, false)) {
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

function HardDriveCheck (idx, clickedHarddriveHealth) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Is Hard Drive Good?</h4>
      {ToggleHardDriveHealth(idx, clickedHarddriveHealth)}
      {HardDriveHealthNotes(idx, clickedHarddriveHealth)}
    </div>
  )
}
class ComputerInputStep4 extends MoriComponent {
  render () {
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')

    const clickedVirusFound = mori.getIn(this.props.imdata, ['computers', idx, 'clickedVirusFound'])

    const clickedHarddriveHealth = mori.getIn(this.props.imdata, ['computers', idx, 'clickedHarddriveHealth'])

    return (
      <div>
        {VirusesFound(idx, clickedVirusFound)}
        {HardDriveCheck(idx, clickedHarddriveHealth)}
      </div>
    )
  }
}

export default ComputerInputStep4
