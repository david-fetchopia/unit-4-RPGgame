var obi1 = {
  "healthPoints": 120,
  "attackPower": 6,
  "counterAttackPower": 5,
}
var darthMaul = {
  "healthPoints": 150,
  "attackPower": 6,
  "counterAttackPower": 25,
}
var darthVader = {
  "healthPoints": 180,
  "attackPower": 8,
  "counterAttackPower": 25,
}
var yoda = {
  "healthPoints": 100,
  "attackPower": 8,
  "counterAttackPower": 25,
}

var hasCharacter = false;
var hasDefender = false;
var hasEnemy = false;

$(document).ready(function () {
  //populate the starting area
  //display all characters
  $('<div class="whiteArea" id="yoda"><p>Yoda</p><img src="assets/images/Yoda-Retina_2a7ecc26.jpeg"><p>' + yoda["healthPoints"] + '</p></div>').appendTo("#startingArea");
  $('<div class="whiteArea" id="darthMaul"><p>Darth Maul</p><img src="assets/images/Darth-Maul_632eb5af.jpeg"><p>' + darthMaul["healthPoints"] + '</p></div>').appendTo("#startingArea");
  $('<div class="whiteArea" id="darthVader"><p>Darth Vader</p><img src="assets/images/darth-vader.jpg"><p>' + darthVader["healthPoints"] + '</p></div>').appendTo("#startingArea");
  $('<div class="whiteArea" id="obiOne"><p>Obi One Kenobi</p> <img src="assets/images/obi-wan.jpeg"><p>' + obi1["healthPoints"] + '</p></div>').appendTo("#startingArea");

  $('#yoda').on("click", function () {
    if (!hasCharacter) {
      console.log("hello there");
      hasCharacter = true;
      var myCharacter = $('#yoda');
      myCharacter.detach().appendTo('#yourCharacter');
      var remainingCharacters = $('#darthMaul,#darthVader,#obiOne');
      remainingCharacters.detach().appendTo('#enemiesAvailable');
      remainingCharacters.appendTo('#enemiesAvailable').removeClass("whiteArea").addClass("redArea");      
    }
    else if (hasCharacter && !hasDefender) {
      var defenderTarget = $('#yoda');
      defenderTarget.detach().appendTo('#defenderArea').removeClass("redArea").addClass("blackArea");
      hasDefender = true;
    }

    else {
      console.log("second click accepted");
    }
  });

  $('#darthMaul').on("click", function () {
    if (!hasCharacter) {
      console.log("hello there");
      hasCharacter = true;
      var myCharacter = $('#darthMaul');
      myCharacter.detach().appendTo('#yourCharacter');
      var remainingCharacters = $('#yoda,#darthVader,#obiOne');
      remainingCharacters.detach().appendTo('#enemiesAvailable');
      remainingCharacters.appendTo('#enemiesAvailable').removeClass("whiteArea").addClass("redArea");
    }
    else if (hasCharacter && !hasDefender) {
      var defenderTarget = $('#darthMaul');
      defenderTarget.detach().appendTo('#defenderArea').removeClass("redArea").addClass("blackArea");
      hasDefender = true;
    }

    else {
      console.log("second click accepted");
    }
  });


  $('#obiOne').on("click", function () {
    if (!hasCharacter) {
      console.log("hello there");
      hasCharacter = true;
      var myCharacter = $('#obiOne');
      myCharacter.detach().appendTo('#yourCharacter');
      var remainingCharacters = $('#yoda,#darthVader,#darthMaul');
      remainingCharacters.detach().appendTo('#enemiesAvailable');
      remainingCharacters.appendTo('#enemiesAvailable').removeClass("whiteArea").addClass("redArea");
    }
    else if (hasCharacter && !hasDefender) {
      var defenderTarget = $('#obiOne');
      defenderTarget.detach().appendTo('#defenderArea').removeClass("redArea").addClass("blackArea");
      hasDefender = true;
    }
    else {
      console.log("second click accepted");
    }
  });

  $('#darthVader').on("click", function () {
    if (!hasCharacter) {
      console.log("hello there");
      hasCharacter = true;
      var myCharacter = $('#darthVader');
      myCharacter.detach().appendTo('#yourCharacter');
      var remainingCharacters = $('#yoda,#obiOne,#darthMaul');
      remainingCharacters.detach().appendTo('#enemiesAvailable');
      remainingCharacters.appendTo('#enemiesAvailable').removeClass("whiteArea").addClass("redArea");
    }
    else if (hasCharacter && !hasDefender) {
      var defenderTarget = $('#darthVader');
      defenderTarget.detach().appendTo('#defenderArea').removeClass("redArea").addClass("blackArea");
      hasDefender = true;
    }

    else {
      console.log("second click accepted");
    }
  });




  $('#attackButton').on("click", function () {
    if (hasCharacter && hasDefender) {
      var myCharacter = $('#yourCharacter').children('.whiteArea');
      var myDefender = $('#defenderArea').children('.blackArea');
      console.log(myCharacter.attr('id') + " vs " + myDefender.attr('id'));
    }
    
    
    //console.log("attack button");
  });

});