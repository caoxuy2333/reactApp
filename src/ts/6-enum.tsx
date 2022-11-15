// 枚举类型

enum dir {
    up,
    down,
    left,
    right
}

console.log('dir', dir);


enum dir1 {
    a = '1',
    b = '2',
    c = '3',
    d = '4'
}

enum dir2 {
    A = '1',
    b = 2,
}

// 枚举值可计算

enum dir3 {
    A = 1,
    B = 2,
    C = A - B,
}

console.log(dir3);

// 定义
const enum dir4 {
    A = '1',
    B = '2'
}
// console.log(dir4); //不能输出dir4
console.log('dir4', dir4.A);  //  '1'
