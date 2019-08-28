/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/


/*
// ** First DOM Access and Manipulation

// *Create fundamental game variables*
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0; // 0=player1, 1=player2

// *Generate a random number*
// dice = Math.floor(Math.random() * 6) + 1;

// *Maninpulate the DOM*
//document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// *Read from the DOM*
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// *Another way to select elements by ID*
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// *Change CSS styles*
document.querySelector('.dice').style.display = 'none';
*/

var scores, roundScore, activePlayer, gameState, previousRoll, previousRoll2, goal; // if gamestate is true, then game is playing, if not, then false

init();

// ** Events and Event Handling

// *Set up an event handler*
// function btn(){
//     // do something here
// }
// btn();
// document.querySelector('.btn-roll').addEventListener('click', btn); // 2nd parameter is the *Callback function*

// *Anonymous function*
// Event listener for the button roll
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gameState){
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        // 2. Display result
        var diceDOM = document.querySelector('.dice');
        var diceDOM2 = document.querySelector('.dice2');
        diceDOM.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png'; // *Change the image in <img> element*
        diceDOM2.src = 'dice-' + dice2 + '.png';

        // 4. **Coding challenge 1 (See below)**
        if(previousRoll === 6 && dice === 6){ 
            // Lose current score and round score of active player
            scores[activePlayer] = 0;
            roundScore = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            document.getElementById('current-' + activePlayer).textContent = '0';
            console.log('Player ' + (activePlayer + 1) + ' rolled 6 twice!');
            nextPlayer();
        } else{
            // Store the previous roll 
            previousRoll = dice;
            console.log('Previous roll of 1st dice: ' + previousRoll);
        }

        if(previousRoll2 === 6 && dice2 === 6){ 
            // Lose current score and round score of active player
            scores[activePlayer] = 0;
            roundScore = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            document.getElementById('current-' + activePlayer).textContent = '0';
            console.log('Player ' + (activePlayer + 1) + ' rolled 6 twice!');
            nextPlayer();
        } else{
            // Store the previous roll 
            previousRoll2 = dice2;
            console.log('Previous roll of 2nd dice: ' + previousRoll2);
        }

        // 3. Update the round score is the rolled number is not a 1
        if(dice !== 1 && dice2 !== 1){
            // Add score
            roundScore += (dice + dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore; // Display the round score
        } else{
            // Next player
            nextPlayer();
        }
    }
});

// Event listener for the hold button
document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gameState){
        // Add the current score to the global score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if the player won the game
        if(scores[activePlayer] >= goal){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameState = false;
        } else{
            // Next player
            nextPlayer();
        }
    }
});

// **Coding challenge 2 (See below)**
document.querySelector('.btn-change').addEventListener('click', function(){
    if(gameState){
        goal = prompt('Set a new score to reach');
        if(goal == null || goal == ""){
            goal = 100;
        }
        document.querySelector('.goal').textContent = goal;
    }
});

// Event listener for the new game button
document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){
     // Next player
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // *Ternary operator*
     roundScore = 0;
     previousRoll = 0;
     previousRoll2 = 0;
     
     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     // *Add, remove, and toggle HTML classes*
     // document.querySelector('.player-0-panel').classList.remove('active');
     // document.querySelector('.player-1-panel').classList.add('active');
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');

     // Hide the dice
     document.querySelector('.dice').style.display = 'none';
     document.querySelector('.dice2').style.display = 'none';
}

function init(){
    scores = [0, 0];
    roundScore = 0;
    goal = 100;
    previousRoll = 0;
    previousRoll2 = 0;
    activePlayer = 0; // 0=player1, 1=player2

    // *Another way to select elements by ID*
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // *Change CSS styles*
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    // Change the names
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    // Remove winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    // First player
    document.querySelector('.player-0-panel').classList.add('active');

    // Start the game by changing the state
    gameState = true;
}


// *********** Coding challenge 1 **********
// A player loses their ENTIRE score when they roll two 6's in a row. Switch players when that happens

// *********** Coding challege 2 ***********
// Add an input field to change the score to reach. (Used a button here)

// ********** Coding challenge 3 **********
// Add another dice to the game