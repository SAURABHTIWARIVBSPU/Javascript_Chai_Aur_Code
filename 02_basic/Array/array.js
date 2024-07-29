//array
const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj"]

//console.log(myArr[1])
//array method
myArr.push(6,7)
//console.log(myArr);
myArr.pop();
//console.log(myArr)
myArr.unshift(9)// ye starting index mey change kar deta hai 0 index par ;
//console.log(myArr);
myArr.shift()
//console.log(myArr)
//console.log(myArr.includes(3));
//console.log(myArr.indexOf(10))// agr elemnt nahi hoga to -1 return kar dega
console.log(myArr)
// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)
//--------------Slice & Splice
console.log("A", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B", myArr)
const myn2 = myArr.splice(1,3)// original array ko manipulate kar deta hai
console.log("C", myArr)

console.log(myn2) 