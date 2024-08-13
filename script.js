'use strict';
let object={'stone':'✊','paper':'✋','scissors':'✌️'};
let randomValue;
const cpu=document.getElementById('cpu');
const user=document.getElementById('user');
const result=document.getElementById('result');
function start(){
    randomValue = Math.floor(Math.random()*3)
    cpu.textContent='CPU:'+Object.values(object)[randomValue];
    // user.textContent='user:✌️';
    let cpuSymbol=Object.values(object)[randomValue];
    let userSymbol=object[user.value];
    console.log('user:'+object[user.value]+'cpu:'+Object.values(object)[randomValue]);
    if(cpuSymbol==='✊'){
        if(userSymbol==='✊'){
            result.textContent='DRAW  😑';
        }
        else if(userSymbol==='✌️'){
            result.textContent=' LOSE 😒';
        }
        else{
            result.textContent='WIN 🤘';
        }
    }
    else if(cpuSymbol==='✋'){
        if(userSymbol==='✊'){
            result.textContent='LOSE 😒 ';
        }
        else if(userSymbol==='✌️'){
            result.textContent='WIN 🤘 ';
        }
        else{
            result.textContent='DRAW 😑 ';
        }
    }
    else{
        if(userSymbol==='✊'){
            result.textContent='WIN 🤘 ';
        }
        else if(userSymbol==='✌️'){
            result.textContent='DRAW  😑 ';
        }
        else{
            result.textContent=' LOSE 😒 ';
        }
    }
    
}
