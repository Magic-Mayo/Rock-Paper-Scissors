var firebaseConfig = {
    apiKey: "AIzaSyBr2YPQyeL0INt0EIYRDmqvsf0MNP1U8P0",
    authDomain: "rock-paper-scissors-a9a8f.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-a9a8f.firebaseio.com",
    projectId: "rock-paper-scissors-a9a8f",
    storageBucket: "",
    messagingSenderId: "267978544107",
    appId: "1:267978544107:web:6d8088efd8b9ba61"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().on("value", function(snapshot) {
    console.log(snapshot);
})