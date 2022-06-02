let arr = [10,20,30,40]
let [a, ...x] = arr
//console.log(a,x)

let obj = {a:10, b:20, c:30, d:40}
let {c:h, ...resto} = obj
console.log(h, resto)