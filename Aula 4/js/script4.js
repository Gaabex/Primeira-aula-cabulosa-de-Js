"use strict";
let n1 = parseFloat(prompt("Digite n1"));
let n2 = parseFloat(prompt("Digite n2"));
let n3 = parseFloat(prompt("Digite n3"));
let n4 = parseFloat(prompt("Digite n4"));

let media = (n1 + n2 + n3 + n4) / 4;

if(media >= 0 && media <=10){
    if (media >= 5.75){
    alert("Você foi aprovado meu lindo :)");
    }else if(media < 5.75){
    alert("Você foi reprovado seu lixo!!!");
    } else{
    alert("AF");
    }
}else{
    alert("ERRO SUA MÃE 404")
}

