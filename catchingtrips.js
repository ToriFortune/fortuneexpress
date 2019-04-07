// Steps to complete:

// 1. Initialize Firebase
// create firebase database variable
// Ask how to make frequency calculate in minutes
// Learn how moment.js works and incorporate
// create variables for carrier name, destination, departure and frequency 
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed



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



var carrierName = $("#carrier-name-input").val().trim();
var destination = $("#destination-input").val().trim();
var initialDeparture =$("#initial-departure-input").val().trim();
var frequency = $("#frequency-input").val().trim();

