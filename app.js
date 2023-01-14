 /****
  * GAME RULES:
  * 
  * The game has 2 players, playing in rounds
  * In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
  * 
  * But, if the player rolls a 1, all  his ROUND s ore get lost. After that, it's the next player's turn
  * The player can choose to "HOld", which means that his ROUND score gets added to his GLOBAL score. After
  * that, it's the next player's turn 
  * The first player to reach 100 points  on GLOBAL score wins the game
  * 
  * 
  * THINS TO LEARN IN THIS LECTURE
  * 
  * How to create our fundamental game variables;
  * How to generate a random number;
  * How to manipulate the DOM;
  * How to read from the DOM;
  * How to change CSS styles;
  * 
  * The Pig Game
  */


var scores, roundScore, activePlayer, dice, gamePlaying;

init();



// document.querySelector('.dice').style.display = 'none'; // Selecting a class and changing the style component


/***
 * EVENTS
 * 
 * What are events?
 * They are notification sent to notify the code that something happened on the webpage;
 * 
 * Examples: clicking a button, resizing a window, scrolling down or pressing a key;
 * 
 * EVENT Listeners: A function that performs an action based on a certain event. It waits for a specific event
 * to happen.
 * 
 * THINGS TO LEARN FROM THE LECTURE ON EVENT
 * How to set  up an event handler;
 * What a callback function is;
 * What an anonymous function is;
 * Another way to select elements by ID;
 * How to change the image in an  <img> element.
 * 
 * Setting up an event handler involves the following :
 * 1. Selecting the element on which the event would happen
 * 
 */

// function btn() {
  // Do something here 
// }
// btn();
// document.querySelector('.btn--roll').addEventListener('click', btn); 

document.querySelector('.btn--roll').addEventListener('click', function () { //A function to do something can be written in the event listener that function is an anonymous function
  if (gamePlaying) {
    // Finishing Touches
// What a state variable is, how to use it and why
// What is a state variable:
// The state variable tells us the condition of a System, it is used when we want to recall something or
// the state of something;
    
       // Do something here
   // 1. Random number
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';


  // 3. Update the round score IF the rolled number was NOT a 1
  /*Update score and changing active activePlayer;
   Things to learn:
   What the ternary operator is:
   How to add, remove and toggle HTML classes.
*/
  
  if (dice !== 1) {  //NOte the equality operator that performs type coercion include != and ==, while the !== and the === does not perform typoe coercion
    //Add score
    roundScore += dice;
    document.querySelector('#current--' + activePlayer).textContent = roundScore;
  } else {
    //Next player
    nextPlayer();
   }
  
  }

});



/****
 * SETTING UP AN EVENTLISTENER FOR THE HOLD BUTTON
 *  Things to learn 
 * 1. How to use functions to correctly apply the DRY principle
 * 2. How to think about the game logic like a programmer.
 *
 * We would use an anonymous function that is a function without name and can not be reused in another
 * code
 */
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (gamePlaying) {
      // Add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScore;

  // Update the UI
  document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
  
  // Check if player won the game
  if (scores[activePlayer] >= 100) {
    document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
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
    
  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
  

  document.querySelector('.dice').style.display = 'none';
  
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



// Anonymous function is a function that does not have a name and it can not be reused


// dice = Math.floor(Math.random() * 6) + 1;


// Doing DOM Manipulations

// document.querySelector('#current--' + activePlayer).textContent = dice; // The querSelector is used as the setter to set vaules // textContent is used to change the content
// querySelector is a method used for selection an element from the webpage
// document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score--0').textContent; // The querySelector is used as the getter to get values
// console.log(x);


