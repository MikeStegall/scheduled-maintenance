import React from 'react'
import MoriComponent from '../MoriComponent'
import mori from 'mori'

import HeaderBar from './HeaderBar'
import ComputerNameInput from './ComputerNameInput'
import ComputerInputSteps from './ComputerInputSteps'
import SwitchComputersBtn from './SwitchComputersBtn'
import ComputerNames from './SwithComputersModal'

// -----------------------------------------------------------------------------
// Computer Input Page
// -----------------------------------------------------------------------------

class ComputersInputPage extends MoriComponent {
  render () {
    // assigning variables from mori
    const companyName = mori.get(this.props.imdata, 'companyName')
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')
    const computerInputStep = mori.getIn(this.props.imdata, ['computers', idx, 'computerInputStep'])
    const activeComputer = mori.getIn(this.props.imdata, ['computers', idx])
    const numComputers = mori.get(this.props.imdata, 'numComputers')
    const showModal = mori.get(this.props.imdata, 'showComputerNames')
    if (showModal) {
      return <ComputerNames imdata={this.props.imdata} /> // show the computer names to switch computers.
    } else if (!showModal) {
      return (
        <div className='computer-input'>
          {HeaderBar(companyName, computerInputStep)}
          {ComputerNameInput(idx, mori.get(activeComputer, 'computerName'))}
          <ComputerInputSteps imdata={this.props.imdata} />
          {SwitchComputersBtn(numComputers)}
          <span className='badge step-count'>Page {computerInputStep}/6</span>
        </div>
      )
    }
  }
}

export default ComputersInputPage
