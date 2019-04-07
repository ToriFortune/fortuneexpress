// to create a transport app for trains
// use jumbotron create grid.
// header for name of transport app, row 1 column 1-transport provider, col 2-dest city , col 3 departure time, col 4-travel time, col 5- arrival in dest city, col 6 interval, col 7 next depart time 





  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCzuaWKD9yjl-eR-8Ict5y6Q-9UCWQmAKY",
    authDomain: "project-1-5dcbc.firebaseapp.com",
    databaseURL: "https://project-1-5dcbc.firebaseio.com",
    projectId: "project-1-5dcbc",
    storageBucket: "project-1-5dcbc.appspot.com",
    messagingSenderId: "212042728114"
  };
  firebase.initializeApp(config);
var database = firebas.database();