//Coletando componentes do HTML.
const afterSales = document.getElementById("workposition-aftersales-div")
const administrative = document.getElementById("workposition-administrative-div")
const apprentice = document.getElementById("workposition-apprentice-div")

const workPositionsAfterSalesDescription = document.getElementById("workposition-aftersales")
const workPositionsAdministrativeDescription = document.getElementById("workposition-administrative")
const workPositionsApprenticeDescription = document.getElementById("workposition-apprentice")

//Adicionando os eventos de clicks para as divs na tela customizada.
afterSales.addEventListener("click", showAfterSales)
administrative.addEventListener("click", showAdministrative)
apprentice.addEventListener("click", showApprentice)

//Esconde os valores de auxiliar e jovem aprendiz e mostra a descrição de assistente
function showAfterSales() {
    afterSales.classList.add("active")
    administrative.classList.remove("active")
    apprentice.classList.remove("active")
    workPositionsAfterSalesDescription.style.display = "block";
    workPositionsAdministrativeDescription.style.display = "none";
    workPositionsApprenticeDescription.style.display = "none";
}
//Esconde os valores da posição assistente e jovem aprendiz e mostra a descrição de auxiliar.
function showAdministrative() {
    afterSales.classList.remove("active")
    administrative.classList.add("active")
    apprentice.classList.remove("active")
    workPositionsAfterSalesDescription.style.display = "none";
    workPositionsAdministrativeDescription.style.display = "block";
    workPositionsApprenticeDescription.style.display = "none";
}

//Esconde os valores da posição de auxiliar e assistente e mostra a descrição de jovem aprendiz.
function showApprentice() {
    afterSales.classList.remove("active")
    administrative.classList.remove("active")
    apprentice.classList.add("active")
    workPositionsAfterSalesDescription.style.display = "none";
    workPositionsAdministrativeDescription.style.display = "none";
    workPositionsApprenticeDescription.style.display = "block";
}

//Como a função action do HTML Form não é capaz de enviar caracteres acentuados do português, foi necessário implementar
//A função abaixo, que busca o conteúdo do HTML, cria um assunto e compacta o conteúdo em um body
//E modifica os valores sendo enviados pelo botão submit.
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
    //Impede que o navegador recarregue enquanto está função é executada.
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = `Nova mensagem do(a) ${name}!`;
    const messageBody = `Olá, segue conteúdo da mensagem que o(a) ${name} enviou.\n${message}\nRetorno: ${email}`;

    window.location.href = `mailto:pessoal@felipealafy.net?subject=${encodeURI(subject)}&body=${encodeURI(messageBody)}`;
});