function sumOfArguments(...num){
    return num.reduce((a,b)=> a +b,0)
}
console.log(sumOfArguments(1,2,3,4,5,6,7,8,9))