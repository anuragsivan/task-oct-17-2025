// console.log(Math.pow(7,5))

function isAmstrong(num){
    let temp = num,sum= 0
    while(temp>0){
        let value = temp%10
        sum+= value * value * value
        temp = Math.floor(temp /10)
    }
    return sum === num
}
console.log(isAmstrong(153))

