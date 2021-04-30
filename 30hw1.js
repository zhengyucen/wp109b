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
    dot(v2) {
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
console.log("x.neg(x)=", na)
var b = x.add(na)
console.log("x.add(x)=", b)
var t = x.dot(x)
console.log("x.dot(x)=", t)