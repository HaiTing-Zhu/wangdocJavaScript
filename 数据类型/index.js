// 六种数据类型
// 数值，字符串，布尔值三种原始类型，最基本到数据类型，不可再细分
// 对象为合成类型，对象由多个原始类型组成
// 对象分为三个子类型：
// object 狭义对象
// array 数组
// function 函数

// typeof 运算符返回一个值的数据类型

console.log(typeof 123); // number

console.log(typeof '123'); // string

console.log(typeof true); // boolean

console.log(typeof {}); // object

console.log(typeof []); // object

console.log(typeof null); // object

console.log(typeof undefined); // undefined

console.log(typeof function() {}); // function

var a = {}

var b = []

// 区分数组和对象使用 instanceof
console.log(a instanceof Array);

console.log(b instanceof Array);