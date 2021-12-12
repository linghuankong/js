/*
	期约出现的原因就是方变将一个异步操作作为另一个异步操作的回调函数，
	如果使用老方法（callback）将会形成回调地狱
*/

//创建一个新期约,resole,reject是自带的两个参数，用于改变期约的参数
let p1 = new Promise(
		(resolve,reject)=>{
			console.log("the begin");
			resolve(1);
		}
	)
//直接打印期约对象会根据不同状态返回值（待定返回待定状态(pending)，解决resolved返回私有内部值(默认返回undefined)，拒绝reject返回对应拒绝的理由）
setTimeout(console.log,0,p1);//看setTimeout的笔记,p1为传递给console.log的一个参数
