/*****
 * 
 * YOUR 3 CHALLENGES
 * Change the game to follow these rules:
 * 
 * 1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
 *  (Hint: Always save the previous dice roll in a separate variable)
 * 
 * 2. Add an input field to the HTML where players can set the winning score, so that they can change the 
 * predefined score to  100. (Hint: you can read that value with the .value property in JavaScript. This is a
 * good opportunity to use google to figure this out :)
 * 
 * 3. Add another dice to the game, so that there are two dices now. The player looses his current score
 * when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS
 * code for the first one.)
 */

var scores, roundScore, activePlayer, dice, gamePlaying;

init();

var lastDice;
var winningScore;


document.querySelector('.btn--roll').addEventListener('click', function () { //A function to do something can be written in the event listener that function is an anonymous function
  if (gamePlaying) {
         // Do something here
   // 1. Random number
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
  document.getElementById('dice-1').style.display = 'block';
  document.getElementById('dice-2').style.display = 'block';
 document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
 document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
  //3. Update the round score If the rolled number was NOT a 1
    if (dice1 !== 1 && dice2 !== 1) {
      // Add score 
      roundScore += dice1 + dice2;
      document.querySelector('#current--' + activePlayer).textContent = roundScore;
    } else {
      //Next player
      nextPlayer();
    }
//   if (dice === 6 && lastDice === 6) {
//     //Player looses score
//     scores[activePlayer] = 0;
//     document.querySelector('#score--' + activePlayer).textContent = '0';
//     nextPlayer();
//  } else if (dice !== 1) {  //NOte the equality operator that performs type coercion include != and ==, while the !== and the === does not perform typoe coercion
//     //Add score
//     roundScore += dice;
//     document.querySelector('#current--' + activePlayer).textContent = roundScore;
//   } else {
//     //Next player
//     nextPlayer();
//    }
   
//    lastDice = dice;
  }

});


document.querySelector('.btn--hold').addEventListener('click', function () {
  if (gamePlaying) {
      // Add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScore;

  // Update the UI
  document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
  
    var input = document.querySelector('.final-score').value;
    // console.log(input);

    // Undefined, O, null or "" are COERCED to false;
    // Anything else is coerced to true
  if (input) {
      winningScore = input;
  } else {
      winningScore = 100;

  }
    
  // Check if player won the game
  if (scores[activePlayer] >= winningScore) {
    document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
    document.querySelector('.player--' + activePlayer).classList.add('Winner');
    document.querySelector('.player--' + activePlayer).classList.remove('active');
    gamePlaying = false;
  } else {
    // Next nextPlayer
    nextPlayer();
      }
    }
});

function nextPlayer() {
   //Next player
   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('active');
    document.querySelector('.player--1').classList.toggle('active');
  
   // document.querySelector('.player--0').classList.remove('active');
    // document.querySelector('.player--1').classList.add('active');
    
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none'; 
}

document.querySelector('.btn--new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
  

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
  
  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 2';
  document.querySelector('.player--0').classList.remove('winner');
  document.querySelector('.player--1').classList.remove('winner');
  document.querySelector('.player--0').classList.remove('active');
  document.querySelector('.player--1').classList.remove('active');
  document.querySelector('.player--0').classList.add('active');
}

