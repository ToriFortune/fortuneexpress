// Steps to complete:

// 1. Initialize Firebase
// create firebase database variable
// Ask how to make frequency calculate in minutes
// Learn how moment.js works and incorporate
// create variables for carrier name, destination, initial departure and frequency 
// 2. Create button for adding new carrier to be updated in html and firbase database
// 3. Create a way to pull carrier information from database.
// 4. How is the next departure time calcuated?
//    


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


  var database = firebase.database();
  

  // button to add new carrier

  $("#add-carrier-btn").on("click", function(event) {
    event.preventDefault();



    // grab user input of new carrier
    var carrierName = $("#carrier-name-input").val().trim();
    var destAddress = $("#destination-input").val().trim();
    var iniDepTime =$("#initial-departure-input").val().trim();
    var carrierFrequency = $("#frequency-input").val().trim();
    

  // local object to hold carrier data
    var newCarrier ={
      carrier: carrierName,
      destination:destAddress,
      frequency:carrierFrequency,
      departure:iniDepTime,
      
    };

    // upload new carrier data to firebase database
    database.ref().push(newCarrier);

    console.log(newCarrier.carrier);
    console.log(newCarrier.destination);
    console.log(newCarrier.departure);
    console.log(newCarrier.frequency; 
    
      // alert user when new data is entered
    alert("New Carrier successfully added");


    // clear out text inputed
    $("#carrier-name-input").val("");
    $("#destination-input").val("");
    $("#initial-departure-input").val("");
    $("#frequency-input").val("");



  });
    
      
   
    // 3. Create Firebase event for adding new carrier  to the database and a row in the html when a new carrier has been added.

    
    database.ref().on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val());
 
  // Store everything into a variable.
      var carrierName = childSnapshot.val().carrier;
      var destAddress = childSnapshot.val().destination;
      var iniDepTime = childSnapshot.val().departure;
      var carrierFrequency = childSnapshot.val().frequency;


console.log(carrierName);
console.log(destAddress);
console.log(iniDepTime);
console.log(carrierFrequency);

var nextDep = iniDepTime * carrierFrequency;
console.log(nextDep);
var newRow = $("<tr>").append(
  $("<td>").text(carrierName),
  $("<td>").text(destAddress),
  $("<td>").text(carrierFrequency),
  $("<td>").text(iniDepTime),
  $("<td>").text(nextDep),
  
);

$("#carrier-table > tbody").append(newRow);


    });


























