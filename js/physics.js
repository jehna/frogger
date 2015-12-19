Game.utils.physics = {
    
    CheckCollision : function(x1, x2, w1, w2) {
        if(x1 < x2) return (x2 - x1) < w1;
        return -(x2 - x1) < w2;
    },
    
    $CheckCollision : function(object1, object2) {
        return this.CheckCollision(
            object1.position().left,
            object2.position().left,
            object1.width(),
            object2.width()
        );
    }
}