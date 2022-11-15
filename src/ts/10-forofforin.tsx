//

let l = [1, 2, 3]

for (let i of l) {
    console.log(i, typeof i); // 值 1,2,3
}

for (let j in l) {
    console.log(j, typeof j); // 下标 '0','1','2'
}


let p = {
    a: '2',
    b: '3',
    c: '4'
}

for (let j in p) {
    console.log(j, typeof j); // object-key 'a','b','c'
}
