
let i:number;
for(i=0;i<=10;i++)
{
    console.log(i);
}

function display():void{
    console.log("welcome to ts")
}

display();


function add(x:number,y:number):number{
    return(x+y);

}

let res:number=add(5,2);
console.log(res);

function multiply(x:number,y:number):number{
    return(x*y);
}

console.log(multiply(2,3));