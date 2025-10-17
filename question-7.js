function toSnakeCase(str){
let snake_case = ''
for(let i = 0;i<str.length;i++){
    const copy = str[i]
    // console.log(copy)
    if(copy === copy.toUpperCase()){
        snake_case += '_' + copy.toLowerCase()
    }else{
        snake_case += copy
    }
}
return snake_case
}
console.log(toSnakeCase('justText'))
