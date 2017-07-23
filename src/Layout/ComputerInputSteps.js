import ComputerInputStep1 from './ComputerInputStep1'
import ComputerInputStep2 from './ComputerInputStep2'
import ComputerInputStep3 from './ComputerInputStep3'
import ComputerInputStep4 from './ComputerInputStep4'
import ComputerInputStep5 from './ComputerInputStep5'
import ComputerInputStep6 from './ComputerInputStep6'

// -----------------------------------------------------------------------------
// Computer Input Change Page
// -----------------------------------------------------------------------------

function ComputerInputSteps (idx, computerInputStep, activeComputer) {
  if (computerInputStep === 1) {
    return ComputerInputStep1(idx, activeComputer)
  }
  if (computerInputStep === 2) {
    return ComputerInputStep2(idx, activeComputer)
  }
  if (computerInputStep === 3) {
    return ComputerInputStep3(idx, activeComputer)
  }
  if (computerInputStep === 4) {
    return ComputerInputStep4(idx, activeComputer)
  }
  if (computerInputStep === 5) {
    return ComputerInputStep5(idx, activeComputer)
  }
  if (computerInputStep === 6) {
    return ComputerInputStep6(idx, activeComputer)
  }
}

export default ComputerInputSteps
