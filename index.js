// Add your functions here

function map(arr,fun){
 let arr2=[]
 for(let ele of arr){
   arr2.push(fun(ele))
 }
 return arr2
}

function reduce(arr,fun, start=0){
 let result=start
 for(let a of arr){
 result+=fun(a,)
 }
 return result
}
