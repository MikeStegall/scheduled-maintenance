import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'
import {pushFireBase} from '../util'

// -----------------------------------------------------------------------------
// Checking if Viruses were found
// -----------------------------------------------------------------------------

function changeVirusesFoundNotes (idx, evt) {
  const newName = evt.target.value
  const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'virusesFoundNotes'], newName)
  window.NEXT_STATE = newState
}

function VirusesFoundNotes (idx, hasVirusBeenFound, virusesFoundNotes) {
  let onChangeVirusesFoundNotes = changeVirusesFoundNotes.bind(null, idx)
  if (hasVirusBeenFound) {
    return (
      <textarea rows='4' onChange={onChangeVirusesFoundNotes} value={virusesFoundNotes} />
    )
  }
}

function clickViruesFound (idx, hasVirusBeenFound) {
  if (hasVirusBeenFound) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'hasVirusBeenFound'], false)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'virusesFound'], 100)
    window.NEXT_STATE = newState2
    pushFireBase()
  } else if (!hasVirusBeenFound) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'hasVirusBeenFound'], true)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'virusesFound'], 0)
    window.NEXT_STATE = newState2
    pushFireBase()
  }
}

function ToggleVirusesFound (idx, hasVirusBeenFound) {
  let clickToggleViruesFound = clickViruesFound.bind(null, idx, hasVirusBeenFound)
  let className = 'toggle'
  if (!hasVirusBeenFound) {
    className = 'toggle'
  } else if (hasVirusBeenFound) {
    className = 'toggle active'
  }
  return (
    <div id='pcCleanToggle' className={className} onClick={clickToggleViruesFound}>
      <div className='toggle-handle' />
    </div>
  )
}

function VirusesFound (idx, hasVirusBeenFound, virusesFoundNotes) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Malware/Viruses Found</h4>
      {ToggleVirusesFound(idx, hasVirusBeenFound)}
      {VirusesFoundNotes(idx, hasVirusBeenFound, virusesFoundNotes)}
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

function HardDriveHealthNotes (idx, isHardDriveGood, hardDriveHealthNotes) {
  let onChangeHardDriveHealthNotes = changeHardDriveHealthNotes.bind(null, idx)
  if (!isHardDriveGood) {
    return (
      <textarea rows='4' onChange={onChangeHardDriveHealthNotes} value={hardDriveHealthNotes} />
    )
  }
}

function clickHardDriveHealth (idx, isHardDriveGood) {
  if (isHardDriveGood) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isHardDriveGood'], false)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'hardDriveHealth'], 0)
    window.NEXT_STATE = newState2
    pushFireBase()
  } else if (!isHardDriveGood) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isHardDriveGood'], true)
    const newState2 = mori.assocIn(newState1, ['computers', idx, 'hardDriveHealth'], 100)
    window.NEXT_STATE = newState2
    pushFireBase()
  }
}

function ToggleHardDriveHealth (idx, isHardDriveGood) {
  let clickToggleHardDriveHealth = clickHardDriveHealth.bind(null, idx, isHardDriveGood)
  let className = 'toggle'
  if (!isHardDriveGood) {
    className = 'toggle'
  } else if (isHardDriveGood) {
    className = 'toggle active'
  }
  return (
    <div id='pcCleanToggle' className={className} onClick={clickToggleHardDriveHealth}>
      <div className='toggle-handle' />
    </div>
  )
}

function HardDriveCheck (idx, isHardDriveGood, hardDriveHealthNotes) {
  return (
    <div className='clean-pc check'>
      <h4 className='check-title'>Is Hard Drive Good?</h4>
      {ToggleHardDriveHealth(idx, isHardDriveGood)}
      {HardDriveHealthNotes(idx, isHardDriveGood, hardDriveHealthNotes)}
    </div>
  )
}
class ComputerInputStep4 extends MoriComponent {
  render () {
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')

    const hasVirusBeenFound = mori.getIn(this.props.imdata, ['computers', idx, 'hasVirusBeenFound'])
    const virusesFoundNotes = mori.getIn(this.props.imdata, ['computers', idx, 'virusesFoundNotes'])

    const isHardDriveGood = mori.getIn(this.props.imdata, ['computers', idx, 'isHardDriveGood'])
    const hardDriveHealthNotes = mori.getIn(this.props.imdata, ['computers', idx, 'hardDriveHealthNotes'])

    return (
      <div>
        {VirusesFound(idx, hasVirusBeenFound, virusesFoundNotes)}
        {HardDriveCheck(idx, isHardDriveGood, hardDriveHealthNotes)}
      </div>
    )
  }
}

export default ComputerInputStep4
