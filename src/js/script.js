var yellowM; // the Male yellow jacket
// var yellowF; // the Female yellow jacket
var direction;

var yellowPosition; // The position of the yellow jacket
var size = 80; // The size of a yellow jacket
var sizeEnemy = 80; // The size of obstacles
var xSquares = 1280 / 80; // Number of square on x axis
var ySquares = 240 / 80; // Number of square on y axis
var speed = 100; // The speed of the game
var turnInterval; // The periodic call to the turn function
// var bonusInterval; // The periodic call to the addBonus function


oxo.inputs.listenKey('enter', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    console.log('game');
    oxo.screens.loadScreen('game', game);
  }
});


function game() {
  
  direction= 'down';
  oxo.player.setScore(0)
  yellowM = document.getElementById('yellowM');
  oxo.animation.setPosition(yellowM, {x: 580, y:720});
  oxo.animation.moveElementWithArrowKeys(yellowM, speed); // Move the character
  
  
  addCrs();
  addThug1();
  
  
};



function addCrs() {
  var crs=oxo.elements.createElement({
      class: 'game__enemy--crs',
      styles: {
        transform:
          'translate(' +
          oxo.utils.getRandomNumber(0, xSquares -1) * sizeEnemy +
          'px, ' +
          oxo.utils.getRandomNumber(0, ySquares -1) * sizeEnemy +
          'px)',
        
        
      },
      
    });
  
  
    oxo.elements.onCollisionWithElement(yellowM, crs, function() {
      // Character is touched by ennemy
      console.log("prout")
      });

    setTimeout(addCrs, 2000);
  };

function addThug1() {
  var thug1=oxo.elements.createElement({
      class: 'game__enemy--thug1',
      styles: {
        transform:
          'translate(' +
          oxo.utils.getRandomNumber(0, xSquares -1) * sizeEnemy +
          'px, ' +
          oxo.utils.getRandomNumber(0, ySquares -1) * sizeEnemy +
            'px)',
      },
    });
    oxo.elements.onCollisionWithElement(yellowM, thug1, function() {
      // Character is touched by ennemy
      console.log("prout2")
    });

    setTimeout(addThug1, 3000);
};











  //  function moveDown(){
  //  var ennemy = document.getElementsByClassName('game__enemy--crs');
  //   for (let i = 0; i < game__enemy--crs.length; i++) {
  //    speed = game__enemy--crs[i].dataset.speed;
  //    game__enemy--crs[i].style.transitionDuration = speed+ "s";
  //  }
  





    
