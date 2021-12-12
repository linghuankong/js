/*对象和类*/

//直接定义对象
let LiHua = {
	//对象属性定义
	age: 12,
	height: 145,
	weight: 43,
	//对象方法定义(Es6)
	grow(){
		this.age+=1;
		[this.height,this.weight] = [this.height,this.weight].map(x=>x+1);
	}
}
console.log("李华的年龄是：",LiHua.age,"李华的身高和体重分别是：",LiHua.height,',',LiHua.weight);
console.log("过了一年后:")
LiHua.grow()
console.log("李华的年龄是：",LiHua.age,"李华的身高和体重分别是：",LiHua.height,',',LiHua.weight);
//对象继承或真复制(Object.assign方法)
let person1 = {first:"1", second:"1", third:"1"};
let person2 = {first:"3" , third:"2"};
let person3 = Object.assign({},person1,person2); //同名时，下替上
console.log(person3);


//定义类，然后定义对象
class Person{
	test = 1
	//构造器，相当于python中的__init__()函数，设置专属于生成变量的静态变量（即改变不会对其他变量产生影响）
	constructor(age,height,weight){
		this.age = age;
		this.height = height;
		this.weight = weight;
	}
	//静态方法：属于类自己的方法
	static printTest(){
		console.log(test);
	}
	//原型方法：只有对象可以调用
	printValue(){
		console.log(this.age);
		console.log(this.height);
		console.log(this.weight);
	}
};

let LiLei = new Person(11,120,35); //用new关键子实例化一个人，李雷
console.log(LiLei);
console.log(typeof(Person)); //不使用new关键字，Person相当与一个方法