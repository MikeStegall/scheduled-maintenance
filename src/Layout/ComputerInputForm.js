import React from 'react'
import MoriComponent from '../MoriComponent'
import mori from 'mori'

import HeaderBar from './HeaderBar'
import ComputerNameInput from './ComputerNameInput'
import ComputerInputSteps from './ComputerInputSteps'
import SwitchComputers from './SwitchComputers'

// -----------------------------------------------------------------------------
// Computer Input Page
// -----------------------------------------------------------------------------

class ComputersInputPage extends MoriComponent {
  render () {
    const companyName = mori.get(this.props.imdata, 'companyName')
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')
    const computerInputStep = mori.getIn(this.props.imdata, ['computers', idx, 'computerInputStep'])
    const activeComputer = mori.getIn(this.props.imdata, ['computers', idx])
    const numComputers = mori.get(this.props.imdata, 'numComputers')

    return (
      <div className='computer-input'>
        {HeaderBar(companyName, computerInputStep)}
        {ComputerNameInput(idx, mori.get(activeComputer, 'computerName'))}
        <ComputerInputSteps imdata={this.props.imdata} />
        {SwitchComputers(numComputers)}
        <span className='badge step-count'>Page {computerInputStep}/6</span>
      </div>
    )
  }
}

export default ComputersInputPage
