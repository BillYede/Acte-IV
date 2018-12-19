var yellowM; // the Male yellow jacket
var direction;
var nextDirection;
var lives =3;
var health;
var healthSelect;
var score =0;
var score
var crsTimeout;
var thug1Timeout;
var yellowPosition; // The position of the yellow jacket
var size = 80; // The size of a yellow jacket
var sizeEnemy = 80; // The size of obstacles
var xSquares = 1280 / 80; // Number of square on x axis
var ySquares = 240 / 80; // Number of square on y axis
var speed = 100; // The speed of the game
// var turnInterval; // The periodic call to the turn function
// var bonusInterval; // The periodic call to the addBonus function
// var moveInterval;


oxo.inputs.listenKey('enter', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    console.log('game');
    oxo.screens.loadScreen('game', game);
  }
});


function game() {
  direction=nextdirection="down";
  oxo.player.setScore(0)
  yellowM = document.getElementById('yellowM');
  oxo.animation.setPosition(yellowM, {x: 580, y:720});
  oxo.animation.moveElementWithArrowKeys(yellowM, speed); // Move the character
  healthSelect = document.querySelectorAll(".health");

  crsTimeout = setInterval(addCrs, 2000);
  thug1Timeout = setInterval(addThug1, 3000);

  addCrs();
  addThug1();
  // move();
  // movetwo();
  
  moveInterval = setInterval(move, 10);
  moveInterval = setInterval(movetwo, 10);
};


function addCrs() {
  console.log('crs')
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
      console.log("crs");
      //si plus de vie alors => end
      lives--;
      healthSelect[lives].classList.remove('health');
      crs.remove();

      console.log("nb vies "+ lives); 
      if (lives === 0){
          oxo.screens.loadScreen('end', end);

      }
  }, false)

  
    
    // setTimeout(addCrs, 2000);
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
      console.log("thug1")
      lives--;
      healthSelect[lives].classList.remove('health');

      console.log("nb vies "+ lives); 
      if (lives === 0){
          oxo.screens.loadScreen('end', end);
          
      }
  }, false)
    

    // setTimeout(addThug1, 3000);
};

function move() {
  var thug1 = document.querySelectorAll('.game__enemy--thug1');
  for (let i = 0; i < thug1.length; i++) {
    oxo.animation.move(thug1[i], direction, 3); 
  }
}

function movetwo() {
  var crs = document.querySelectorAll('.game__enemy--crs');
  for (let i = 0; i < crs.length; i++) {
    oxo.animation.move(crs[i], direction, 3); 
  }
}

function end(){
  console.log('end')
  clearInterval(crsTimeout);
  clearInterval(thug1Timeout);
}

  





    
