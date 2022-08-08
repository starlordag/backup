import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
      apiKey: "AIzaSyCNA8nRXYNS_Bz-DrrwcdKzFOcHKMuSiMg",
      authDomain: "complaining-form.firebaseapp.com",
      projectId: "complaining-form",
      storageBucket: "complaining-form.appspot.com",
      messagingSenderId: "155816411643",
      appId: "1:155816411643:web:01699a36a8a944e0b18b5e"
    };
 
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

