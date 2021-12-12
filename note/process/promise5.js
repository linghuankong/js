/*异步的实际解释：可以看作先执行一部分，再执行一部分*/
// promise.then.then.catch 这一部分是同步的，但与其余部分代码是异步的，其可以将有需求关系的代码变为同步，没有需求关系的代码设置为异步
// promise状态改变不可逆，即rejected不可变为resolved或其他
/*promise的实例方法*/

/*
1.Promise.prototype.then() Promise对象原型的then()函数
	这个 then()方法接收最多 两个参数：onResolved 处理程序和 onRejected 处理程序。这两个参数都是可选的，如果提供的话，
	则会在期约分别进入“兑现”和“拒绝”状态时执行。
*/

const onResolved = () => console.log("It is onResolved!");
//Promise.resolve()方法可以接收任意参数作为解决响应值
const onResolved1 = () => Promise.resolve("ok");
const onRejected = () => console.log("It is onRejected!");
//Promise.reject()方法可以接收信息作为拒绝理由并转为拒绝状态，或可以通过throw关键字进入reject状态
const onRejected1 = 
	() =>{
		try{
			throw Error("this is reject!"); //抛出一个错误,这里用reject(Error(".."))不会抛出
		}catch(e){
			console.log(e);
		}
	} 

p1 = new Promise((resolve,reject) => setTimeout(resolve,1000))
p2 = new Promise((resolve,reject) => setTimeout(reject,2000))

//.then()会默认返回一个promise对象，并用默认用resolve()进行包装(使用throw抛出异常可以该为返回reject状态的promise)
p3 = p1.then(()=>onResolved(),
		()=>onRejected())
p4 = p2.then(()=>onResolved(),
		()=>onRejected())

p5 = p1.then(()=>onResolved1(),
		()=>onRejected())
p6 = p2.then(()=>onResolved(),
		()=>onRejected1())

console.log(p1,p2,p3,p4,p5,p6)
setTimeout(console.log,3000,p1,p2,p3,p4,p5,p6)

//.finally()继承父promise对象的状态
console.log("-".repeat(50));
let p7 = Promise.resolve(1)
console.log(p7.finally(()=>Promise.resolve("ok")),1) //直接用console打印会返回pending状态，这是因为Promise内部构造函数与外部是异步
setTimeout(console.log,0,p7.finally(()=>Promise.resolve("ok"))) //使用setTimeout使finally和p7中resolve同步
console.log(p7)