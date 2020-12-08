function forLoop(){
  for(let i =1; i<=10; i++){
console.log("For Loop")
}
}

function whileLoop(){
  let i=1;
  while(i<=10){
    i++;
console.log("While Loop");
}
  i=1;
}

function forOfLoop(){
const arr=["Hello","Hi","Wasup","Howdee!","How you doin","Wasgood"];
  for(i of arr){
    console.log(i);
  }
}

function forInLoop(){
  const obj={
    firstName:"John",
    lastName:"Doe",
    address:{
      city:"Somewhere",
      country:"Somewhere else"
    },
    birthday:"2020-12-08"
  }
for(i in obj){
  console.log(i);
}
  }

document.querySelector("#for-loop").addEventListener("click", forLoop);

document.querySelector("#for-of-loop").addEventListener("click",forOfLoop)

document.querySelector("#while-loop").addEventListener("click",whileLoop);;
