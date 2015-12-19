Game.classes.Board = function() {
    
    this.$instance = $("<div />").addClass("board").appendTo("body").css({
        height: Game.levels[Game.settings.currentLevel].rows.length * Game.settings.blockWidth
    });
    
    
    /*obstacl = $("<div />").addClass("obstacl").appendTo($board);

    var frogX = 0;
    $(window).click(function() {
        frogX += 10;
        $frog.css({left: frogX});
        else console.log("nope");
    })*/
}