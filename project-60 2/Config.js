import firebase from 'firebase'
 
  var firebaseConfig = {
    apiKey: "AIzaSyCkXrjHCCjeXf1UaYicmgZJGPy-vJaSpbk",
    authDomain: "school-attendance-8213e.firebaseapp.com",
    databaseURL: "https://school-attendance-8213e-default-rtdb.firebaseio.com",
    projectId: "school-attendance-8213e",
    storageBucket: "school-attendance-8213e.appspot.com",
    messagingSenderId: "843433307253",
    appId: "1:843433307253:web:cb84756019721a6d169c3c"
  }

  firebase.initializeApp(firebaseConfig);

  export default firebase.database()