Game.classes.enemies = {};

Game.classes.enemies.Enemy = function() {
}
Game.classes.enemies.Enemy.prototype.width = 1;
Game.classes.enemies.Enemy.prototype.$instances = [];

Game.classes.enemies.WaterEnemy = function() {
    
}
Game.classes.enemies.WaterEnemy.prototype = new Game.classes.enemies.Enemy();


Game.classes.enemies.LandEnemy = function() {
    
}
Game.classes.enemies.LandEnemy.prototype = new Game.classes.enemies.Enemy();

Game.classes.enemies.Empty = function() {
    
}
Game.classes.enemies.Empty.prototype = new Game.classes.enemies.LandEnemy();
Game.classes.enemies.Empty.prototype.width = 0;

Game.classes.enemies.Goal = function() {
    
}
Game.classes.enemies.Goal.prototype = new Game.classes.enemies.Empty();

Game.classes.enemies.Car = function(atPosition) {
    this.$instances = [
        $("<div />").addClass("enemy car").css({
            bottom: atPosition * Game.settings.blockWidth
        })
    ];
}
Game.classes.enemies.Car.prototype = new Game.classes.enemies.LandEnemy();
Game.classes.enemies.Car.prototype.width = 2;
