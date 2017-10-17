import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'
import {pushFireBase} from '../util'

// import a button for starting a new job
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
  const companyAverageDecimal = companyAverage.toFixed(2) // displays the average to 2 decimal points
  const newState1 = mori.assoc(window.CURRENT_STATE, 'companyAverage', companyAverageDecimal)
  const newState2 = mori.assoc(newState1, 'allComputersFinished', true)
  window.NEXT_STATE = newState2
  const companyAverageJs = mori.toJs(companyAverageDecimal) // converts the average from closureScript to javaScript so it can be displayed to the page
  return <div>{companyAverageJs}</div>
}

class CompanyAverage extends MoriComponent {
  render () {
    const numComputers = mori.get(this.props.imdata, 'numComputers')
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')
    const companyName = mori.get(this.props.imdata, 'companyName')
    const companyNameJs = mori.toJs(companyName)
    const companyAverage = mori.get(window.CURRENT_STATE, 'companyAverage')
    const companyAverageJs = mori.toJs(companyAverage)
    if (companyAverageJs >= 0) {
      window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'allComputersFinished', true)
    }

    pushFireBase()

    if (companyAverageJs >= 75) {
      let className = 'company-average-score green'
      return (
        <div>
          <header className='bar bar-nav'>
            <h1 className='title'>{companyNameJs} Company Average</h1>
          </header>
          <div className={className}>
            {ShowCompanyAverage(idx, numComputers)}
          </div>
          {NewJobButton()}
        </div>
      )
    } else if (companyAverageJs >= 50) {
      let className = 'company-average-score yellow'
      return (
        <div>
          <header className='bar bar-nav'>
            <h1 className='title'>{companyNameJs} Company Average</h1>
          </header>
          <div className={className}>
            {ShowCompanyAverage(idx, numComputers)}
          </div>
          {NewJobButton()}
        </div>
      )
    } else if (companyAverageJs <= 25) {
      let className = 'company-average-score red'
      return (
        <div>
          <header className='bar bar-nav'>
            <h1 className='title'>{companyNameJs} Company Average</h1>
          </header>
          <div className={className}>
            {ShowCompanyAverage(idx, numComputers)}
          </div>
          {NewJobButton()}
        </div>
      )
    }
  }
}

export default CompanyAverage
