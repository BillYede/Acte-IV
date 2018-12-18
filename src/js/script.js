var direction;
var nextDirection;






oxo.inputs.listenKey('enter', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    console.log('game');
    oxo.screens.loadScreen('game', game);
  }
});

function game() {
  // Init some variables when game starts
  direction = nextDirection = 'right';
  oxo.player.setScore(0);
}