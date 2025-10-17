function deepClone(obj){
    return JSON.parse(JSON.stringify(obj))
}
const object = {name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined'],anas:{anaspadu: "paduW",sana: ['deamon','dragin','paduSir']}}
const clone = deepClone(object)
console.log(clone)