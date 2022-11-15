// 兼容测试

interface N {
    name: string;
    code?: string;
}

let x: N;
console.log(x);
x = { name: '1' };

console.log(x);
x = { name: '1', code: '2' };

function green(arg: N) {
    return arg.name;
}






















