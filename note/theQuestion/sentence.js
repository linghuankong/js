/*javascript语句*/

//for语句(es6形式)
obj = {a:1, b:2, c:3}
for(let x in obj) {	//对象属性名变量：输出字符串
	console.log(x);
}

console.log("\n");

arr = [2,"2","4",5]
for(let x of arr) { //可迭代对象遍历
	console.log(x);
}

arr.forEach(x=>{console.log(x*3);}) //forEach语句对可迭代对象中的每个元素进行操作
