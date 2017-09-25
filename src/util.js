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
    computerInputStep: 1,
    isEverythingEntered: false,
    averageScore: null
  }

  return mori.toClj(newComputer)
}

function pushFireBase () {
  const appStateJS = mori.toJs(window.CURRENT_STATE)
  const companyName = mori.get(window.CURRENT_STATE, 'companyName')
  const companyNameJs = mori.toJs(companyName)
  let month = new Date().getMonth()
  const dayOfMonth = new Date().getDate()
  const year = new Date().getFullYear()

  if (month === 0) month = 'Jan'
  if (month === 1) month = 'Feb'
  if (month === 2) month = 'Mar'
  if (month === 3) month = 'Apr'
  if (month === 4) month = 'May'
  if (month === 5) month = 'Jun'
  if (month === 6) month = 'Jul'
  if (month === 7) month = 'Aug'
  if (month === 8) month = 'Sep'
  if (month === 9) month = 'Oct'
  if (month === 10) month = 'Nov'
  if (month === 11) month = 'Dec'

  const date = dayOfMonth + '-' + month + '-' + year
  const uniqueKey = companyNameJs + ' ' + date

  const rootRef = firebase.database().ref(uniqueKey)
  rootRef.set(appStateJS)
}

export {morilog, createEmptyComputer, pushFireBase}
