var a = document.getElementById("a").innerHTML = null
var b = document.getElementById("b").innerHTML = null
var c = document.getElementById("c").innerHTML = null
var d = document.getElementById("d").innerHTML = null
var e = document.getElementById("e").innerHTML = null
var f = document.getElementById("f").innerHTML = null
var g = document.getElementById("g").innerHTML = null
var h = document.getElementById("h").innerHTML = null
var i = document.getElementById("i").innerHTML = null
// var spaces = [a,b,c,d,e,f,g,h,i]
// var buttons = document.getElementsByClassName("square");
var winner = '';
var playerTurn = 'X';
document.getElementById("playerTurn").innerHTML = playerTurn + " to move"

function init() {
  a = document.getElementById("a").innerHTML = null
  b = document.getElementById("b").innerHTML = null
  c = document.getElementById("c").innerHTML = null
  d = document.getElementById("d").innerHTML = null
  e = document.getElementById("e").innerHTML = null
  f = document.getElementById("f").innerHTML = null
  g = document.getElementById("g").innerHTML = null
  h = document.getElementById("h").innerHTML = null
  i = document.getElementById("i").innerHTML = null
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
document.getElementById("a").addEventListener("click", function() {
  if (a == null && playerTurn != null) {
    document.getElementById("a").innerHTML = playerTurn;
    a = playerTurn;
    isGameOver();
  }
})

document.getElementById("b").addEventListener("click", function() {
  if (b == null && playerTurn != null) {
    document.getElementById("b").innerHTML = playerTurn;
    b = playerTurn;
    isGameOver();
  }
})

document.getElementById("c").addEventListener("click", function() {
  if (c == null && playerTurn != null) {
    document.getElementById("c").innerHTML = playerTurn;
    c = playerTurn;
    isGameOver();
  }
})

document.getElementById("d").addEventListener("click", function() {
  if (d == null && playerTurn != null) {
    document.getElementById("d").innerHTML = playerTurn;
    d = playerTurn;
    isGameOver();
  }
})

document.getElementById("e").addEventListener("click", function() {
  if (e == null && playerTurn != null) {
    document.getElementById("e").innerHTML = playerTurn;
    e = playerTurn;
    isGameOver();
  }
})

document.getElementById("f").addEventListener("click", function() {
  if (f == null && playerTurn != null) {
    document.getElementById("f").innerHTML = playerTurn;
    f = playerTurn;
    isGameOver();
  }
})

document.getElementById("g").addEventListener("click", function() {
  if (g == null && playerTurn != null) {
    document.getElementById("g").innerHTML = playerTurn;
    g = playerTurn;
    isGameOver();
  }
})

document.getElementById("h").addEventListener("click", function() {
  if (h == null && playerTurn != null) {
    document.getElementById("h").innerHTML = playerTurn;
    h = playerTurn;
    isGameOver();
  }
})

document.getElementById("i").addEventListener("click", function() {
  if (i == null && playerTurn != null) {
    document.getElementById("i").innerHTML = playerTurn;
    i = playerTurn;
    isGameOver();
  }
})
