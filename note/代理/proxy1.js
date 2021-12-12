//先说结论：捕获器加反射实际上就是为对应目标对象的操作(比如获取属性)添加新操作的方法,有基础直接调到proxy3



/*代理对象Proxy相当与当前对象加上捕获器，其构造函数参数为当前对象和handler*/
//捕获器是用来检测对代理的操作，并替换为新的操作，一般加入在handler参数(一个对象)中
const target = {
	foo: 'bar'
}

const handler = {
	get(){
		console.log("w r n x r");
	}
}

const proxy = new Proxy(target,handler)

console.log(target.foo)
//只要发生在proxy的操作，就会返回与之绑定的get()捕获器对应的方法
console.log(proxy.__proto__)
console.log(proxy.prototype)
console.log(proxy.foo)
//测试
console.log("-".repeat(100))
console.log(proxy)