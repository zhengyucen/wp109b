function count(c) {
    if (c == 1) return 1;
    else {
        for (var j = 2; j < c; j++) {
            if (c % j == 0) return 0;
        }
    }
    return 1;
}
function between(a, b) {
    for (var i = a; i <= b; i++) {
        if (count(i)) {
            console.log(i)
        }
    }
}
between(3, 14)
