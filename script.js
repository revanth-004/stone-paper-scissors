'use strict';
let object={'stone':'✊','paper':'✋','scissors':'✌️'};
let randomValue;
const cpu=document.getElementById('cpu');
const user=document.getElementById('user');
const result=document.getElementById('result');

function start(){
    randomValue = Math.floor(Math.random()*3)
    cpu.textContent='CPU:'+Object.values(object)[randomValue];
    
    let cpuSymbol=Object.values(object)[randomValue];
    let userSymbol=object[user.value];
    //console.log('user:'+object[user.value]+'cpu:'+Object.values(object)[randomValue]);
    if(cpuSymbol===userSymbol){
        result.textContent='DRAW  😑';
    }
    else if(cpuSymbol==='✊'){
        
        if(userSymbol==='✌️'){
            result.textContent=' YOU LOSE 😒';
        }
        else{
            result.textContent='YOU WIN 🤘';
        }
    }
    else if(cpuSymbol==='✋'){
        if(userSymbol==='✊'){
            result.textContent='YOU LOSE 😒 ';
        }
        else {
            result.textContent='YOU WIN 🤘 ';
        }
    }
    else{
        if(userSymbol==='✊'){
            result.textContent='YOU WIN 🤘 ';
        }
        else{
            result.textContent=' YOU LOSE 😒 ';
        }
    }
    
}
