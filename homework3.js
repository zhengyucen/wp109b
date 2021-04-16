function count(a, b) {
    for (var i = a; i <= b; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) i++
        }
        console.log(i);
    }
}
count(1, 9)