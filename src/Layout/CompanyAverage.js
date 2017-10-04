import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'
import {pushFireBase} from '../util'

import NewJobButton from './NewJobButton'

function ShowCompanyAverage (idx, numComputers) {
  let companyAverageArr = mori.vector()
  for (idx = 0; idx < numComputers; idx++) {
    let computerAverage = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'averageScore'])
    companyAverageArr = mori.conj(companyAverageArr, computerAverage)
  }
  const companyAverageArrLenth = mori.count(companyAverageArr)
  const companyAverageArrSum = mori.reduce(mori.sum, 0, companyAverageArr)
  const companyAverage = companyAverageArrSum / companyAverageArrLenth
  const companyAverageDecimal = companyAverage.toFixed(2)
  if (companyAverageDecimal !== null) {
    window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'allComputersFinished', true)
  }
  const newState = mori.assoc(window.CURRENT_STATE, 'companyAverage', companyAverageDecimal)
  window.NEXT_STATE = newState
  const companyAverageJs = mori.toJs(companyAverageDecimal)
  if (companyAverageDecimal !== 0) {
    window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'allComputersFinished', true)
  }
  return <div>{companyAverageJs}</div>
}

class CompanyAverage extends MoriComponent {
  render () {
    const numComputers = mori.get(this.props.imdata, 'numComputers')
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')
    const companyName = mori.get(this.props.imdata, 'companyName')
    const companyNameJs = mori.toJs(companyName)

    pushFireBase()

    return (
      <div>
        <header className='bar bar-nav'>
          <h1 className='title'>{companyNameJs} Company Average</h1>
        </header>
        <div className='company-average-score'>
          {ShowCompanyAverage(idx, numComputers)}
        </div>
        {NewJobButton()}
      </div>
    )
  }
}

export default CompanyAverage
