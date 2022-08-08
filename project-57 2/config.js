import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyAHt-rmIW9siGULUG-zLigwPLNMLIsEXNQ",
    authDomain: "newsletter-8b4bf.firebaseapp.com",
    databaseURL: "https://newsletter-8b4bf-default-rtdb.firebaseio.com",
    projectId: "newsletter-8b4bf",
    storageBucket: "newsletter-8b4bf.appspot.com",
    messagingSenderId: "473338000128",
    appId: "1:473338000128:web:efb990c6313f1f124739e5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()