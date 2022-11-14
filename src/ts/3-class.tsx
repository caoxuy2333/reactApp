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
    private _code: string = '2'; // 私有的
    protected id: number = 3; // 私有的, 但能在派生类访问
    readonly per: string; // 只读属性, 只能在声明时或构造函数里初始化
    constructor(code: string) {
        this.code = code;
        this.per = '4';
    }
    // 获取私有值
    get code() {
        // this.per  ='5'; // 错误的, 只读属性不能赋值\
        return this._code;
    }
    //
    set code(val: string) {
        this._code = val;
    }
}
class W extends Q {
    constructor(c: string) {
        super('30');
    }
    max(a: number, b: number): boolean {
        console.log(this);
        console.log(this.name);
        // console.log(this._code); 错误的 私有值不可获取
        console.log(this.code); // 获取私有值
        console.log(this.id);
        return a > b;
    }
}

let w = new W('20');
w.max(1, 2);


// 静态属性 static
class P {
    static point: object = { x: 0, y: 0 };
    getPoint() {
        return P.point;
    }
}

console.log(P.point); // 不用实例化即可访问
P.point = { x: 1, y: 2 };
let poi = new P();
console.log(poi);
console.log(poi.getPoint());


// 抽象类 不被实例化
abstract class C {
    gener() {
        return 1;
    }
    abstract pri(): void; // 必须在派生类中实现
}
class D extends C {
    gener() {
        return 2;
    }
    pri(): string { // 必须实现抽象类中派生类的方法
        return '3';
    }
}

let ds = new D();
console.log(ds.gener());
console.log(ds.pri());


// 类当接口使用
class JK {
    x: number;
    y: number;
}
interface JKL extends JK {
    z: number;
}
let jk: JKL = { x: 1, y: 2, z: 3 };