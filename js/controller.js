Game.classes.Controller = function() {
    
    $(window).on("keypress", function(e) {
        var preventDefault = true;
        switch(e.keyCode || e.charCode) {
            case 119:
                // Up
                Game.objects.player.Move(0,1);
                break;
            case 97:
                // left
                Game.objects.player.Move(-1,0);
                break;
            case 115:
                // down
                Game.objects.player.Move(0,-1);
                break;
            case 100:
                // right
                Game.objects.player.Move(1,0);
                break;
            default:
                preventDefault = false;
                break;
        }
        
        if(preventDefault) e.preventDefault();
    });
    
}