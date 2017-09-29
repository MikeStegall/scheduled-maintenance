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

  const computers = mori.get(window.CURRENT_STATE, 'computers')

  if (!isServer) {
    if (computerName !== ('Computer ' + (idx + 1)) && checkForVirusUpdates !== null && freeDiskSpace !== null &&
                                                  sizeOfTempFiles !== null && fragmentation !== null &&
                                                  (hasPcBeenCleaned || pcCleanedNotes !== '') &&
                                                  numberOfWindowsUpdates !== null &&
                                                  (!hasVirusBeenFound || virusesFoundNotes !== '') &&
                                                  (isHardDriveGood || hardDriveHealthNotes !== '') &&
                                                  (!hasCritcalEventLogs || eventLogsNotes !== '') &&
                                                  (!hasCurroptedSystemFiles || systemFileCheckNotes !== '')) {
      const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isEverythingEntered'], true)
      const newState2 = mori.assoc(newState1, 'allComputersFinished', true)
      window.NEXT_STATE = newState2
    }
  } else if (isServer) {
    const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isEverythingEntered'], false)
    const newState2 = mori.assoc(newState1, 'allComputersFinished', false)
    window.NEXT_STATE = newState2
    if (serverBackupNotes !== '' || serverBackupWorkingNotes !== '' || isServerBackupWorking) {
      const newState1 = mori.assocIn(window.CURRENT_STATE, ['computers', idx, 'isEverythingEntered'], true)
      const newState2 = mori.assoc(newState1, 'allComputersFinished', true)
      window.NEXT_STATE = newState2
    }
  }

  for (let i = 0; i < computers.length; i++) {
    console.log(computers[i].isEverythingEntered)
    if (computers[i].isEverythingEntered) {
      window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'allComputersFinished', true)
    } else if (!computers[i].isEverythingEntered) {
      window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'allComputersFinished', false)
    }
  }
}

export default isEverythingEnteredFn
