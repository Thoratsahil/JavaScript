/* let n=[23,44,"sahil",44,"sayuu"]
for(let i=0;i<n.length;i++)
console.log("Array",n[i]) */

let num=[11,22,33,44,55]
let s=num.toString()
console.log(s)

let x=num.join("_")
console.log("join mathod",x)

num.pop()
console.log("pop",num)

num.push(66)
console.log("push",num)

let c=num.shift()
console.log(c,num)

let v=num.unshift(99)
console.log(v,num)

console.log(num)

delete num[0]
console.log(num)


num.shift()
console.log(num)

let d=num.slice(1,3)
console.log(d)