class Vector {
    constructor(array) {
        this.a = array
    }
    add(y) {
        var r = []
        var x = this
        for (var i = 0; i < x.a.length; i++) {
            r[i] = x.a[i] + y.a[i]
        }
        return new Vector(r)
    }
    sub(y) {
        var r = 0;
        var x = this
        for (var i = 0; i < a.x.length; i++) {
            r = x.a[i] - y.a[i]
        }
    }
    dot(y) {
        var r = 0;
        var x = this
        for (var i = 0; i < x.a.length; i++) {
            r += x.a[i] * x.a[i]
        }
        return r
    }
    neg() {
        var r = []
        var x = this
        for (var i = 0; i < x.a.length; i++) {
            r[i] = -x.a[i]
        }
        return new Vector(r)
    }
}
var x = new Vector([1, 2, 3])
var na = x.neg()
var b = x.add(na)
var t = x.dot(x)
var y = new Vector([1, 1, 1])
console.log("x.add(x)=", b)
console.log("x.neg(x)=", na)
console.log("x.dot(x)=", t)