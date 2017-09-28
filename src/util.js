import mori from 'mori'
import firebase from './firebase'

function morilog (moriThing) {
  console.log(mori.toJs(moriThing))
}

// returns a mori hashMap for a new computer
function createEmptyComputer (computerName) {
  const newComputer = {
    computerName: computerName,
    checkForVirusUpdates: '',
    freeDiskSpace: '',
    sizeOfTempFiles: '',
    fragmentation: '',
    pcCleaned: 0,
    numberOfWindowsUpdates: '',
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
    averageScore: ''
  }

  return mori.toClj(newComputer)
}

function pushFireBase () {
  const appStateJS = mori.toJs(window.CURRENT_STATE)
  const uniqueKey = mori.get(window.CURRENT_STATE, 'companyId')
  const uniqueKeyJs = mori.toJs(uniqueKey)

  const rootRef = firebase.database().ref(uniqueKeyJs)
  rootRef.set(appStateJS)
}
let incompleteJobVec = mori.get(window.CURRENT_STATE, 'incompleteJobArr')

function fetchIncompleteJobsFromFirebase (NameOfCompany) {
  firebase.database().ref(NameOfCompany).once('value').then(function (snapshot) {
    let company = snapshot.val()
    if (!company.allComputersFinished) {
      incompleteJobVec = mori.conj(incompleteJobVec, company.companyId)
      window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'incompleteJobArr', incompleteJobVec)
    }
    return incompleteJobVec
  })
}

function fetchCompanyIdFromFirebase () {
  let companyNameArr = []
  firebase.database().ref().once('value').then(function (snapshot) {
    let company = snapshot.val()
    for (let NameOfCompany in company) {
      fetchIncompleteJobsFromFirebase(NameOfCompany)
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

function computerNameArr (numComputers) {
  let computerNameVect = mori.vector()
  for (let idx = 0; idx < numComputers; idx++) {
    let computerName = mori.getIn(window.CURRENT_STATE, ['computers', idx, 'computerName'])
    computerNameVect = mori.conj(computerNameVect, computerName)
  }
  let newState1 = mori.assoc(window.CURRENT_STATE, 'computerNameArr', computerNameVect)
  let newState2 = mori.assoc(newState1, 'showComputerNames', true)
  window.NEXT_STATE = newState2
}

export {morilog,
        createEmptyComputer,
        pushFireBase,
        fetchCompanyIdFromFirebase,
        fetchIncompleteJobsFromFirebase,
        companyId,
        computerNameArr}
