// let a= [1,2,3,4,5,6]
// let b = ['a','b','c']
// a.splice(2,3,...b)
// console.log(a)


const arr1 = [1,2,3,9,10]
const arr2 = [4,5,6,7,8]
function arrayAtPosition(arr1,arr2,index){
    arr1.splice(index,0,...arr2)
    return arr1
}

console.log("Array-1",arr1)
console.log("Array-2", arr2)
console.log(arrayAtPosition(arr1,arr2,3))
console.log("Updated Array:",arr1)



