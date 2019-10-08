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

    database.ref("train/").push(trainData)

});

// 

database.ref("train/").on("child_added", function(childSnapshot){

    var newTrainLine = childSnapshot.val();

    console.log(newTrainLine.name)
    console.log(newTrainLine.destination)
    console.log(newTrainLine.time)
    console.log(newTrainLine.frequency)

    var trainRow = $("<tr>");

    var trainName = $("<tb>");
    var trainDestination = $("<tb>");
    var trainTime = $("<tb>");
    var trainFrequency = $("<tb>");
    var trainMinutesAway = $("<tb>");

    var newTrainName = newTrainLine.name;
    var newTrainDestination = newTrainLine.destination;
    var newTrainTime = newTrainLine.time;
    var newTrainFrequency = newTrainLine.frequency;

    // shakey add moment stuff here
    var newTrainMinutesAway = "x"

    trainName.text(newTrainName);
    trainDestination.text(newTrainDestination);
    trainTime.text(newTrainTime);
    trainFrequency.text(newTrainFrequency);
    trainMinutesAway.text(newTrainMinutesAway);

    trainRow.append(trainName);
    trainRow.append(trainDestination);
    trainRow.append(trainTime);
    trainRow.append(trainFrequency);
    trainRow.append(trainMinutesAway);

    $("trainName").addClass("col-2")
    $("trainDestination").addClass("col-2")

    $("#train-data-display").append(trainRow);


}),


function(errorObject){
    console.log("Errors: " + errorObject.code);
}






});





