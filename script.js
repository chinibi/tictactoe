var a = document.getElementById("sq00").innerHTML = null
var b = document.getElementById("sq01").innerHTML = null
var c = document.getElementById("sq02").innerHTML = null
var d = document.getElementById("sq10").innerHTML = null
var e = document.getElementById("sq11").innerHTML = null
var f = document.getElementById("sq12").innerHTML = null
var g = document.getElementById("sq20").innerHTML = null
var h = document.getElementById("sq21").innerHTML = null
var i = document.getElementById("sq22").innerHTML = null
// var spaces = [a,b,c,d,e,f,g,h,i]
// var buttons = document.getElementsByClassName("square");
var winner = '';
var playerTurn = 'X';
document.getElementById("playerTurn").innerHTML = playerTurn + " to move"

function init() {
  a = document.getElementById("sq00").innerHTML = null
  b = document.getElementById("sq01").innerHTML = null
  c = document.getElementById("sq02").innerHTML = null
  d = document.getElementById("sq10").innerHTML = null
  e = document.getElementById("sq11").innerHTML = null
  f = document.getElementById("sq12").innerHTML = null
  g = document.getElementById("sq20").innerHTML = null
  h = document.getElementById("sq21").innerHTML = null
  i = document.getElementById("sq22").innerHTML = null
  winner = '';
  playerTurn = 'X'
  document.getElementById("playerTurn").innerHTML = playerTurn + " to move"
}

document.getElementById("reset").addEventListener("click", init);

function nextTurn() {
  if (playerTurn == 'X') {
    playerTurn = 'O';
    document.getElementById("playerTurn").innerHTML = playerTurn + " to move"
  }
  else {
    playerTurn = 'X'
    document.getElementById("playerTurn").innerHTML = playerTurn + " to move"
  }
}

function didThreeMatch(r,s,t) {
  if ((r == playerTurn && s == playerTurn && t == playerTurn)){
    winner = playerTurn;
    return true;
  }
  else {return false;}
}

function winRow() {
  if (didThreeMatch(a,b,c) ||
      didThreeMatch(d,e,f) ||
      didThreeMatch(g,h,i)) {
    return true;
  }
}

function winCol() {
  if (didThreeMatch(a,d,g) ||
      didThreeMatch(b,e,h) ||
      didThreeMatch(c,f,i)) {
    return true;
  }
}

function winDiag() {
  if (didThreeMatch(a,e,i) ||
      didThreeMatch(c,e,g)) {
    return true;
  }
}

function isGameOver() {
  if (winRow() || winCol () || winDiag()) {
    document.getElementById("playerTurn").innerHTML = winner + " has won";
    playerTurn = null;
  }
  else if ((a&&b&&c&&d&&e&&f&&g&&h&&i) != null) {
    document.getElementById("playerTurn").innerHTML = "Tie game";
    playerTurn = null;
  }
  else {nextTurn()}
}


// for (var i=0; i<buttons.length; i++) {
//   buttons[i].onclick = function() {
//     if (buttons[i].innerHTML == null && playerTurn != null) {
//       document.getElementById(this.id).innerHTML = playerTurn;
//       spaces[i] = playerTurn;
//       isGameOver();
//     }
//   }
// }

// make a move on the game board
document.getElementById("sq00").addEventListener("click", function() {
  if (a == null && playerTurn != null) {
    document.getElementById("sq00").innerHTML = playerTurn;
    a = playerTurn;
    isGameOver();
  }
})

document.getElementById("sq01").addEventListener("click", function() {
  if (b == null && playerTurn != null) {
    document.getElementById("sq01").innerHTML = playerTurn;
    b = playerTurn;
    isGameOver();
  }
})

document.getElementById("sq02").addEventListener("click", function() {
  if (c == null && playerTurn != null) {
    document.getElementById("sq02").innerHTML = playerTurn;
    c = playerTurn;
    isGameOver();
  }
})

document.getElementById("sq10").addEventListener("click", function() {
  if (d == null && playerTurn != null) {
    document.getElementById("sq10").innerHTML = playerTurn;
    d = playerTurn;
    isGameOver();
  }
})

document.getElementById("sq11").addEventListener("click", function() {
  if (e == null && playerTurn != null) {
    document.getElementById("sq11").innerHTML = playerTurn;
    e = playerTurn;
    isGameOver();
  }
})

document.getElementById("sq12").addEventListener("click", function() {
  if (f == null && playerTurn != null) {
    document.getElementById("sq12").innerHTML = playerTurn;
    f = playerTurn;
    isGameOver();
  }
})

document.getElementById("sq20").addEventListener("click", function() {
  if (g == null && playerTurn != null) {
    document.getElementById("sq20").innerHTML = playerTurn;
    g = playerTurn;
    isGameOver();
  }
})

document.getElementById("sq21").addEventListener("click", function() {
  if (h == null && playerTurn != null) {
    document.getElementById("sq21").innerHTML = playerTurn;
    h = playerTurn;
    isGameOver();
  }
})

document.getElementById("sq22").addEventListener("click", function() {
  if (i == null && playerTurn != null) {
    document.getElementById("sq22").innerHTML = playerTurn;
    i = playerTurn;
    isGameOver();
  }
})


