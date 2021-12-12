//回调函数(一个函数参数)
let process3 = (value,callback) =>{
	setTimeout(() => callback(value),500)
};
let callback = (value) => console.log(value*2)
process3(value=3,callback=callback);

setTimeout(() => console.log("-".repeat(20)),600);
//失败处理（两个函数参数）
let process4 = (value,success,failure) =>{
	setTimeout(
		() => {
			try{
				if(typeof(value) != 'number'){
					throw 'Must number argument!'; //throw:函数中的break
				}
				success(value);
			}catch(e){
				failure(e);
			}
		}
		,1000)
};
let success = (value) => console.log(`success ${value}`);
let failure = (e) => console.log(`failure ${e}`);
process4(value=3,success=success,failure=failure);

//下面我们来介绍期约process