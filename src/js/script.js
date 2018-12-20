var yellowM; // the Male yellow jacket
var direction;
var nextDirection;
var lives =3;
var health;
var healthSelect;
var timer;
var timerGet;
var crsTimeout;
var thug1Timeout;
var trashTimeout;
var fenceTimeout;
var yellowPosition; // The position of the yellow jacket
var size = 80; // The size of a yellow jacket
var sizeEnemy = 80; // The size of obstacles
var xSquares = 1280 / 80; // Number of square on x axis
var ySquares = 240 / 80; // Number of square on y axis
var speed = 300; // The speed of the game
var bar;
var score;
// var turnInterval; // The periodic call to the turn function
// var bonusInterval; // The periodic call to the addBonus function
// var moveInterval;



oxo.inputs.listenKey('space', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    console.log('game');
    oxo.screens.loadScreen('goal');
  }
});

oxo.inputs.listenKey('enter', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    console.log('game');
    oxo.screens.loadScreen('game', game);
  }
});

oxo.inputs.listenKey('c', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    console.log('game');
    oxo.screens.loadScreen('choice');
  }
});


function game() {
  direction=nextDirection="down";
  oxo.player.setScore(0);
	
  bar = document.getElementById('bar');
  yellowM = document.getElementById('yellowM');
  oxo.animation.setPosition(yellowM, {x: 580, y:500});
  oxo.animation.moveElementWithArrowKeys(yellowM, speed); // Move the character
  healthSelect = document.querySelectorAll(".health");
  crsTimeout = setInterval(addCrs, 3000);
  thug1Timeout = setInterval(addThug1, 2000);
  trashTimeout = setInterval(addTrash, 6000);
  fenceTimeout = setInterval(addFence, 4000);
  
  timer = setInterval(function() {
		oxo.player.addToScore(1);
  }, 1000);
 
  
  
  


  addCrs();
  addThug1();
  addBorder();
  addTrash();
  addFence();
  // move();
  // movetwo();
  
  moveInterval = setInterval(move, 10);
  moveInterval = setInterval(movetwo, 40);
  
};

function addBorder() {
  var borderLeft = oxo.elements.createElement({
    class: 'game__border--left', // optional,
    obstacle: true, // optional,
    styles: { // optional
      transform: 'translate(200px, 0px)'
    },
  });
  var borderRight = oxo.elements.createElement({
    class: 'game__border--right', // optional,
    obstacle: true, // optional,
    styles: { // optional
      transform: 'translate(1080px, 0px)'
    },
  });
  var borderBottom = oxo.elements.createElement({
    class: 'game__border--bottom', // optional,
    obstacle: true, // optional,
    styles: { // optional
      transform: 'translate(0px, 680px)'
    },
  });
}


function addCrs() {
  console.log('crs')
  var crs=oxo.elements.createElement({
    class: 'game__enemy--crs',
    styles: {
      transform:
        'translate(' +
        oxo.utils.getRandomNumber(0,760) +
        'px, ' +
        oxo.utils.getRandomNumber(0,240) +
        'px)',
    },
    appendTo: ".game__street",
  });
    oxo.elements.onCollisionWithElement(bar, crs, function() {
    crs.remove();
  }, false);

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
          oxo.utils.getRandomNumber(0, 760) +
          'px, ' +
          oxo.utils.getRandomNumber(0,240) +
            'px)',
      },
      appendTo: ".game__street",
    });
    oxo.elements.onCollisionWithElement(bar, thug1, function() {
      thug1.remove();
    }, false);

    oxo.elements.onCollisionWithElement(yellowM, thug1, function() {
      // Character is touched by ennemy
      console.log("thug1")
      lives--;
      healthSelect[lives].classList.remove('health');
      thug1.remove();

      console.log("nb vies "+ lives); 
      if (lives === 0){
          oxo.screens.loadScreen('end', end);
          
      }
  }, false)
    

    // setTimeout(addThug1, 3000);
};

function addTrash() {
  console.log('trash')
  var trash=oxo.elements.createElement({
    class: 'game__enemy--trash',
    styles: {
      transform:
        'translate(' +
        oxo.utils.getRandomNumber(0,760) +
        'px, ' +
        oxo.utils.getRandomNumber(0,240) +
        'px)',
    },
    appendTo: ".game__street",
  });
    oxo.elements.onCollisionWithElement(bar, trash, function() {
    trash.remove();
  }, false);

    oxo.elements.onCollisionWithElement(yellowM, trash, function() {
      // Character is touched by ennemy
      console.log("trash");
      //si plus de vie alors => end
      lives--;
      healthSelect[lives].classList.remove('health');
      trash.remove();

      console.log("nb vies "+ lives); 
      if (lives === 0){
          oxo.screens.loadScreen('end', end);

      }
  }, false)
  
    
    // setTimeout(addCrs, 2000);
  };

function addFence() {
  console.log('fence')
  var fence=oxo.elements.createElement({
    class: 'game__enemy--fence',
    styles: {
      transform:
        'translate(' +
        oxo.utils.getRandomNumber(0,900) +
        'px, ' +
        oxo.utils.getRandomNumber(0,240) +
        'px)',
    },
    appendTo: ".game__street",
  });
    oxo.elements.onCollisionWithElement(bar, fence, function() {
    fence.remove();
  }, false);

    oxo.elements.onCollisionWithElement(yellowM, fence, function() {
      // Character is touched by ennemy
      console.log("fence");
      //si plus de vie alors => end
      lives--;
      healthSelect[lives].classList.remove('health');
      fence.remove();

      console.log("nb vies "+ lives); 
      if (lives === 0){
          oxo.screens.loadScreen('end', end);

      }
  }, false)
  
    
    // setTimeout(addCrs, 2000);
  };  
function move() {
  var thug1 = document.querySelectorAll('.game__enemy--thug1');
  var crs = document.querySelectorAll('.game__enemy--crs');
  for (let i = 0; i < crs.length; i++) {
    oxo.animation.move(crs[i], direction, 3); 
  }
  for (let i = 0; i < thug1.length; i++) {
    oxo.animation.move(thug1[i], direction, 3); 
  }
};

function movetwo() {
  var trash = document.querySelectorAll('.game__enemy--trash');
  var fence = document.querySelectorAll('.game__enemy--fence');
  for (let i = 0; i < fence.length; i++) {
    oxo.animation.move(fence[i], direction, 4); 
  }
  for (let i = 0; i < trash.length; i++) {
    oxo.animation.move(trash[i], direction, 4); 
  }
};



function end(){
  console.log('end')
  clearInterval(crsTimeout);
  clearInterval(thug1Timeout);
  clearInterval(fenceTimeout);
  clearInterval(trashTimeout);
 }