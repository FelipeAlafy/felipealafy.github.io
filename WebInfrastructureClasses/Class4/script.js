console.log("Olá Mundo!");
const nome = "Felipe";
let idade = 17;
idade = idade + 1;
console.log(`Olá, ${nome} você tem ${idade} anos.`);


let button = document.getElementById('button1')
button.onclick=()=>{document.getElementById('para1').innerHTML=`Olá, ${nome} você tem ${idade} anos.`}

if (idade >= 18) {
    alert("Acesso permitido")
} else {
    alert("Acesso negado")
}