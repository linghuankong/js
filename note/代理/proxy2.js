target = {
	foo: 'bar'
};

/*下面来详细讲解关于捕获器的内容*/
const handler = {
	//get捕获器会接收到目标对象，要查询的属性和代理对象三个参数
	//下面我们获取到了参数，可以开始搞事情了
	get(trapTarget,property,receiver){
		console.log(trapTarget === target);
		console.log(property);
		console.log(receiver === target); //代理对象!=== 目标对象(==目标对象)
		console.log(...arguments); //arguments打印get接收到的参数（你不写形参依旧可以接收到）
	}
}


//定义代理(目标对象，处理程序对象（捕获器在里面）)
proxy = new Proxy(target,handler)

//测试
proxy.foo;
//撤销代理(输入参数，Proxy代理对象和处理程序对象,输出代理对象和revoke方法)
const {proxy,revoke} = Proxy.revocable(target,handler);
revoke();
console.log(proxy.foo)
