import React from 'react'
import mori from 'mori'
import MoriComponent from '../MoriComponent'

function ComputerName (idx) {
  const computerName = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'computerName'])
  if (computerName === ('Computer ' + (idx + 1))) {
    return <div>Enter Valid Computer Name</div>
  }
}

function NullVirusUpdates (idx) {
  const checkForVirusUpdates = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'checkForVirusUpdates'])
  if (checkForVirusUpdates === null) {
    return <div>Go Back to page one and check if the Virus Software is updated</div>
  }
}

function NullFreeDiskSpace (idx) {
  const freeDiskSpace = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'freeDiskSpace'])
  if (freeDiskSpace === null) {
    return <div>Go Back to page one and check if the Hard Drive has free space.</div>
  }
}

function NullFileSize (idx) {
  const sizeOfTempFiles = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'sizeOfTempFiles'])
  if (sizeOfTempFiles === null) {
    return <div>Go Back to page two and check size of temp files.</div>
  }
}

function NullFragmentation (idx) {
  const fragmentation = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'fragmentation'])
  if (fragmentation === null) {
    return <div>Go Back to page two and check how fragmented the hard drive is.</div>
  }
}

function PcCleanedNotes (idx) {
  const hasPcBeenCleaned = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hasPcBeenCleaned'])
  const pcCleanedNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'pcCleanedNotes'])
  if (!hasPcBeenCleaned) {
    if (pcCleanedNotes === '') {
      return <div>Please enter Notes as to why the PC has not been cleaned</div>
    }
  }
}

function VirusesFoundNotes (idx) {
  const hasVirusBeenFound = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hasVirusBeenFound'])
  const virusesFoundNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'virusesFoundNotes'])
  if (hasVirusBeenFound) {
    if (virusesFoundNotes === '') {
      return <div>Please enter Notes as to what and how many Viruses have been found</div>
    }
  }
}

function HardDriveHealthNotes (idx) {
  const isHardDriveGood = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'isHardDriveGood'])
  const hardDriveHealthNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hardDriveHealthNotes'])
  if (!isHardDriveGood) {
    if (hardDriveHealthNotes === '') {
      return <div>Please enter Notes about the hard drives health</div>
    }
  }
}

function EventLogsNotes (idx) {
  const hasCritcalEventLogs = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hasCritcalEventLogs'])
  const EventLogsNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'EventLogsNotes'])
  if (hasCritcalEventLogs) {
    if (EventLogsNotes === '') {
      return <div>Please enter Notes about the hard drives health</div>
    }
  }
}

function SystemFileCheckNotes (idx) {
  const hasCurroptedSystemFiles = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hasCurroptedSystemFiles'])
  const systemFileCheckNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'systemFileCheckNotes'])
  if (hasCurroptedSystemFiles) {
    if (systemFileCheckNotes === '') {
      return <div>Please enter Notes about the hard drives health</div>
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
        return <div>Enter why the server backups arent working.</div>
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
