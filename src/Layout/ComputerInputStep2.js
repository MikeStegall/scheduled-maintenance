import React from 'react'

// ---------------------------------------------------------
// Size of Temp File Check
// ---------------------------------------------------------

// Less than 1GB = 100 between 1gb and 3gb = 50 greater than 3gb = 0

function lessThan1GB (idx, computer) {
  window.appState.computers[idx].sizeOfTempFiles = 100
}

function between1GBAnd3GB (idx, computer) {
  window.appState.computers[idx].sizeOfTempFiles = 50
}

function greaterThan5GB (idx, computer) {
  window.appState.computers[idx].sizeOfTempFiles = 0
}

function TempFileCheck (idx, computer) {
  let clicklessThan1GB = lessThan1GB.bind(null, idx, computer)
  let clickbetween1GBAnd3GB = between1GBAnd3GB.bind(null, idx, computer)
  let clickgreaterThan5GB = greaterThan5GB.bind(null, idx, computer)

  let islessThan1GB = (computer[idx].sizeOfTempFiles === 100)
  let isbetween1GBAnd3GB = (computer[idx].sizeOfTempFiles === 50)
  let isgreaterThan5GB = (computer[idx].sizeOfTempFiles === 0)

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

function lessThanTwoPercent (idx, computer) {
  window.appState.computers[idx].fragmentation = 100
}

function betweenTwoAndFivePercent (idx, computer) {
  window.appState.computers[idx].fragmentation = 50
}

function greaterThanFivePercent (idx, computer) {
  window.appState.computers[idx].fragmentation = 0
}

function DiskFragmentationCheck (idx, computer) {
  let clicklessThanTwoPercent = lessThanTwoPercent.bind(null, idx, computer)
  let clickbetweenTwoAndFivePercent = betweenTwoAndFivePercent.bind(null, idx, computer)
  let clickgreaterThanFivePercent = greaterThanFivePercent.bind(null, idx, computer)

  let islessThanTwoPercent = (computer[idx].fragmentation === 100)
  let isbetweenTwoAndFivePercent = (computer[idx].fragmentation === 50)
  let isgreaterThanFivePercent = (computer[idx].fragmentation === 0)

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

function Step2 (idx, computer) {
  return (
    <div>
      {TempFileCheck(idx, computer)}
      {DiskFragmentationCheck(idx, computer)}
    </div>
  )
}

export default Step2
