let score = 33
console.log(typeof score)
// also we can write it as 
console.log(typeof(score))

score = "33"
console.log(typeof score)

score = "33"
let convToNum=Number(score)
console.log(convToNum)

score = "33abc"
convToNum = Number(score)
console.log(convToNum)

score = null
convToNum = Number(score)
console.log(convToNum)

score = undefined
convToNum = Number(score)
console.log(convToNum)

let bul = ""
console.log(Boolean(bul)); 

console.log(1+2+"4") 