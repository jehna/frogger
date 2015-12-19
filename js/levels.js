Game.classes.Level = function(name, rows) {
    this.name = name;
    this.rows = [];
    
    for(var i = 0; i < rows.length; i++) {
        this.rows.push(new rows[i](i));
    }
}
Game.classes.Level.prototype.Start = function() {
    
    for(var i = 0; i < this.rows.length; i++) {
        for(var j = 0; j < this.rows[i].$instances.length; j++) {
            var $instance = this.rows[i].$instances[j];
            $instance.appendTo(Game.objects.board.$instance);
        }
    }
    
}

Game.levels = [
    new Game.classes.Level("First", [
        Game.classes.enemies.Empty,
        Game.classes.enemies.Car,
        Game.classes.enemies.Car,
        Game.classes.enemies.Car,
        Game.classes.enemies.Goal
    ])
]