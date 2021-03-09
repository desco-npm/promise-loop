const promiseLoop = require('./')

const list = [ 1, 2, 3, 4, 5, 6, ]
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, }

const fun = (v, k) => Promise.resolve(v % 2 === 0)

promiseLoop(list, fun).then(result => console.log(result))
promiseLoop(obj, fun).then(result => console.log(result))