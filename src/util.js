import mori from 'mori'
import firebase from './firebase'

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
    pcCleaned: 0,
    numberOfWindowsUpdates: null,
    virusesFound: 0,
    hardDriveHealth: 0,
    eventLogs: 0,
    systemFileCheck: null,
    isServer: false,
    serverBackups: 0,
    doesServerHaveABackUp: false,
    isServerBackupWorking: false,
    hasPcBeenCleaned: false,
    hasVirusBeenFound: true,
    isHardDriveGood: false,
    hasCritcalEventLogs: true,
    hasCurroptedSystemFiles: true,
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

function pushFireBase () {
  const appStateJS = mori.toJs(window.CURRENT_STATE)
  const rootRef = firebase.database().ref().child('CompanyID')
  rootRef.push(appStateJS)
}

export {morilog, createEmptyComputer, pushFireBase}
