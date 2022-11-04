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
enum Color { red='a', green='b', blue='c' }
const c: Color = Color.green;

export const View = function () {
    console.log(arr);
    console.log(yz);
    console.log(c);
    return <div>{isDone ? num : str}</div>;
};

