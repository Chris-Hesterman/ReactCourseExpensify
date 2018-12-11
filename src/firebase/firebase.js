import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAOTyB_u4Hom5s8K9ti4UJIqRAK6-QNYa0",
    authDomain: "expensify-d4c09.firebaseapp.com",
    databaseURL: "https://expensify-d4c09.firebaseio.com",
    projectId: "expensify-d4c09",
    storageBucket: "expensify-d4c09.appspot.com",
    messagingSenderId: "350529333997"
  };

  firebase.initializeApp(config);

  firebase.database().ref().set({
      name: 'Chris Hesterman'
  });