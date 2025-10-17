function numberInText(num){
    if (num ===0){
        return "zero"
    }
    const ones =["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    const tens =["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    
    function belowHundred(n){
        return n < 20 ?ones[n] : (tens[Math.floor(n/10)] + (n%10 ? " " + ones[n % 10]: ""))
    }
    function belowThousand(n){
        if(n<100){
        return belowHundred(n)
        }
        let word = ones[Math.floor(n / 100)] + " hundred"
        if(n%100) word += " and " + belowHundred(n % 100)
            return word
    }
    let crore = Math.floor(num / 10000000)
    num %= 10000000
    let lakh = Math.floor(num / 100000)
    num %= 100000
    let thousand = Math.floor(num / 1000)
    num %= 1000


    let Count = []
    if (crore) Count.push(belowThousand(crore) + " crore")
        if (lakh) Count.push(belowThousand(lakh) + " lakh")
            if (thousand) Count.push(belowThousand(thousand) + " thousand")
                    if (num) Count.push(belowThousand(num))
                        return Count.join(" ").trim()
}
console.log(numberInText(99))       
console.log(numberInText(4578))      
console.log(numberInText(5164456))    
console.log(numberInText(123))      
console.log(numberInText(9893221))  
