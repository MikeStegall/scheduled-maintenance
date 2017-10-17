import React from 'react'
import mori from 'mori'

function changeComputerNumber (idx) {
  let newState1 = mori.assoc(window.CURRENT_STATE, 'activeComputerIdx', idx)
  let newState2 = mori.assoc(newState1, 'showComputerNames', false)
  window.NEXT_STATE = newState2
}

function ComputerNames () {
  let computerNameVect = mori.get(window.CURRENT_STATE, 'computerNameArr')
  let computerNameVectJs = mori.toJs(computerNameVect)
  let pageComponent = ''
  let companyName = computerNameVectJs.map((name, idx) => {
    let computerInputStep = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'computerInputStep'])
    let isEverythingEntered = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'isEverythingEntered'])
    let computerInputStepJs = mori.toJs(computerInputStep)
    let clickchangeComputerNumber = changeComputerNumber.bind(null, idx)
    if (isEverythingEntered) {
      pageComponent = <li key={idx} className='table-view-cell' onClick={clickchangeComputerNumber}><span className='badge icon icon-check' />{name}</li>
    } else if (!isEverythingEntered) {
      pageComponent = <li key={idx} className='table-view-cell' onClick={clickchangeComputerNumber}><span className='badge'>{computerInputStepJs}/6</span>{name}</li>
    }
    return pageComponent
  })
  return (
    <div className='computer-name-modal'>
      <ul className='table-view'>{companyName}</ul>
    </div>
  )
}

export default ComputerNames
