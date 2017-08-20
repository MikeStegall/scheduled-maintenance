import React from 'react'
import mori from 'mori'
import {pushFireBase} from '../util'

function clickPageUp () {
  window.NEXT_STATE = mori.updateIn(window.CURRENT_STATE, ['computerInputStep'], mori.inc)
  pushFireBase()
}

function clickPageDown () {
  window.NEXT_STATE = mori.updateIn(window.CURRENT_STATE, ['computerInputStep'], mori.dec)
  pushFireBase()
}

function LeftButton () {
  return (
    <button className='btn btn-link btn-nav pull-left' onClick={clickPageDown}>
      <span className='icon icon-left-nav' />
      Left
    </button>
  )
}

function RightButton () {
  return (
    <button className='btn btn-link btn-nav pull-right' onClick={clickPageUp}>
      Right
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
