import mori from 'mori'

function isEverythingEnteredFn () {
  const idx = mori.get(window.CURRENT_STATE, 'activeComputerIdx')

  const computerName = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'computerName'])
  const checkForVirusUpdates = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'checkForVirusUpdates'])
  const freeDiskSpace = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'freeDiskSpace'])
  const sizeOfTempFiles = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'sizeOfTempFiles'])
  const fragmentation = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'fragmentation'])
  const hasPcBeenCleaned = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hasPcBeenCleaned'])
  const pcCleanedNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'pcCleanedNotes'])
  const numberOfWindowsUpdates = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'numberOfWindowsUpdates'])
  const hasVirusBeenFound = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hasVirusBeenFound'])
  const virusesFoundNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'virusesFoundNotes'])
  const isHardDriveGood = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'isHardDriveGood'])
  const hardDriveHealthNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hardDriveHealthNotes'])
  const hasCritcalEventLogs = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hasCritcalEventLogs'])
  const eventLogsNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'eventLogsNotes'])
  const hasCurroptedSystemFiles = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'hasCurroptedSystemFiles'])
  const systemFileCheckNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'systemFileCheckNotes'])

  const isServer = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'isServer'])
  const serverBackupNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'serverBackupNotes'])
  const serverBackupWorkingNotes = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'serverBackupWorkingNotes'])
  const isServerBackupWorking = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'isServerBackupWorking'])

  if (!isServer) {
    if (computerName !== ('Computer ' + (idx + 1)) && checkForVirusUpdates !== '' && freeDiskSpace !== '' &&
                                                  sizeOfTempFiles !== '' && fragmentation !== '' &&
                                                  (hasPcBeenCleaned || pcCleanedNotes !== '') &&
                                                  numberOfWindowsUpdates !== '' &&
                                                  (!hasVirusBeenFound || virusesFoundNotes !== '') &&
                                                  (isHardDriveGood || hardDriveHealthNotes !== '') &&
                                                  (!hasCritcalEventLogs || eventLogsNotes !== '') &&
                                                  (!hasCurroptedSystemFiles || systemFileCheckNotes !== '')) {
      const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isEverythingEntered'], true)
      window.NEXT_STATE = newState
    } else {
      const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isEverythingEntered'], false)
      window.NEXT_STATE = newState
    }
  } else if (isServer) {
    const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isEverythingEntered'], false)
    window.NEXT_STATE = newState
    if (serverBackupNotes !== '' || serverBackupWorkingNotes !== '' || isServerBackupWorking) {
      const newState = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isEverythingEntered'], true)
      window.NEXT_STATE = newState
    }
  }
}

export default isEverythingEnteredFn
