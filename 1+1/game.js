
// create variable
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result =document.getElementById('result');
let one = 1;
let two = Math.floor((Math.random() * 10) + 1);
let res = one * two;
let correctAnswer = 0;
let wrongAnswer = 0 ;
let timer = 30;
let button = document.querySelector('.waves-effect');

// clawiatura
let clawiatura = document.querySelector('.clawa'); 
//clawiatura
// main
let main = document.querySelector('.main'); 
//main
// score
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');
// timer
let time = document.getElementById('timer');
let divResult = document.querySelector('.endResult');
let timerBlock = document.querySelector('.timerBlock');


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
//           START   =>
  function Start (){
    time.style.display = 'block';
    button.className = 'presed';
    main.className = 'mainBlock';
    clawiatura.className = 'clawaBlock';
    timerBlock.style.display = 'block';


   let myInterval = setInterval(function(){
     timer--;
     time.innerText = timer;
     time.innerHTML;
     if(timer == 0) {
        clearInterval(myInterval);
        ShowResult();
    }
     },1000);
}


// code
num1.innerText =  `${one}`;
num2.innerText =  `${two}`;
score1.innerText = `${correctAnswer}`;
score2.innerText = `${wrongAnswer}`;
result.innerText = ``;


// обработчики на клавиатуре
(()=>{
    c1.addEventListener("click",function(){
        result.innerText += `1`;
        Press(c1);
      });
      c2.addEventListener("click",function(){
          result.innerText += `2`;
          Press(c2);
      });
      c3.addEventListener("click",function(){
          result.innerText += `3`;
          Press(c3);
      });
      c4.addEventListener("click",function(){
          result.innerText += `4`;
          Press(c4);
      });
      c5.addEventListener("click",function(){
          result.innerText += `5`;
          Press(c5);
      });
      c6.addEventListener("click",function(){
          result.innerText += `6`;
          Press(c6);
      });
      c7.addEventListener("click",function(){
          result.innerText += `7`;
          Press(c7);
      });
      c8.addEventListener("click",function(){
          result.innerText += `8`;
          Press(c8);
      });
      c9.addEventListener("click",function(){
          result.innerText += `9`;
          Press(c9);
      });
      c0.addEventListener("click",function(){
          result.innerText += `0`;
          Press(c0);
      });
})();


//кнопка назад
back.addEventListener("click",function(){
    console.log('presed');
    console.log(result.textContent);
    console.log(result.textContent.substring(0,result.textContent.length -1));
    result.textContent = result.textContent.substring(0,result.textContent.length -1);
    
});


// зеленая кнопка отправить результат
document.getElementById("equale").addEventListener("click", function(){
    console.log(`${res} ${result.textContent}`);
    if(res == result.textContent){
        result.innerText = ``;
        one = Rondom(one);
        two = Rondom(two);
        res = one * two;
        correctAnswer++;
        score1.innerText = `${correctAnswer}`;
        num1.innerText =  `${one}`;
        num2.innerText =  `${two}`;
        result.innerHTML;
    }else {
        wrongAnswer++;
        score2.innerText = `${wrongAnswer}`;
        result.innerText = ``;
    }
});

// что произоизойдет после окончания таймера 
let ShowResult = ()=>{
    divResult.className = 'endResult2';
    main.style.display = 'none';
    clawiatura.style.display = 'none';
    time.style.display = 'none';
    console.log('working )))');
};

let Press = (element)=>{
    let number =  setInterval(function(){
       element.style.color = 'red';
           },20);
           element.style.color = 'red';
   
           setTimeout(function(){
               clearInterval(number);
               element.style.color = 'blue';
           },100);
       }