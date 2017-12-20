//link up to Firebase Database

$(document).ready(function() {

var config = {
  	apiKey: "AIzaSyCspLJjAdWnu0kaLPgmyBgBlbcgGEZoeFY",
  	authDomain: "train-tracker-6a3c5.firebaseapp.com",
  	databaseURL: "https://train-tracker-6a3c5.firebaseio.com",
  	projectId: "train-tracker-6a3c5",
  	storageBucket: "",
  	messagingSenderId: "743267180757"

  };
  firebase.initializeApp(config);

  //setting up the Firebase database

  var database = firebase.initializeApp(config);

  //creating a new row whenever we collect data for the table

  database.ref("/trainData").on("child-added", function (snap) {

  	//logging the object's value
  	console.log(snap.val());

  	//append train name input to train name column

  	//append destination input to destination column


  })

  //setting up the on-click function for when the user hits submit

  $("#user-submit").on("click", function(e) {

  	//keep the button from refreshing the page
  	e.preventDefault();


  })