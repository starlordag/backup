import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDhDayIJEimHkJOEgwp1JSBFygIETzmxnU",
  authDomain: "job-application-d19d9.firebaseapp.com",
  projectId: "job-application-d19d9",
  storageBucket: "job-application-d19d9.appspot.com",
  messagingSenderId: "999360616126",
  appId: "1:999360616126:web:e63c8e0a0f69d75beff0ef"
};

// Initialize Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   