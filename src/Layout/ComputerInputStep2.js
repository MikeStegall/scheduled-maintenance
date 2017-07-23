import React from 'react'
import mori from 'mori'
// import {morilog} from '../util'
import MoriComponent from '../MoriComponent'

// ---------------------------------------------------------
// Size of Temp File Check
// ---------------------------------------------------------

// Less than 1GB = 100 between 1gb and 3gb = 50 greater than 3gb = 0

function lessThan1GB (idx) {
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'sizeOfTempFiles'], 100)
  // window.appState.computers[idx].sizeOfTempFiles = 100
}

function between1GBAnd3GB (idx) {
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'sizeOfTempFiles'], 50)
  // window.appState.computers[idx].sizeOfTempFiles = 50
}

function greaterThan5GB (idx) {
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'sizeOfTempFiles'], 0)
  // window.appState.computers[idx].sizeOfTempFiles = 0
}

function TempFileCheck (idx, sizeOfTempFiles) {
  let clicklessThan1GB = lessThan1GB.bind(null, idx)
  let clickbetween1GBAnd3GB = between1GBAnd3GB.bind(null, idx)
  let clickgreaterThan5GB = greaterThan5GB.bind(null, idx)

  let islessThan1GB = (mori.equals(sizeOfTempFiles, 100)) // not sure if this is the righ function for this.
  let isbetween1GBAnd3GB = (mori.equals(sizeOfTempFiles, 50)) // not sure if this is the righ function for this.
  let isgreaterThan5GB = (mori.equals(sizeOfTempFiles, 0)) // not sure if this is the righ function for this.

  // let islessThan1GB = (computer[idx].sizeOfTempFiles === 100)
  // let isbetween1GBAnd3GB = (computer[idx].sizeOfTempFiles === 50)
  // let isgreaterThan5GB = (computer[idx].sizeOfTempFiles === 0)

  return (
    <div className='temp-files check'>
      <h4 className='check-title'>Check and clean up temp files:</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            Less than 1Gb
          <input className='radio-btn' type='radio' name='TempFileCheck' onClick={clicklessThan1GB} checked={islessThan1GB} />
        </li>
        <li className='table-view-cell'>
            Needs Updates
            <input className='radio-btn' type='radio' name='TempFileCheck' onClick={clickbetween1GBAnd3GB} checked={isbetween1GBAnd3GB} />
        </li>
        <li className='table-view-cell'>
            None Found
            <input className='radio-btn' type='radio' name='TempFileCheck' onClick={clickgreaterThan5GB} checked={isgreaterThan5GB} />
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
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'fragmentation'], 100)
  // window.appState.computers[idx].fragmentation = 100
}

function betweenTwoAndFivePercent (idx) {
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'fragmentation'], 50)
  // window.appState.computers[idx].fragmentation = 50
}

function greaterThanFivePercent (idx) {
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'fragmentation'], 0)
  // window.appState.computers[idx].fragmentation = 0
}

function DiskFragmentationCheck (idx, fragmentation) {
  let clicklessThanTwoPercent = lessThanTwoPercent.bind(null, idx)
  let clickbetweenTwoAndFivePercent = betweenTwoAndFivePercent.bind(null, idx)
  let clickgreaterThanFivePercent = greaterThanFivePercent.bind(null, idx)

  let islessThanTwoPercent = (mori.equals(fragmentation, 100)) // not sure if this is the righ function for this.
  let isbetweenTwoAndFivePercent = (mori.equals(fragmentation, 50)) // not sure if this is the righ function for this.
  let isgreaterThanFivePercent = (mori.equals(fragmentation, 0)) // not sure if this is the righ function for this.

  // let islessThanTwoPercent = (computer[idx].fragmentation === 100)
  // let isbetweenTwoAndFivePercent = (computer[idx].fragmentation === 50)
  // let isgreaterThanFivePercent = (computer[idx].fragmentation === 0)

  return (
    <div className='defrag check'>
      <h4 className='check-title'>Defrag disk and check for fragmentation:</h4>
      <ul className='table-view'>
        <li className='table-view-cell'>
            0% Fragmented
          <input className='radio-btn' type='radio' name='Fragmented' checked={islessThanTwoPercent} onClick={clicklessThanTwoPercent} />
        </li>
        <li className='table-view-cell'>
            Needs Updates
            <input className='radio-btn' type='radio' name='Fragmented' checked={isbetweenTwoAndFivePercent} onClick={clickbetweenTwoAndFivePercent} />
        </li>
        <li className='table-view-cell'>
            None Found
            <input className='radio-btn' type='radio' name='Fragmented' checked={isgreaterThanFivePercent} onClick={clickgreaterThanFivePercent} />
        </li>
      </ul>
    </div>
  )
}

class ComputerInputStep2 extends MoriComponent {
  render () {
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

// function ComputerInputStep2 (idx, computer) {
//   return (
//     <div>
//       {TempFileCheck(idx, computer)}
//       {DiskFragmentationCheck(idx, computer)}
//     </div>
//   )
// }

export default ComputerInputStep2
