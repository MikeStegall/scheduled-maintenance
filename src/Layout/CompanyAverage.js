import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'
import {morilog} from '../util'

function ShowCompanyAverage (idx, numComputers) {
  let companyAverageArr = mori.vector()
  for (idx = 0; idx < numComputers; idx++) {
    let computerAverage = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'averageScore'])
    companyAverageArr = mori.conj(companyAverageArr, computerAverage)
  }
  morilog(companyAverageArr)
  const companyAverageArrLenth = mori.count(companyAverageArr)
  const companyAverageArrSum = mori.reduce(mori.sum, 0, companyAverageArr)
  const companyAverage = companyAverageArrSum / companyAverageArrLenth
  const newState = mori.assoc(window.CURRENT_STATE, 'companyAverage', companyAverage)
  window.NEXT_STATE = newState
  const companyAverageJs = mori.toJs(companyAverage)
  return <div>{companyAverageJs}</div>
}

class CompanyAverage extends MoriComponent {
  render () {
    const numComputers = mori.get(this.props.imdata, 'numComputers')
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')

    return ShowCompanyAverage(idx, numComputers)
  }
}

export default CompanyAverage
