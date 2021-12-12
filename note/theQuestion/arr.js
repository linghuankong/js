/*arr方法*/
let arr = [3,4,5,6,7];


//找到符合条件的一个元素
let [value,valueIndex] = [arr.find(x => x>=3),arr.findIndex(x => x>=3)];
console.log(value,valueIndex);
//map方法
let arr1 = arr.map(x => x*3)
console.log("arr1的类型是：",arr1)
//数组拼接
console.log(typeof(arr+arr1)) //用+拼接得到的是字符串
arr2 = [...arr,...arr1]
console.log("arr和arr1拼接是：",arr2)
