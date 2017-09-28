import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'

function forPage1 (idx) {
  const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'computerInputStep'], 1)
  window.NEXT_STATE = newState
}
function forPage2 (idx) {
  const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'computerInputStep'], 2)
  window.NEXT_STATE = newState
}
function forPage3 (idx) {
  const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'computerInputStep'], 3)
  window.NEXT_STATE = newState
}
function forPage4 (idx) {
  const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'computerInputStep'], 4)
  window.NEXT_STATE = newState
}
function forPage5 (idx) {
  const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'computerInputStep'], 5)
  window.NEXT_STATE = newState
}

function ComputerName (idx) {
  const computerName = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'computerName'])
  if (computerName === ('Computer ' + (idx + 1))) {
    return <div>Enter Valid Computer Name</div>
  }
}

function NullVirusUpdates (idx) {
  let clickForPage1 = forPage1.bind(null, idx)
  const checkForVirusUpdates = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'checkForVirusUpdates'])
  if (checkForVirusUpdates === null) {
    return <div onClick={clickForPage1}>Click here and check the Virus Software Updates</div>
  }
}

function NullFreeDiskSpace (idx) {
  let clickForPage1 = forPage1.bind(null, idx)
  const freeDiskSpace = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'freeDiskSpace'])
  if (freeDiskSpace === null) {
    return <div onClick={clickForPage1}>Click here and check Free Disk Space</div>
  }
}

function NullFileSize (idx) {
  let clickForPage2 = forPage2.bind(null, idx)
  const sizeOfTempFiles = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'sizeOfTempFiles'])
  if (sizeOfTempFiles === null) {
    return <div onClick={clickForPage2}>Click here and check size of temp files.</div>
  }
}

function NullFragmentation (idx) {
  let clickForPage2 = forPage2.bind(null, idx)
  const fragmentation = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'fragmentation'])
  if (fragmentation === null) {
    return <div onClick={clickForPage2}>Click here and check Fragmentations</div>
  }
}

function PcCleanedNotes (idx) {
  let clickForPage3 = forPage3.bind(null, idx)
  const hasPcBeenCleaned = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hasPcBeenCleaned'])
  const pcCleanedNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'pcCleanedNotes'])
  if (!hasPcBeenCleaned) {
    if (pcCleanedNotes === '') {
      return <div onClick={clickForPage3}>Click here and enter notes on PClean</div>
    }
  }
}

function NullWindowsUpdates (idx) {
  let clickForPage3 = forPage3.bind(null, idx)
  const numberOfWindowsUpdates = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'numberOfWindowsUpdates'])
  if (numberOfWindowsUpdates === null) {
    return <div onClick={clickForPage3}>Click here and check number of Windows Updates</div>
  }
}

function VirusesFoundNotes (idx) {
  let clickForPage4 = forPage4.bind(null, idx)
  const hasVirusBeenFound = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hasVirusBeenFound'])
  const virusesFoundNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'virusesFoundNotes'])
  if (hasVirusBeenFound) {
    if (virusesFoundNotes === '') {
      return <div onClick={clickForPage4}>Click here and enter notes about Virus Found</div>
    }
  }
}

function HardDriveHealthNotes (idx) {
  let clickForPage4 = forPage4.bind(null, idx)
  const isHardDriveGood = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'isHardDriveGood'])
  const hardDriveHealthNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hardDriveHealthNotes'])
  if (!isHardDriveGood) {
    if (hardDriveHealthNotes === '') {
      return <div onClick={clickForPage4}>Click here and enter hard drives health notes</div>
    }
  }
}

function EventLogsNotes (idx) {
  let clickForPage5 = forPage5.bind(null, idx)
  const hasCritcalEventLogs = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hasCritcalEventLogs'])
  const eventLogsNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'eventLogsNotes'])
  if (hasCritcalEventLogs) {
    if (eventLogsNotes === '') {
      return <div onClick={clickForPage5}>Click here and enter Notes about Event Logs</div>
    }
  }
}

function SystemFileCheckNotes (idx) {
  let clickForPage5 = forPage5.bind(null, idx)
  const hasCurroptedSystemFiles = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hasCurroptedSystemFiles'])
  const systemFileCheckNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'systemFileCheckNotes'])
  if (hasCurroptedSystemFiles) {
    if (systemFileCheckNotes === '') {
      return <div onClick={clickForPage5}>Click here and enter Notes about Curropted files</div>
    }
  }
}

function ServerBackupNotes (idx) {
  const isServer = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'isServer']) // initially false
  const doesServerHaveABackUp = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'doesServerHaveABackUp']) // initially false
  const isServerBackupWorking = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'isServerBackupWorking']) // initially false
  const serverBackupNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'serverBackupNotes'])
  const serverBackupWorkingNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'serverBackupWorkingNotes'])
  if (isServer) {
    if (!doesServerHaveABackUp) {
      if (serverBackupNotes === '') {
        return <div>Enter why the server doesnt have backups.</div>
      }
    } else if (doesServerHaveABackUp) {
      if (!isServerBackupWorking) {
        if (serverBackupWorkingNotes === '') {
          return <div>Enter why the server backups arent working.</div>
        }
      }
    }
  }
}
class ErrorMessages extends MoriComponent {
  render () {
    const idx = mori.get(this.props.imdata, 'activeComputerIdx')

    return (
      <div className='error-message'>
        {ComputerName(idx)}
        {NullVirusUpdates(idx)}
        {NullFreeDiskSpace(idx)}
        {NullFileSize(idx)}
        {NullFragmentation(idx)}
        {PcCleanedNotes(idx)}
        {NullWindowsUpdates(idx)}
        {VirusesFoundNotes(idx)}
        {HardDriveHealthNotes(idx)}
        {EventLogsNotes(idx)}
        {SystemFileCheckNotes(idx)}
        {ServerBackupNotes(idx)}
      </div>
    )
  }
}
export default ErrorMessages
