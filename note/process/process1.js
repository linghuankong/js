/*比如主线程我要打印i love you,但顺便要打印1到十万*/
//法一：这种方法，主线程就会延迟
	// for(let x=0;x<=1000000;x++){
	// 	console.log(x);
	// }
	// console.log("i love you")
//法二（用异步）：这方法，主线程不会被堵住(下面是只有一个单额外线程(即没有线程分支)的异步)
console.log("i dont love you")
console.log("i love you")
setTimeout(
	()=>{
		for(let x=9;x<=100000;x++) console.log(x);
	}
	,2)
setTimeout(
	()=>{
		for(let x=0;x<10000;x++) console.log("a");
	}
	,1)

console.log("---------------------test---------------------")
setTimeout(()=>console.log("1"),0) //看到计时器先跳过
for(let i=1; i<1000000; i++){
	//在这里执行时，计时器时间已经到了，但是主进程被占了，固定时器函数等待所有要循环完后才能打印1 
	console.log("2"); 
}
