import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'

// ---------------------------------------------------------
// Size of Temp File Check
// ---------------------------------------------------------

// Less than 1GB = 100 between 1gb and 3gb = 50 greater than 3gb = 0

function lessThan1GB (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'sizeOfTempFiles'], 100)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function between1GBAnd3GB (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'sizeOfTempFiles'], 50)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function greaterThan5GB (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'sizeOfTempFiles'], 0)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function TempFileCheck (idx, sizeOfTempFiles) {
  // binding functions to variables
  let clicklessThan1GB = lessThan1GB.bind(null, idx)
  let clickbetween1GBAnd3GB = between1GBAnd3GB.bind(null, idx)
  let clickgreaterThan5GB = greaterThan5GB.bind(null, idx)

  // if the following equals the number then it is true
  let islessThan1GB = (mori.equals(sizeOfTempFiles, 100))
  let isbetween1GBAnd3GB = (mori.equals(sizeOfTempFiles, 50))
  let isgreaterThan5GB = (mori.equals(sizeOfTempFiles, 0))

  return (
    <div className='temp-files check'>
      <h4 className='check-title'>Check and clean up temp files:</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Less than 1Gb
          <input className='radio-btn' type='radio' name='TempFileCheck' onClick={clicklessThan1GB} defaultChecked={islessThan1GB} />
        </li>
        <li className='table-view-cell'>
            Between 1Gb and 5GB
            <input className='radio-btn' type='radio' name='TempFileCheck' onClick={clickbetween1GBAnd3GB} defaultChecked={isbetween1GBAnd3GB} />
        </li>
        <li className='table-view-cell'>
            More than 5Gb
            <input className='radio-btn' type='radio' name='TempFileCheck' onClick={clickgreaterThan5GB} defaultChecked={isgreaterThan5GB} />
        </li>
      </ul>
    </div>
  )
}

// ---------------------------------------------------------
// Disk fragmentation
// ---------------------------------------------------------

// less than 2% fragmented = 100 between 2% and 5% fragmented = 50 greater than 5% = 0

function lessThanTwoPercent (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'fragmentation'], 100)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function betweenTwoAndFivePercent (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'fragmentation'], 50)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function greaterThanFivePercent (idx) {
  const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'fragmentation'], 0)
  const newState2 = mori.assoc(newState1, 'time', Date())
  window.NEXT_STATE = newState2
}

function DiskFragmentationCheck (idx, fragmentation) {
  // binding functions to variables
  let clicklessThanTwoPercent = lessThanTwoPercent.bind(null, idx)
  let clickbetweenTwoAndFivePercent = betweenTwoAndFivePercent.bind(null, idx)
  let clickgreaterThanFivePercent = greaterThanFivePercent.bind(null, idx)

  // if the following equals the number then it is true
  let islessThanTwoPercent = (mori.equals(fragmentation, 100))
  let isbetweenTwoAndFivePercent = (mori.equals(fragmentation, 50))
  let isgreaterThanFivePercent = (mori.equals(fragmentation, 0))

  return (
    <div className='defrag check'>
      <h4 className='check-title'>Defrag disk and check for fragmentation:</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            0% Fragmented
          <input className='radio-btn' type='radio' name='Fragmented' defaultChecked={islessThanTwoPercent} onClick={clicklessThanTwoPercent} />
        </li>
        <li className='table-view-cell'>
            between 1% and 5% Fragmented
            <input className='radio-btn' type='radio' name='Fragmented' defaultChecked={isbetweenTwoAndFivePercent} onClick={clickbetweenTwoAndFivePercent} />
        </li>
        <li className='table-view-cell'>
            Greater then 6% Fragmented
            <input className='radio-btn' type='radio' name='Fragmented' defaultChecked={isgreaterThanFivePercent} onClick={clickgreaterThanFivePercent} />
        </li>
      </ul>
    </div>
  )
}

class ComputerInputStep2 extends MoriComponent {
  render () {
    // assigning variables from mori
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')
    const sizeOfTempFiles = mori.getIn(this.props.imdata, ['computers', idx, 'sizeOfTempFiles'])
    const fragmentation = mori.getIn(this.props.imdata, ['computers', idx, 'fragmentation'])
    return (
      <div>
        {TempFileCheck(idx, sizeOfTempFiles)}
        {DiskFragmentationCheck(idx, fragmentation)}
      </div>
    )
  }
}

export default ComputerInputStep2
