import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'
import {createEmptyComputer} from '../util'
import isEverythingEnteredFn from './EverythingEntered'

// -----------------------------------------------------------------------------
// Average of Comptuer
// -----------------------------------------------------------------------------

function increaseComputerNumber (idx, computerScore, serverScore, isServer) {
  const isEverythingEntered = mori.getIn(window.CURRENT_STATE, ['computer', idx, 'isEverythingEntered'])
  if (isServer && isEverythingEntered) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'averageScore'], serverScore)
    const newState2 = mori.updateIn(newState1, ['activeComputerIdx'], mori.inc)
    const newState3 = mori.assoc(newState2, 'computerInputStep', 1)
    const newState4 = mori.assoc(newState3, 'time', Date())
    window.NEXT_STATE = newState4
  } else if (!isServer && isEverythingEntered) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'averageScore'], computerScore)
    const newState2 = mori.updateIn(newState1, ['activeComputerIdx'], mori.inc)
    const newState3 = mori.assoc(newState2, 'computerInputStep', 1)
    const newState4 = mori.assoc(newState3, 'time', Date())
    window.NEXT_STATE = newState4
  } else if (!isEverythingEntered) {

  }
}

function getAverageScore (idx, computerScore, serverScore, isServer) {
  const isEverythingEntered = mori.getIn(window.CURRENT_STATE, ['computer', idx, 'isEverythingEntered'])
  if (isServer && isEverythingEntered) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'averageScore'], serverScore)
    const newState2 = mori.assoc(newState1, 'step', 4)
    const newState3 = mori.assoc(newState2, 'time', Date())
    window.NEXT_STATE = newState3
  } else if (!isServer && isEverythingEntered) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'averageScore'], computerScore)
    const newState2 = mori.assoc(newState1, 'step', 4)
    const newState3 = mori.assoc(newState2, 'time', Date())
    window.NEXT_STATE = newState3
  } else if (!isEverythingEntered) {

  }
}

function SubmitButton (idx, computerScore, serverScore, isServer, numComputers) {
  let clickIncreaseComputerNumber = increaseComputerNumber.bind(null, idx, computerScore, serverScore, isServer)
  let clickGetAverageScore = getAverageScore.bind(null, idx, computerScore, serverScore, isServer)
  if (idx < numComputers - 1) {
    return <button className='btn btn-primary btn-block' onClick={clickIncreaseComputerNumber}>Next Computer</button>
  } else {
    return <button className='btn btn-positive btn-block' onClick={clickGetAverageScore}>Submit for score</button>
  }
}

// -----------------------------------------------------------------------------
// Add another Comptuer
// -----------------------------------------------------------------------------

function addOneComputer (idx, computerScore, serverScore, isServer) {
  const computers = mori.get(window.CURRENT_STATE, 'computers')
  const numComputers = mori.count(computers)
  const newComputerName = 'Computer ' + (numComputers + 1)
  const isEverythingEntered = mori.getIn(window.CURRENT_STATE, ['computer', idx, 'isEverythingEntered'])
  if (isServer && isEverythingEntered) {
    const newComputers = mori.conj(computers, createEmptyComputer(newComputerName))
    const newState = mori.assoc(window.CURRENT_STATE, 'computers', newComputers)
    const newState2 = mori.updateIn(newState, ['numComputers'], mori.inc)
    const newState3 = mori.assoc(newState2, 'computerInputStep', 1)
    const newState4 = mori.updateIn(newState3, ['activeComputerIdx'], mori.inc)
    const newState5 = mori.assocIn(newState4, ['computers', idx, 'averageScore'], serverScore)
    const newState6 = mori.assoc(newState5, 'time', Date())
    window.NEXT_STATE = newState6
  } else if (!isServer && isEverythingEntered) {
    const newComputers = mori.conj(computers, createEmptyComputer(newComputerName))
    const newState = mori.assoc(window.CURRENT_STATE, 'computers', newComputers)
    const newState2 = mori.updateIn(newState, ['numComputers'], mori.inc)
    const newState3 = mori.assoc(newState2, 'computerInputStep', 1)
    const newState4 = mori.updateIn(newState3, ['activeComputerIdx'], mori.inc)
    const newState5 = mori.assocIn(newState4, ['computers', idx, 'averageScore'], computerScore)
    const newState6 = mori.assoc(newState5, 'time', Date())
    window.NEXT_STATE = newState6
  } else if (!isEverythingEntered) {

  }
}

function AddComputer (idx, computerScore, serverScore, isServer, numComputers) {
  let clickAddOneComputer = addOneComputer.bind(null, idx, computerScore, serverScore, isServer)
  if (idx === numComputers - 1) {
    return <button className='btn btn-block' onClick={clickAddOneComputer}>Add another Computer</button>
  }
}

class SubmitComputerButton extends MoriComponent {
  render () {
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')
    const numComputers = mori.get(this.props.imdata, 'numComputers')

    // computers scores
    const checkForVirusUpdates = mori.getIn(this.props.imdata, ['computers', idx, 'checkForVirusUpdates'])
    const freeDiskSpace = mori.getIn(this.props.imdata, ['computers', idx, 'freeDiskSpace'])
    const sizeOfTempFiles = mori.getIn(this.props.imdata, ['computers', idx, 'sizeOfTempFiles'])
    const fragmentation = mori.getIn(this.props.imdata, ['computers', idx, 'fragmentation'])
    const pcCleaned = mori.getIn(this.props.imdata, ['computers', idx, 'pcCleaned'])
    const numberOfWindowsUpdates = mori.getIn(this.props.imdata, ['computers', idx, 'numberOfWindowsUpdates'])
    const virusesFound = mori.getIn(this.props.imdata, ['computers', idx, 'virusesFound'])
    const hardDriveHealth = mori.getIn(this.props.imdata, ['computers', idx, 'hardDriveHealth'])
    const eventLogs = mori.getIn(this.props.imdata, ['computers', idx, 'eventLogs'])
    const systemFileCheck = mori.getIn(this.props.imdata, ['computers', idx, 'systemFileCheck'])
    const serverBackups = mori.getIn(this.props.imdata, ['computers', idx, 'serverBackups'])
    // Is the comptuer a server
    const isServer = mori.getIn(this.props.imdata, ['computers', idx, 'isServer'])

    const computerScoreArr = mori.vector(checkForVirusUpdates,
                                          freeDiskSpace,
                                          sizeOfTempFiles,
                                          fragmentation,
                                          pcCleaned,
                                          numberOfWindowsUpdates,
                                          virusesFound,
                                          hardDriveHealth,
                                          eventLogs,
                                          systemFileCheck)

    const serverScoreArr = mori.conj(computerScoreArr, serverBackups)

    const computerScoreArrLength = mori.count(computerScoreArr)
    const serverScoreArrLenth = mori.count(serverScoreArr)
    const computerScoreArrSum = mori.reduce(mori.sum, 0, computerScoreArr)
    const serverScoreArrSum = mori.reduce(mori.sum, 0, serverScoreArr)
    const computerScore = computerScoreArrSum / computerScoreArrLength
    const serverScore = serverScoreArrSum / serverScoreArrLenth

    isEverythingEnteredFn()

    return (
      <div>
        {SubmitButton(idx, computerScore, serverScore, isServer, numComputers)}
        {AddComputer(idx, computerScore, serverScore, isServer, numComputers)}
      </div>
    )
  }
}

export default SubmitComputerButton
