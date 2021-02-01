// var:声明变量
var a = 1 + 3;

var b = 'abc';

var c = 1

// 声明变量但没赋值，d == undefined
var d

console.log('我是e', e); // undefined
var e = 'abcd'

// 等同于
// var e // 变量提升
// console.log(e);
// e = 'abcd'

// javascript 保留字
// arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield

// 单行注释

/* 
    这是
    多行
    注释
 */

function coundown(n) {
    while (n --> 0) console.log('html注释', n);
}
coundown(3)

// 代码块
{
    var f = 1
}

console.log(f);

// =:赋值表达式；
// ==:相等运算符；
// ===:严格相等运算符；

// if (z = 2) 不报错
// if (2 = z) 报错---常量不能被赋值

// if...else结构
if (e === 'abcd') {
    // 条件满足执行
    console.log(e);
} else {
    // 条件不满足执行
    console.log(a);
}
// switch结构
switch (c) {
    case 0:
        console.log(c);
        break;
    case 2:
        console.log(c);
        break;
    default:
        console.log(c);
}
// 三元运算（简单但if...else可直接用三元）
b === 'abc' ? console.log(b, '表达式1') : console.log(b, '表达式2');
// while循环 (条件为真){执行语句}
while (c < 9) {
    c++
    console.log('while', c);
}
// for循环(初始化表达式; 条件; 递增表达式) {执行语句}
for (var i = 0; i < a; i++) {
    console.log(i, 'for');
}

// break:终止循环
// continue:终止本轮循环

// 标签 label:相当于定位符，用于跳转到程序到任意位置
top:
    for (var j = 0; j < a; j++) {
        if (j === 1) break top;
        console.log('label', j);    
    }
