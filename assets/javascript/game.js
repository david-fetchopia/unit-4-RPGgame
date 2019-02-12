var obi1 = {
  "healthPoints": 120,
  "attackPower": 6,
  "counterAttackPower": 20,
  imgFile: '../images/obi-wan.jpg'
}
var darthMaul = {
  "healthPoints": 150,
  "attackPower": 6,
  "counterAttackPower": 20,
}
var darthVader = {
  "healthPoints": 180,
  "attackPower": 6,
  "counterAttackPower": 20,
}
var yoda = {
  "healthPoints": 100,
  "attackPower": 6,
  "counterAttackPower": 20,
}

var hasCharacter = false;
var hasDefender = false;
var hasEnemy = false;

$(document).ready(function () {
  //populate the starting area
  //display all characters
  $('<div class="whiteArea" id="yoda"><p>Yoda Area</p><img src="assets/images/Yoda-Retina_2a7ecc26.jpeg"><p>' + yoda["healthPoints"] + '</p></div>').appendTo("#startingArea");
  $('<div class="whiteArea" id="darthMaul"><p>Darth Maul Area</p><img src="assets/images/Darth-Maul_632eb5af.jpeg"><p>' + darthMaul["healthPoints"] + '</p></div>').appendTo("#startingArea");
  $('<div class="whiteArea" id="darthVader"><p>Darth Vader Area</p><img src="assets/images/darth-vader.jpg"><p>' + darthVader["healthPoints"] + '</p></div>').appendTo("#startingArea");
  $('<div class="whiteArea" id="obiOne"><p>Obi One Kenobi Area</p> <img src="assets/images/obi-wan.jpeg"><p>' + obi1["healthPoints"] + '</p></div>').appendTo("#startingArea");

  $('#yoda').on("click", function () {
    if (!hasCharacter) {
      console.log("hello there");
      //remove starting area
      //put chosen character in your character
      //put remaining characters in enemies available to attack
      /*
      $('.whiteArea').remove();
      $('<div class="whiteArea" id="yoda"><p>Yoda Area</p><img src="assets/images/Yoda-Retina_2a7ecc26.jpeg"><p>' + yoda["healthPoints"] + '</p></div>').appendTo("#yourCharacter");
      $('<div class="redArea" id="darthMaul"><p>Darth Maul Area</p><img src="assets/images/Darth-Maul_632eb5af.jpeg"><p>' + darthMaul["healthPoints"] + '</p></div>').appendTo("#enemiesAvailable");
      $('<div class="redArea" id="darthVader"><p>Darth Vader Area</p><img src="assets/images/darth-vader.jpg"><p>' + darthVader["healthPoints"] + '</p></div>').appendTo("#enemiesAvailable");
      $('<div class="redArea" id="obiOne"><p>Obi One Kenobi Area</p> <img src="assets/images/obi-wan.jpeg"><p>' + obi1["healthPoints"] + '</p></div>').appendTo("#enemiesAvailable");
      hasCharacter = true;
      */
    }
    else {
      console.log("second click accepted");
    }
  });

  $('#obiOne').on("click", function () {
    console.log("hello there AGAIN");
  })




  $('#attackButton').on("click", function () {
    console.log("attack button");
  });

});