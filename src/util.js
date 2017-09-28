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
    systemFileCheck: 0,
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

function fetchIncompleteJobsFromFirebase () {
  let incompleteJobArr = []
  const companyNameArr = mori.get(window.CURRENT_STATE, 'companyNameArr')
  let companyNameArrJs = mori.toJs(companyNameArr)
  // console.log(companyNameArrJs)
  companyNameArrJs.forEach((name) => {
    firebase.database().ref(name).once('value').then(function (snapshot) {
      let company = snapshot.val()
      if (!company.allComputersFinished) {
        incompleteJobArr.push(company.companyId)
      }
      return incompleteJobArr
    })
  })
}

function fetchCompanyIdFromFirebase () {
  let companyNameArr = []
  firebase.database().ref().once('value').then(function (snapshot) {
    let company = snapshot.val()
    for (let NameOfCompany in company) {
      companyNameArr.push(NameOfCompany)
    }
    let newState = mori.assoc(window.CURRENT_STATE, 'companyNameArr', companyNameArr)
    window.NEXT_STATE = newState
    return companyNameArr
  })
}

function companyId (company) {
  firebase.database().ref(company).once('value').then(function (snapshot) {
    let company = snapshot.val()
    let computers = company.computers
    const newState1 = mori.assoc(window.CURRENT_STATE, 'computers', computers)
    const newState2 = mori.assoc(newState1, 'companyAverage', company.companyAverage)
    const newState3 = mori.assoc(newState2, 'companyName', company.companyName)
    window.NEXT_STATE = newState3
  })
  const newState1 = mori.assoc(window.CURRENT_STATE, 'companyId', companyId)
  const newState2 = mori.assoc(newState1, 'showPreviousJobComputerResults', true)
  window.NEXT_STATE = newState2
}

export {morilog,
        createEmptyComputer,
        pushFireBase,
        fetchCompanyIdFromFirebase,
        fetchIncompleteJobsFromFirebase,
        companyId}
