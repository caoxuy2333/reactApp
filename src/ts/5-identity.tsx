// 泛型

// 传入T 表示数值类型, 适用多个类型
const fx = function <T>(arg: T): T {
    return arg;
};

fx('1');
fx(2);

fx<string>('1');


// 指定数组泛型
const arrfx = function <T>(arg: T[]): T[] {
    let lg = arg.length;
    return [];
};


// 泛型接口
interface fxjk<T> {
    <T>(arg: T): T;
}
function fp<T>(arg: T): T {
    return arg;
}
let fp1: fxjk<string> = fp;

fp1('1');

// 泛型类
class cla<T>{
    str: T;
    strfun: (a: T, b: string) => T;
}











