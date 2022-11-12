// 函数
function d() {
    console.log(this);
    this.na = '1';
}
d.prototype.na = '0';
let f = function () {
    console.log(this);
};
f.prototype.sum = 1;

let f1 = () => {
    const a = '1';
    console.log(this);
};
f1.prototype.sum = 2;

class f2 {
    constructor() {
        console.log(this);
    }
    sum = 3;
}
d();
f();
f1();

new f2();



// new function 问题

function Person():any {
    this.firstName = 1;
}
Person.prototype.num = '2';

// let myMother = new Person(); // 错误
let myFather  = new (Person as any)();
console.log(myFather);
console.log(myFather.num);

