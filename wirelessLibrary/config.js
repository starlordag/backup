import * as firebase from 'firebase'
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA6mqTCDQRrCjimglko0wvvgs1hSeiZha0",
    authDomain: "wily-app-23752.firebaseapp.com",
    projectId: "wily-app-23752",
    storageBucket: "wily-app-23752.appspot.com",
    messagingSenderId: "946058743928",
    appId: "1:946058743928:web:34e02ec98b860942219d8d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()