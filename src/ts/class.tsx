class A {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(a: number, b: number) {
        console.log(a + b, this.name);
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
child.move(1, 2);


// 公有, 私有

class Q {
    public name: string = '1'; // 共有的
    private code: string = '2'; // 私有的
    protected id: number = 3; // 私有的, 但能在派生类访问
    // 获取私有值
    getCo() {
        return this.code;
    }
}
class W extends Q {
    max(a: number, b: number) {
        console.log(this);
        console.log(this.name);
        // console.log(this.code); 错误的
        console.log(this.getCo()); // 获取私有值
        console.log(this.id);
    }
}

let w = new W();
w.max(1, 2);



