import mori from 'mori'

function morilog (moriThing) {
  console.log(mori.toJs(moriThing))
}

// returns a mori hashMap for a new computer
function createEmptyComputer (computerName) {
  const newComputer = {
    computerName: computerName,
    checkForVirusUpdates: null,
    freeDiskSpace: null,
    sizeOfTempFiles: null,
    fragmentation: null,
    pcCleaned: null,
    numberOfWindowsUpdates: null,
    virusesFound: null,
    hardDriveHealth: null,
    eventLogs: null,
    systemFileCheck: null,
    isServer: false,
    serverBackups: null,
    doesServerHaveABackUp: false,
    isServerBackupWorking: false,
    serverBackupsChecked: false,
    clickedPcCleaned: false,
    clickedVirusFound: false,
    clickedHardDriveHealth: false,
    clickedEventLogs: false,
    clickSystemFileCheck: false,
    pcCleanedNotes: '',
    virusesFoundNotes: '',
    hardDriveHealthNotes: '',
    eventLogsNotes: '',
    systemFileCheckNotes: '',
    serverBackupNotes: '',
    serverBackupWorkingNotes: '',
    averageScore: null
  }

  return mori.toClj(newComputer)
}

export {morilog, createEmptyComputer}
