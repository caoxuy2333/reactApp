class A {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(a: number, b: number) {
        console.log(a + b);
    }
}

class B extends A {
    constructor(name: string) {
        super(name);
    };
    move(c: number, d: number) {
        super.move(c, d);
    }
}

let faster = new A('1');
let child = new B('2');
console.log(faster);
console.log(child);
child.move(1,2);









