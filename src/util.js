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
    pcCleanedNotes: '',
    clickedPcCleaned: false,
    numberOfWindowsUpdates: null,
    virusesFound: null,
    virusesFoundNotes: '',
    clickedVirusFound: false,
    hardDriveHealth: null,
    hardDriveHealthNotes: '',
    clickedHardDriveHealth: false,
    eventLogs: null,
    eventLogsNotes: '',
    clickedEventLogs: false,
    systemFileCheck: null,
    systemFileCheckNotes: '',
    clickSystemFileCheck: false,
    isServer: false,
    serverBackups: null,
    doesServerHaveABackUp: false,
    isServerBackupWorking: false,
    serverBackupNotes: '',
    serverBackupWorkingNotes: '',
    serverBackupsChecked: false,
    averageScore: null
  }

  return mori.toClj(newComputer)
}

export {morilog, createEmptyComputer}
