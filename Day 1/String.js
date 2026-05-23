// function OddOrEven(){
//     for(let num=0;num<50;num++)
//     if(num%2===0){
//         console.log("the number is Even", +num)
//     }
//     else if(num%2!=0){
//     console.log("The number is Odd", +num)
//     }
// }

//OddOrEven();



let str="hello"
//console.log(str.slice(1,3))

//console.log(str.substring(1,3))

function sumArray(arr) {
 let max=arr[0];
 for(let i=0;i<arr.length;i++){
if(arr[i]>max){
max=arr[i];
}


 }
return max
}

console.log(sumArray([1,2,3,4]))


function rev(str){
rev=""
for(let i=str.length-1;i>=0;i--){
    rev+=str.charAt(i)
}

return rev

}

console.log(rev("madam"))


function containsWord(str, word) {
  return str.includes(word);
}

console.log(containsWord('welcome to js','welcome'))