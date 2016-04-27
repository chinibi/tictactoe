var letters = ['a','b','c','d','e','f','g','h','i'];
var ids     = document.getElementsByClassName('square');
var turnEl  = document.getElementById('playerTurn');
var resetEl = document.getElementById('reset');
var board;
var winner;
var playerTurn;
var winCombos = [
  '012', '345', '678', // rows
  '036', '147', '258', // columns
  '048', '246'         // diagonals
];

// clear the board, X to move first
function init() {
  board = {};
  for (var i=0; i<letters.length; i++) {
    board[letters[i]] = ids[i].innerHTML = null;
  };
  winner = '';
  playerTurn = 'X';
  turnEl.innerHTML = `${playerTurn} to move`;
}
// start the game on load
init();

// reset button
resetEl.addEventListener('click', init);
resetEl.addEventListener('touch', init);

// game functions
function nextTurn() {
  playerTurn = (playerTurn == 'X' ? 'O' : 'X');
  turnEl.innerHTML = `${playerTurn} to move`;
}


// checks if the three given spaces match
function didThreeMatch(r,s,t) {
  if ((r == s && s == t && r)) {
    return true;
  }
}

// checks if all squares are taken
function isTie() {
  var allOccupied = true;
  for (var key in board) {
    if (!board[key]) allOccupied = false;
  }
  return allOccupied;
}

// checks each row, col, and diag for a winner
function isGameOver() {
  var over = false
  winCombos.forEach((combo) => {
    var r = board[letters[parseInt(combo[0])]],
        s = board[letters[parseInt(combo[1])]],
        t = board[letters[parseInt(combo[2])]];

    if (didThreeMatch(r,s,t)) {
      turnEl.innerHTML = `${playerTurn} has won`;
      playerTurn = null;
      over = true;
    }
    else if (isTie()) {
      turnEl.innerHTML = 'tie game';
      playerTurn = null;
      over = true;
    }
  })
  return over;
}

// make a move if game isn't over and square is empty
function makeMove(event) {
  var that = event.target;
  if (!board[that.id] && playerTurn) {
    that.innerHTML = board[that.id] = playerTurn;
    if (!isGameOver()) nextTurn();
  }
}

for (var i=0; i<ids.length; i++) {
  ids[i].addEventListener('click', makeMove)
  ids[i].addEventListener('touch', makeMove)
}
