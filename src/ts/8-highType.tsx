// 高级类型


// 交叉类型
function extend<T, U>(first: T, second: U): T & U {
    let res: T & U;
    return res;
}

class Person1 {
    public name: string;
    constructor(name: string) {

        this.name = name;
    }
    run() { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
let jim = extend(new Person1("Jim"), new ConsoleLogger());
let n = jim.name;
jim.log();