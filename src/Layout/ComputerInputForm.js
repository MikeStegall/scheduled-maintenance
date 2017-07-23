import React from 'react'
import MoriComponent from '../MoriComponent'
import mori from 'mori'
import {morilog} from '../util.js'

import HeaderBar from './HeaderBar'
import ComputerNameInput from './ComputerNameInput'
import ComputerInputSteps from './ComputerInputSteps'

// -----------------------------------------------------------------------------
// Computer Input Page
// -----------------------------------------------------------------------------

class ComputersInputPage extends MoriComponent {
  render () {
    const companyName = mori.get(this.props.imdata, 'companyName')
    const computerInputStep = mori.get(this.props.imdata, 'computerInputStep')
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')
    const activeComputer = mori.getIn(this.props.imdata, ['computers', idx])
    morilog(activeComputer)

    return (
      <div className='computer-input'>
        {HeaderBar(companyName, computerInputStep)}
        {ComputerNameInput(idx, mori.get(activeComputer, 'computerName'))}
        {ComputerInputSteps(idx, computerInputStep, activeComputer)}
        {/* <span className='badge step-count'>Page {state.computerInputStep}</span> */}
        <div className='bar bar-standard bar-footer-secondary'>
          <button className='btn btn-block'>Switch Computers</button>
        </div>
      </div>
    )
  }
}

export default ComputersInputPage
