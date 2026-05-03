 //map , filter , sort functions are used

let num=[1,10,5,8]

num.sort((a,b)=>a-b)

//console.log(num)

const Square=num.map((e=>e*e))
console.log(Square)

const filter=num.filter(num=>num%2===0)
console.log(filter)

const even=Square.filter(x=>x%2===0)
console.log(even)

let array=["suvan",100,50,"welcome"];

//printinf using for of loop
for(ele of array)
    {
        console.log(ele);
    }

// let emp1={
// name: "saanvi",
// age:"10"

// };