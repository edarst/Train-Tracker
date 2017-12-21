//V1.2 KNOWN ISSUES

//Submit form is logging, but not appending to page or updating in Firbase	




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

  	//Pushing information to the HTML table

  	//Create new variables for our math

  	var tableName = snapshot.val().trainName;
  	var tableDestination = snapshot.val().destination;
  	var tableFirstTrainTime = snapshot.val().firstTrainTime;
  	var tableFrequency = snapshot.val().frequency;

  	//Math for calculations, which I do not understand and got a ton of help on in class. Will need to review this.

		var tableFirstTrainTimeConvert = moment(firstTrainTime, "hh:mm").subtract(1, "years");
		console.log("Converted time: " + tableFirstTrainTimeConvert);

		//Getting difference between current time and first time
		var differenceTime = moment().diff(moment(tableFirstTrainTimeConvert), "minutes");
		console.log("Difference in time: " + differenceTime);

		//Grabbing the remainder from the function above
		var timeRemainder = differenceTime % tableFrequency;
		console.log("Time remainder: " + timeRemainder);

		//Subtract the remainder we found above from the frequency
		var timeUntilTrain = tableFrequency - timeRemainder;
		console.log("Minutes until next train: " + timeUntilTrain);

		//When user can get the next train
		var nextTrain = moment().add(timeUntilTrain, "minutes");
		console.log("Train arrival time: " + moment(nextTrain).format("hh:mm"));


		//append the results to the table

		//Logging out errors

	}, function(errorObject) {
  	console.log("Error, read failed: " + errorObject.code);

  })

});