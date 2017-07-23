import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'

import ComputerInputStep1 from './ComputerInputStep1'
import ComputerInputStep2 from './ComputerInputStep2'
import ComputerInputStep3 from './ComputerInputStep3'
import ComputerInputStep4 from './ComputerInputStep4'
import ComputerInputStep5 from './ComputerInputStep5'
import ComputerInputStep6 from './ComputerInputStep6'

// -----------------------------------------------------------------------------
// Computer Input Change Page
// -----------------------------------------------------------------------------

class ComputerInputSteps extends MoriComponent {
  render () {
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')
    const computerInputStep = mori.get(this.props.imdata, 'computerInputStep')
    // const activeComputer = mori.getIn(this.props.imdata, ['computers', idx])
    if (computerInputStep === 1) {
      return <ComputerInputStep1 imdata={this.props.imdata} />
    }
    if (computerInputStep === 2) {
      return <ComputerInputStep2 imdata={this.props.imdata} />
    }
    if (computerInputStep === 3) {
      return ComputerInputStep3(idx)
    }
    if (computerInputStep === 4) {
      return ComputerInputStep4(idx)
    }
    if (computerInputStep === 5) {
      return ComputerInputStep5(idx)
    }
    if (computerInputStep === 6) {
      return ComputerInputStep6(idx)
    }
  }
}

// function ComputerInputSteps (idx, computerInputStep, activeComputer, virusUpdates) {
//   if (computerInputStep === 1) {
//     return ComputerInputStep1(idx, virusUpdates)
//   }
//   if (computerInputStep === 2) {
//     return ComputerInputStep2(idx)
//   }
//   if (computerInputStep === 3) {
//     return ComputerInputStep3(idx)
//   }
//   if (computerInputStep === 4) {
//     return ComputerInputStep4(idx)
//   }
//   if (computerInputStep === 5) {
//     return ComputerInputStep5(idx)
//   }
//   if (computerInputStep === 6) {
//     return ComputerInputStep6(idx)
//   }
// }

export default ComputerInputSteps
