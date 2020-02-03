// Add your functions here

function map(arr,fun){
  fun(arr)
}

function toNegative(arr){
  let arr2=[]
  for(let ele of arr){
    arr2.push(ele*-1)
  }
}

map(toNegative)