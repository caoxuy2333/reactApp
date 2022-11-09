import * as React from "react";

// 布尔值
const isDone: boolean = false;

// 数字
const num: number = -1.3;

// 字符串
const str: string = 'hello';

// 数组
const arr: Array<number> = [1, 2, 3, 4];

// 元组
const yz: [string, number] = ['1', 2];

// 枚举
enum Color { red = 'a', green = 'b', blue = 'c' }
const c: Color = Color.green;

enum Addr { gz, sh, k = 9, p = 9, o = 9 }
let l = Addr[9];
console.log(l);

// void -- 返回void 表示没有任何类型 undefined / null
export const vo = function (): void {
    return;
};

// undefined  null
const un: undefined = null;
const nu: null = undefined;

// Never  返回无法到达的结果
export const ne =function(): never{
    throw new Error('');
};

// Object
export const obj = function(): object{
    return {};
};

export const View = function () {
    console.log(arr);
    console.log(yz);
    console.log(c);
    return <div>{isDone ? num : str}</div>;
};


export const Temp = function () {
    return <div>
        {Color.red}
    </div>;
};

