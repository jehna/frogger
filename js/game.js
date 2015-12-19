

var Game = {
    
    Start : function(num) {
        
        Game.objects.board = new Game.classes.Board();
        Game.objects.player = new Game.classes.Player();
        Game.objects.controller = new Game.classes.Controller();
        
        Game.levels[Game.settings.currentLevel].Start();
    },
    
    Over : function(winning) {
        if(winning) {
            console.log("winning");
            $("body").css({background: "#0F0"});
        } else {
            console.log("you fail");
            $("body").css({background: "#F00"});
        }
        this.isOver = true;
    },
    
    Update : function() {
        if(this.isOver) return;
        Game.objects.player.Update();
    },
    
    objects : {},
    utils : {},
    classes : {},
    settings : {
        blockWidth: 100,
        currentLevel : 0
    },
    levels : [
    ],
    isOver : false
}

$(Game.Start);