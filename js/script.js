
function runGame() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 150;
    document.body.appendChild(canvas);
  
    var dinosaur = { x: 50, y: 90, width: 50, height: 50, jumping: false };
    var gravity = 1;
    var jumpStrength = -15;
  
    function drawDinosaur() {
      ctx.fillStyle = 'green';
      ctx.fillRect(dinosaur.x, dinosaur.y, dinosaur.width, dinosaur.height);
    }
  
    function jump() {
      if (!dinosaur.jumping) {
        dinosaur.jumping = true;
        dinosaur.y += jumpStrength;
      }
    }
  
    function fall() {
      if (dinosaur.y < 90) {
        dinosaur.y += gravity;
      } else {
        dinosaur.y = 90;
        dinosaur.jumping = false;
      }
    }
  
    function update() {
      fall();
      drawDinosaur();
    }
  
    document.addEventListener('keydown', function(event) {
      if (event.keyCode === 32) {
        jump();
      }
    });
  
    setInterval(update, 1000 / 60);
  }
  
  runGame();
  
  