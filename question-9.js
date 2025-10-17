function removeDuplicates(str){
    return [...new Set(str.toLowerCase().split(''))].join('')
}
console.log(removeDuplicates('System'))
console.log(removeDuplicates('Apple'))