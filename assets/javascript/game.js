var obi1 = {
  "name": "Obi One Kenobe",
  "healthPoints": 120,
  "baseAttackPower": 6,
  "attackPower": 6,
  "counterAttackPower": 20,
}
var darthMaul = {
  "name": "Darth Maul",
  "healthPoints": 150,
  "baseAttackPower": 6,
  "attackPower": 15,
  "counterAttackPower": 25,
}
var darthVader = {
  "name": "Darth Vader",
  "healthPoints": 180,
  "baseAttackPower": 8,
  "attackPower": 20,
  "counterAttackPower": 25,
}
var yoda = {
  "name": "Master Yoda",
  "healthPoints": 100,
  "baseAttackPower": 8,
  "attackPower": 8,
  "counterAttackPower": 6,
}

function getCharacter(name) {
  if (name === "yoda") {
    return yoda;
  }
  else if (name === "darthVader") {
    return darthVader;
  }
  else if (name === "darthMaul") {
    return darthMaul;
  }
  else {
    return obi1;
  }
}
var hasCharacter = false;
var hasDefender = false;
var enemiesDefeated = 0;

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
      console.log($(this).attr("id"));
      hasCharacter = true;
      var myCharacter = $('#yoda');
      myCharacter.detach().appendTo('#yourCharacter');
      var remainingCharacters = $('#darthMaul,#darthVader,#obiOne');
      remainingCharacters.detach().appendTo('#enemiesAvailable');
      remainingCharacters.appendTo('#enemiesAvailable').removeClass("whiteArea").addClass("redArea");
    }
    else if (hasCharacter && !hasDefender) {
      var currentCharacter = $('#yourCharacter').children().last().attr("id");
      if (currentCharacter != "yoda") {
        var defenderTarget = $('#yoda');
        defenderTarget.detach().appendTo('#defenderArea').removeClass("redArea").addClass("blackArea");
        hasDefender = true;
        $('#attackMessage').html("");
      }
      else {
        console.log("second click accepted");
      }

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
      var currentCharacter = $('#yourCharacter').children().last().attr("id");
      if (currentCharacter != "darthMaul") {
        var defenderTarget = $('#darthMaul');
        defenderTarget.detach().appendTo('#defenderArea').removeClass("redArea").addClass("blackArea");
        hasDefender = true;
        $('#attackMessage').html("");
      }
      else {
        console.log("second click accepted");
      }
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
      console.log($('#startingArea').empty());
    }
    else if (hasCharacter && !hasDefender) {
      var currentCharacter = $('#yourCharacter').children().last().attr("id");
      if (currentCharacter != "obiOne") {
        var defenderTarget = $('#obiOne');
        defenderTarget.detach().appendTo('#defenderArea').removeClass("redArea").addClass("blackArea");
        hasDefender = true;
        $('#attackMessage').html("");
      }
      else {
        console.log("second click accepted");
      }
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
      var currentCharacter = $('#yourCharacter').children().last().attr("id");
      if (currentCharacter != "darthVader") {
        var defenderTarget = $('#darthVader');
        defenderTarget.detach().appendTo('#defenderArea').removeClass("redArea").addClass("blackArea");
        hasDefender = true;
        $('#attackMessage').html("");
      }
      else {
        console.log("second click accepted");
      }
    }

    else {
      console.log("second click accepted");
    }
  });

  $('#attackButton').on("click", function () {
    if (hasCharacter && hasDefender) {
      var myCharacter = $('#yourCharacter').children('.whiteArea');
      var myDefender = $('#defenderArea').children('.blackArea');
      var myCharacterObject = getCharacter(myCharacter.attr('id'));
      var myDefenderObject = getCharacter(myDefender.attr('id'));

      //attacked button clicked with proper initiation:
      //subtract mycharacter["health"] - mydefender["counterAttack"];
      //update the new health points and atk power
      //print message depending on the result
      myCharacterObject["healthPoints"] -= myDefenderObject["counterAttackPower"];
      myDefenderObject["healthPoints"] -= myCharacterObject["attackPower"];
      var attackMessage = "You attacked " + myCharacterObject["name"] + " for " + myCharacterObject["attackPower"] + " damage." + "<br>" + myDefenderObject["name"] + " attacked you back for " + myDefenderObject["counterAttackPower"] + " damage.";
      $('#attackMessage').html(attackMessage);
      myCharacterObject["attackPower"] += myCharacterObject["baseAttackPower"];
      myCharacter.children().last().text(myCharacterObject["healthPoints"]);
      myDefender.children().last().text(myDefenderObject["healthPoints"]);



      if (myDefenderObject["healthPoints"] <= 0) {
        //defeated the enemy and move on to the next enemy
        //remove the defender, print the p tag below saying
        //"You have defeated playerName, you can choose to fight another enemy. "
        var defeatedMessage = "You have defeated " + myDefenderObject["name"] + ", you can choose to fight another enemy.";
        $('#attackMessage').html(defeatedMessage);
        myDefender.detach();
        hasDefender = false;
        enemiesDefeated++;
        if (enemiesDefeated === 3) {
          //you win the game
          //print message
          //give option for restart
          $('#attackMessage').html("You Won!!! GAME OVER!!!<br>");
          var reset = $('<button>Reset</button>').click(function () {
            location.reload();
          });
          reset.appendTo('#attackMessage')
        }
      }
      else if (myCharacterObject["healthPoints"] <= 0) {
        //you have lost the game
        //print message
        //give option for restart
        $('#attackMessage').html("You have been deafeated... GAME OVER!!!<br>");
        var reset = $('<button>Reset</button>').click(function () {
          location.reload();
        });
        reset.appendTo('#attackMessage')
      }
    }

  });
});