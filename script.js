
// I need a clicked div to show its number to start out
let num0 = document.getElementById('num0').innerText;
let num1 = document.getElementById('num1').innerText;
let num2 = document.getElementById('num2').innerText;
let num3 = document.getElementById('num3').innerText;
let num4 = document.getElementById('num4').innerText;
let num5 = document.getElementById('num5').innerText;
let num6 = document.getElementById('num6').innerText;
let num7 = document.getElementById('num7').innerText;
let num8 = document.getElementById('num8').innerText;
let num9 = document.getElementById('num9').innerText;


function showNum0(){
let calculatorScreen = document.getElementById('calcScreen');
 calculatorScreen.innerText += 0;
 console.log('test')
}
function showNum1(){
    let calculatorScreen = document.getElementById('calcScreen');
     calculatorScreen.innerText += 1;
     console.log('test')
}
function showNum2(){
    let calculatorScreen = document.getElementById('calcScreen');
     calculatorScreen.innerText += 2;
     console.log('test')
}
function showNum3(){
    let calculatorScreen = document.getElementById('calcScreen');
     calculatorScreen.innerText += 3;
     console.log('test')
}
function showNum4(){
    let calculatorScreen = document.getElementById('calcScreen');
     calculatorScreen.innerText += 4;
     console.log('test')
}
function showNum5(){
    let calculatorScreen = document.getElementById('calcScreen');
     calculatorScreen.innerText += 5;
     console.log('test')
}
function showNum6(){
    let calculatorScreen = document.getElementById('calcScreen');
     calculatorScreen.innerText += 6;
     console.log('test')
}
function showNum7(){
    let calculatorScreen = document.getElementById('calcScreen');
     calculatorScreen.innerText += 7;
     console.log('test')
}
    function showNum8(){
        let calculatorScreen = document.getElementById('calcScreen');
         calculatorScreen.innerText += 8;
         console.log('test')
}
function showNum9(){
    let calculatorScreen = document.getElementById('calcScreen');
     calculatorScreen.innerText += 9;
     console.log('test')
}
function showNull(){
    document.getElementById('calcScreen').innerHTML = ("");
    console.log('test null')
}
function addThis(){
    let calculatorScreen = document.getElementById('calcScreen');
    calculatorScreen.innerText += '+';
}
function subtract(){
    let calculatorScreen = document.getElementById('calcScreen');
    calculatorScreen.innerText += '-';
}

function multiply(){
    let calculatorScreen = document.getElementById('calcScreen');
    calculatorScreen.innerText += '*';
}

function divide(){
    let calculatorScreen = document.getElementById('calcScreen');
    calculatorScreen.innerText += '/';
}
let calculatorScreen = document.getElementById('calcScreen')
function enter(){
    if(calculatorScreen.innerHTML[1] === '+' ){
   let a = calculatorScreen.innerHTML[0]
   let b = calculatorScreen.innerHTML[2]
   let sum = Number(a) + Number(b)
   console.log(sum)
   calculatorScreen.innerText = sum;
} 
    else if(calculatorScreen.innerHTML[1] === '-') {
        let calculatorScreen = document.getElementById('calcScreen')
        console.log('subtract')
        let a = calculatorScreen.innerHTML[0]
        let b = calculatorScreen.innerHTML[2]
        let sum = Number(a) - Number(b)
        console.log(sum)
        calculatorScreen.innerText = sum;
    }
    else if(calculatorScreen.innerHTML[1] === '*') {
        let calculatorScreen = document.getElementById('calcScreen')
        let a = calculatorScreen.innerHTML[0]
        let b = calculatorScreen.innerHTML[2]
        let sum = Number(a) * Number(b)
        console.log(sum)
        calculatorScreen.innerText = sum;
    }
    else if(calculatorScreen.innerHTML[1] === '/') {
        let calculatorScreen = document.getElementById('calcScreen')
        let a = calculatorScreen.innerHTML[0]
        let b = calculatorScreen.innerHTML[2]
        let sum = Number(a) / Number(b)
        console.log(sum)
        calculatorScreen.innerText = sum;
    }
}

