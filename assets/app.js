	//link up to Firebase Database

$(document).ready(function() {

  //setting up the Firebase database

var config = {
  	apiKey: "AIzaSyCspLJjAdWnu0kaLPgmyBgBlbcgGEZoeFY",
  	authDomain: "train-tracker-6a3c5.firebaseapp.com",
  	databaseURL: "https://train-tracker-6a3c5.firebaseio.com",
  	projectId: "train-tracker-6a3c5",
  	storageBucket: "",
  	messagingSenderId: "743267180757"

  };
  firebase.initializeApp(config);

  var database = firebase.database();
  //creating a new row whenever we collect data for the table

  // database.ref("/trainData").on("child-added", function (snap) {

  // 	//logging the object's value

  // 	console.log(snap.val());

  // 	//append results to the table rows


  // })

  //setting up the on-click function for when the user hits submit

  $("#user-submit").on("click", function(e) {

  	//keep the button from refreshing the page

  	e.preventDefault();

  	//set up variables to grab user's entry into the Add Train panel's forms

  	var trainName = $("#train-name").val().trim();
  	var destination = $("#user-destination").val().trim();
  	var firstTrainTime = $("#first-train-time").val().trim();
  	var frequency = $("#train-frequency").val().trim();

  	//logging the results to ensure information is submitting in forms

  	console.log(trainName);
  	console.log(destination);
  	console.log(firstTrainTime);
  	console.log(frequency);

  	//push this up to Firebase

  	database.ref("/trainData").push({

  		"Train Name": trainName,
  		"Destination": destination,
  		"First Train Time": firstTrainTime,
  		"Frequency": frequency


  	});

  	//empties out values after submitting

  	$("#train-name").val("");
  	$("#user-destination").val("");
  	$("#first-train-time").val("");
  	$("frequency").val("");

  		return false;

  });

  	//Tracking changes to Firebase

  database.ref().orderByChild("dateAdded").on("child-added", function (snapshot) {


  	//Checking in console to see if this is a working function

  	console.log(snapshot.val());

  	//Checking in console to see if each value is working

  	console.log(snapshot.val().trainName);
  	console.log(snapshot.val().destination);
  	console.log(snapshot.val().firstTrainTime);
  	console.log(snapshot.val().frequency);


  })

});