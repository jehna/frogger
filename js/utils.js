var Random = function() {
    return Math.random();
}

Random.Range = function(from, to) {
    return Math.random() * (to - from) + from;
}

Random.RangeInt = function(from, to) {
    return Math.floor(this.Range(from, to));
}

Array.prototype.Shuffle = function() {
    var i = 5;
    while(i--) this.sort(function() {
        return 0.5 - Math.random();
    });
}