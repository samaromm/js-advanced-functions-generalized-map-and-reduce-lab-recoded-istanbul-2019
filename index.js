// Add your functions here

function map(arr,fun){
 let arr2=[]
 for(let ele in arr){
   arr2.push(fun(arr))
 }
 return arr2
}

/*function toNegative(arr){
  let arr2=[]
  for(let ele of arr){
    arr2.push(ele*-1)
  }
}*/
