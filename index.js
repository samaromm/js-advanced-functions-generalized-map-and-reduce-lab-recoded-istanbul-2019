// Add your functions here

function map(arr,fun){
 let arr2=[]
 for(let ele of arr){
   arr2.push(fun(ele))
 }
 return arr2
}

function reduce(arr,fun){
 let result=0
 for(let ele of arr){
   result+=parseInt(fun(ele))
 }
 return result
}
