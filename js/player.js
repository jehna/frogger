Game.classes.Player = function() {
    
    this.$instance = $("<div />").addClass("frog").appendTo(Game.objects.board.$instance);
}
Game.classes.Player.prototype.Update = function() {
    
    var currentRow = Game.levels[Game.settings.currentLevel].rows[this.y];
    
    if(currentRow instanceof Game.classes.enemies.Goal) {
        Game.Over(true);
        return;
    }
    
    var enemies = currentRow.$instances;

    for(var i = 0; i < enemies.length; i++) {
        var $enemy = enemies[i];
        if(currentRow instanceof Game.classes.enemies.LandEnemy) {
            // We travel on land, so we die by touching enemies
            if(Game.utils.physics.$CheckCollision(this.$instance, $enemy)) Game.Over(false);
        } else {
            // We travel by water, so "enemy" is actually something that keeps us floating
            if(!Game.utils.physics.$CheckCollision(this.$instance, $enemy)) Game.Over(false);
        }
    }
}
Game.classes.Player.prototype.x = 0;
Game.classes.Player.prototype.y = 0;

Game.classes.Player.prototype.Move = function(x, y) {
    if(Game.isOver) return;
    
    this.x += x;
    this.y += y;
    
    if(this.x < 0) {
        console.log("Can't go there");
        this.x = 0;
    }
    if(this.y < 0) {
        console.log("Can't go there");
        this.y = 0;
    }
    
    this.$instance.css({
        left: this.x * Game.settings.blockWidth,
        bottom: this.y * Game.settings.blockWidth
    });
    
    Game.Update();
}