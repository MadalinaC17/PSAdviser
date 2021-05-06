import firebase from 'firebase';



  var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJLZDCMgHhBGq71PhUtzRY8XSfUdZ0f8Y",
    authDomain: "psadviser-7430e.firebaseapp.com",
    projectId: "psadviser-7430e",
    storageBucket: "psadviser-7430e.appspot.com",
    messagingSenderId: "449268166899",
    appId: "1:449268166899:web:e9cbfcba95d3343d930786"
  })

  var db = firebaseApp.firestore();

  export  {db};