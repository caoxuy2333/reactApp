function sealed() {
    console.log('zsq', 1)
}


namespace Vol {
    function f() {
        console.log('f()')
        return function (a: object, b: string, d: PropertyDescriptor) {
            console.log('f(): reject', a, b, d)
            // a.setQ('2')
        }
    }
    function g() {
        console.log('g()')
        return function () {
            console.log('g():rject')
        }
    }

    class cs {
        q ='1';
        setQ(v: string){
            this.q = v;
        }
        @f()
        method(s:number) {
            console.log('vol', this)
        }
    }
    let c = new cs();
    console.log(c);
    console.log(c.method(1))
    c.setQ('2')
    console.log('setq=>', c);
}
