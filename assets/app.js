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