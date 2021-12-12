//反射API：即Reflect 它反射会与捕获到操作相同的操作，并且每个捕获器都有对应的Reflect
//我们用反射，可以用少量的代码为原本操作添加新的操作
const target = {
	foo: 'bar'
};
const handler = {
	get(){
		console.log("YOU GET IT!");
		return Reflect.get(...arguments);
	}
};
const proxy = new Proxy(target,handler);

//测试
console.log(proxy.foo)