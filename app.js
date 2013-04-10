var turn = true;
var xCurPos, yCurPos, xNewPos, yNewPos, tempXPos, tempYPos;

var board = 
[ ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r']];

var showBoard = function(){
  console.log('\n\n' + board.join('\n') + '\n\n');  
};

var move = function(){
  if(turn){
    console.log("Your move WHITE");
    makeMove();
    turn = false;
  } else {
    console.log("Your move BLACK");
    makeMove();
    turn = true;
  }
};

var makeMove = function () {
  // request moves
  xCurPos =  parseInt(prompt("PIECE to move, ROW (0-7): "), 10);
  if(xCurPos){
    yCurPos = parseInt(prompt("PIECE to move, COLUMN (0-7): "), 10);
    
    //tag current position with asterisk and show on board
    //board[xCurPos][yCurPos] = board[xCurPos][yCurPos] + "*";
    //showBoard();
  }

  if(xCurPos && yCurPos){
    xNewPos = tempXPos = parseInt(prompt("WHERE to move, ROW (0-7): "), 10);
  yNewPos = tempYPos = parseInt(prompt("WHERE to move, COLUMN (0-7): "), 10);
    
    //remove asterisk tag
  }
  // if positions are entered then move piece
  if(xCurPos && yCurPos && xNewPos && yNewPos){
    board[xNewPos][yNewPos] = board[xCurPos][yCurPos];
    board[xCurPos][yCurPos] = ' ';
  }
};

// testing more than 1 move
for(var i = 0; i < 2; i++){
  showBoard();
  move();
  showBoard();
}