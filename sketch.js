//DECLEARING VARIABLES,CONSTANTES

var name = document.getElementById('name');
var age = document.getElementById('age');
var locality = document.getElementById('locality');
var email = document.getElementById('email');
var message = document.getElementById('message');
var gender = document.getElementById('gender');
var submit = document.getElementById('submit');
var database;





database = firebase.database();




// MAIN LOGIC STARTS HERE


function getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });

  }

  function update(state){
    database.ref('/').update({
      gameState: state
    });
  }