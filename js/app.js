'use strict'

var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;

    if(this.x > 500){
        this.x = -50;
        this.speed = 50 + Math.floor(Math.random() * 500);
    }

    if(player.x < this.x + 60 && player.x + 60 > this.x && player.y < this.y + 20 &&
        20 + player.y > this.y){
        player.y = 380;
        player.x = 200;
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x, y, speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = "images/char-boy.png";
};

Player.prototype.update =  function(){
    if(this.x <= 0){
        this.x = 0;
    }
    if(this.x >= 400){
        this.x = 400;
    }
    if(this.y >= 400){
        this.y = 400;
    }
    if(this.y <= -20){
        this.y = 400;
    }
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress){
    switch(keyPress){
        case 'left':
            this.x -= this.speed -10;
            break;
        
        case 'right':
            this.x += this.speed - 10;
            break;
        
        case 'up':
            this.y -= this.speed - 25;
            break;
        
        case 'down':
            this.y += this.speed - 25;
            break;
    }
};  

var allEnemies = [];

var enemyPosition = [60, 140, 220];
var enemy;
var player = new Player(200, 400, 50);

enemyPosition.forEach(function(y){
    enemy = new Enemy(0, y, 100 + Math.floor(Math.random() * 500));
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
