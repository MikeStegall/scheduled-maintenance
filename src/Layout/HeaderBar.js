import React from 'react'
import MoriComponent from '../MoriComponent'
import mori from 'mori'

function clickPageUp () {
  window.NEXT_STATE = mori.updateIn(window.CURRENT_STATE, ['computerInputStep'], mori.inc)
}

function clickPageDown () {
  window.NEXT_STATE = mori.updateIn(window.CURRENT_STATE, ['computerInputStep'], mori.dec)
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

class HeaderBar extends MoriComponent {
  render () {
    const companyName = mori.get(this.props.imdata, 'companyName')
    const computerInputStep = mori.get(this.props.imdata, 'computerInputStep')

    const showLeftBtn = (computerInputStep !== 1)
    const showRightBtn = (computerInputStep !== 6)

    let leftBtnComponent = null
    if (showLeftBtn) leftBtnComponent = LeftButton()

    let rightBtnComponent = null
    if (showRightBtn) rightBtnComponent = RightButton()

    return (
      <header className='bar bar-nav'>
        {leftBtnComponent}
        {rightBtnComponent}
        <h1 className='title'>{companyName}</h1>
      </header>
    )
  }
}

export default HeaderBar
