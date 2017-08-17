import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCP37xgDPXRg-KLZalXIHhpnOV4V5RxgNw',
  authDomain: 'scheduled-maintenance.firebaseapp.com',
  databaseURL: 'https://scheduled-maintenance.firebaseio.com',
  projectId: 'scheduled-maintenance',
  storageBucket: 'scheduled-maintenance.appspot.com',
  messagingSenderId: '653612881079'
}
firebase.initializeApp(config)

export default firebase
