// 模块

export interface sv {
    isa(s: string): string;
}

export class A implements sv {
    isa(s: string): string {
        return '';
    }
}

export const B = '1';

const c = '2'
const d = '3' // 重命名为 e

export { c, d as e }

const f = '4';
export default f;

import Zip from './8-highType';

// let zip  = require('./9-symbol')

// console.log(typeof Zip)
// console.log(zip)
console.log(111111111111);
declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;
require(['./9-symbol'], (re: any) => {
    console.log('执行完symbol的代码后返回', '在react渲染后执行')
    console.log(re, 22222222222222222222);
})




