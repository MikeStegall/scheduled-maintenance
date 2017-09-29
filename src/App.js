import React from 'react'
import MoriComponent from './MoriComponent'
import mori from 'mori'

import StateExplorer from './StateExplorer'
import CompanyNameInputPage from './Layout/CompanyName'
import NumberOfComputersPage from './Layout/NumberOfComputers'
import ComputersInputPage from './Layout/ComputerInputForm'
import CompanyAverage from './Layout/CompanyAverage'
import PreviousJobsPage from './Layout/ChoseCompany'
import CompanyResults from './Layout/CompanyComputerScores'

class App extends MoriComponent {
  render () {
    const currentState = this.props.imdata
    const showStateExplorer = mori.get(currentState, 'showStateExplorer')
    let stateExplorerComponent = null
    if (showStateExplorer) {
      stateExplorerComponent = <StateExplorer imdata={currentState} />
    }

    const currentStep = mori.get(currentState, 'step')
    const companyName = mori.get(currentState, 'companyName')
    const numComputers = mori.get(currentState, 'numComputers')
    const previousJobs = mori.get(currentState, 'showPreviousJobs')
    const showPreviousJobComputerResults = mori.get(currentState, 'showPreviousJobComputerResults')

    let pageComponent = null
    if (!previousJobs) {
      if (currentStep === 1) {
        pageComponent = CompanyNameInputPage(companyName)
      } else if (currentStep === 2) {
        pageComponent = NumberOfComputersPage(companyName, numComputers)
      } else if (currentStep === 3) {
        pageComponent = <ComputersInputPage imdata={currentState} />
      } else if (currentStep === 4) {
        pageComponent = <CompanyAverage imdata={currentState} />
      }
    } else if (previousJobs) {
      pageComponent = PreviousJobsPage()
      if (showPreviousJobComputerResults) {
        pageComponent = CompanyResults()
      }
    }

    return (
      <div className='App'>
        <div id='appContainer'>
          {pageComponent}
        </div>
        {stateExplorerComponent}
      </div>
    )
  }
}

export default App
