/*
关于promise的总结：

1. 在代码中，同步一定比异步快执行（setTimeout(异步)一定会先跳过，两个setTimeout会先执行等待短的）

2. Promise的方法:
	①Promise.resolve()（/reject()）：Promise类的静态方法
		返回：resolve(reject)状态的promise对象
	②设p是一个Promise对象:
		1. p.then(onResolved,onRejected);
			输入：两个函数，分别代表p的resolved和rejected状态调用的函数
			返回：一个Promise对象，其状态由调用的那个接收函数决定
		2. p.catch(onRejected);
			输入：一个拒绝函数，只有在p是rejected状态时调用
			性质：一个语法糖，相当于p.then(null,onRejected);
		3. p.finally();
			输入：一个函数
			返回：一个p的复制，与输入的函数没有关系，只与调用对象p有关系
		4. 以上所有函数都是异步函数，
			即
				let p = Promise.resolve()
				p.then(
					()=>console.log(1);
				)
				console.log(2)
				会先输出2，再输出1
3. Promise内部执行函数是同步的。
	即
		let p = new Promise(()=>console.log(1))
		console.log(2)
		会先输出1，再输出2

4. 下面写一段程序，看看内步执行函数和promise.then()的运行机制
*/

//可以看到内部执行函数是同步执行的，.then()是异步执行的
let p0 = new Promise(
	(resolve,reject)=>
		{
			console.log("1");
			resolve();
		}
	);

p0.then(
		()=>{
			console.log("2");
		}
	)

console.log("3");

