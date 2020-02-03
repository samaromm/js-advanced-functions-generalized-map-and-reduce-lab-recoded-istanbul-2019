// Add your functions here

function map(arr,fun){
 let arr2=[]
 for(let ele of arr){
   arr2.push(fun(ele))
 }
 return arr2
}

/*function toNegative(arr){
  let arr2=[]
  for(let ele of arr){
    arr2.push(ele*-1)
  }
}*/
