import React from 'react'
import mori from 'mori'

function clickPageUp () {
  const idx = mori.get(window.CURRENT_STATE, 'activeComputerIdx')
  const newState1 = mori.updateIn(window.CURRENT_STATE, ['computers', idx, 'computerInputStep'], mori.inc)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function clickPageDown () {
  const idx = mori.get(window.CURRENT_STATE, 'activeComputerIdx')
  const newState1 = mori.updateIn(window.CURRENT_STATE, ['computers', idx, 'computerInputStep'], mori.dec)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function LeftButton () {
  return (
    <button className='btn btn-link btn-nav pull-left' onClick={clickPageDown}>
      <span className='icon icon-left-nav' />
      Back
    </button>
  )
}

function RightButton () {
  return (
    <button className='btn btn-link btn-nav pull-right' onClick={clickPageUp}>
      Next
      <span className='icon icon-right-nav' />
    </button>
  )
}

function HeaderBar (companyName, computerInputStep) {
  const showLeftBtn = (computerInputStep !== 1)
  const showRightBtn = (computerInputStep !== 6)

  let leftBtnComponent = null
  if (showLeftBtn) leftBtnComponent = LeftButton()

  let rightBtnComponent = null
  if (showRightBtn) rightBtnComponent = RightButton()

  return (
    <header className='bar bar-nav'>
      {leftBtnComponent}
      <h1 className='title'>{companyName}</h1>
      {rightBtnComponent}
    </header>
  )
}

export default HeaderBar
