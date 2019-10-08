$(document).ready(function(){


 var config = {
        apiKey: "AIzaSyAintGeF7ZntMz1OEBQN5DqgU_9fWO4kd0",
        authDomain: "runningtrainhw.firebaseapp.com",
        databaseURL: "https://runningtrainhw.firebaseio.com",
        projectId: "runningtrainhw",
        storageBucket: "",
        messagingSenderId: "934762422259",
        appId: "1:934762422259:web:c61c52a14e06020f39bc86"
      };

      firebase.initializeApp(config);

    var database = firebase.database();


// click listener
$("#submit").on("click", function(event){
    event.preventDefault();
    console.log("click listner is working")

    var trainData = {
        name: $("#trainNameInput").val().trim(),
        destination: $("#destinationInput").val().trim(),
        time: $("#hours").val() + ":" + $("#minutes").val(),
        frequency: $("#frequencyInput").val().trim(),
    }

    database.ref('train/').push(trainData)

});










});





