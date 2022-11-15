import * as React from 'react';

// 接口 包含的属性 必选属性 color 可选属性 width
interface SqConfig {
    color: string;
    width?: number;
}

// 入参和出参 都必须使用SqConfig配置的字段
export const createsq = function (con: SqConfig): SqConfig {
    let c = { color: '#ccc' };
    return c;
};


// 只读属性
interface laConfig {
    readonly x: number;
    y: number;
}

export const label = function (con: laConfig): laConfig {
    // con.x = 3;  只读, 不可修改
    con.y = 3;
    return {
        x: 2,
        y: 3
    };
};

label({ x: 1, y: 2 });

// 数组只读属性
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = [1, 2, 3, 4, 5];
a.push(3);
console.log(ro);


// 函数类型  入参 s, n, 出参  [n, s];
interface funConfig {
    (s: string, n: number): [number, string];
}
let mfun: funConfig = function (s: string, n: number) {
    return [n, s];
};
mfun('1', 2);


// 索引类型
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr);


// 类类型
interface clockInter {
    current: Date;
    setTime(d: Date): number;
}
class clock implements clockInter {
    current: Date = new Date();
    setTime(d: Date) { return 1; };
    ufun(s: string) {

    };
}
console.log(clock);
console.log(new clock());
console.log(clock.prototype);


// 指标并集 
interface b1{
    name: string;
}

interface b2{
    code: string;
}

type bb = b1&b2; // bb = interface{name:string; code:string}









