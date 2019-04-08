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
  

  // button to add new carrier

  $("#add-carrier-btn").on("click", function(event) {
    event.preventDefault();



    // grab user input of new carrier
    var carrierName = $("#carrier-name-input").val().trim();
    var destAddress = $("#destination-input").val().trim();
    var depTime =$("#initial-departure-input").val().trim();
    var carrierFrequency = $("#frequency-input").val().trim();

  // local object to hold carrier data
    var newCarrier ={
      carrier: carrierName,
      destination:destAddress,
      departure:depTime,
      frequency:carrierFrequency,
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
      var depTime = childSnapshot.val().departure;
      var carrierFrequency = childSnapshot.val().frequency;
console.log(carrierName);
console.log(destAddress);
console.log(depTime);
console.log(carrierFrequency);


    });


























