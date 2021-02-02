// null 表示空值
// undefined 表示为定义

var a = null

var b = undefined

if (a == b) {
    console.log('null == undefined');
}

if (!a) {
    console.log('null is false');
}

if (!b) {
    console.log('undefined is false');
}

console.log(Number(null));

console.log('null == 0', 5 + null);

console.log(Number(undefined));

console.log('undefined != 0', 5 + undefined);


// 布尔值 boolean

// 下面六个值默认转换成false
// null, undefined, 0, NaN, false, ""或者'' 空字符串

if ('') {
    console.log('进不来的log');
}

if ([]) {
    console.log('空数组对应的布尔值为true');
}

if ({}) {
    console.log('空对象对应的布尔值为true');
}