/*现在，我们考虑线程分支，同样，打印i love you为主程序*/
console.log("i love you")
//这里就是线程的嵌套，就是子线程还有一个子线程
setTimeout(
	()=> {
		console.log("this is the son process");
		setTimeout(
			()=> {
				console.log("this is the son process of process");
			}
			,200)
	}
	,100)
/*我们可以发现，使用setTimeout实现多线程十分困难，固之后我们会讲解在ES6中引进的新多线程类Process*/
