let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result =document.getElementById('result');
let one = 1;
let two = Math.floor((Math.random() * 10) + 1);
let res = one * two;
// clawa 
let c1 = document.getElementById('1');
let c2 = document.getElementById('2');
let c3 = document.getElementById('3');
let c4 = document.getElementById('4');
let c5 = document.getElementById('5');
let c6 = document.getElementById('6');
let c7 = document.getElementById('7');
let c8 = document.getElementById('8');
let c9 = document.getElementById('9');
let c0 = document.getElementById('0');
let back = document.getElementById('back');
// function
  function Rondom(num) {
      num  = Math.floor((Math.random() * 10) + 1);
      return  num; 
  }

num1.innerText =  `${one}`;
num2.innerText =  `${two}`;
result.innerText = `...`;
c1.addEventListener("click",function(){
    result.innerText = `1`;
});
c2.addEventListener("click",function(){
    result.innerText = `2`;
});
c3.addEventListener("click",function(){
    result.innerText = `3`;
});
c4.addEventListener("click",function(){
    result.innerText = `4`;
});
c5.addEventListener("click",function(){
    result.innerText = `5`;
});
c6.addEventListener("click",function(){
    result.innerText = `6`;
});
c7.addEventListener("click",function(){
    result.innerText = `7`;
});
c8.addEventListener("click",function(){
    result.innerText = `8`;
});
c9.addEventListener("click",function(){
    result.innerText = `9`;
});
c0.addEventListener("click",function(){
    result.innerText = `0`;
});
back.addEventListener("click",function(){
    result.innerText = `back`;
});

document.getElementById("equale").addEventListener("click", function(){
    console.log(`${res} ${result.textContent}`);
    if(res == result.textContent){
        result.innerText = `equale`;
        num1.innerText =  `${Rondom(one)}`;
        num2.innerText =  `${Rondom(two)}`;
        result.innerHTML;
    }else {
        result.innerText = `wrong`;
    }
});