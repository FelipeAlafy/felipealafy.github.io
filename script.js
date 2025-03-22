document.addEventListener('DOMContentLoaded', () => {
    let idade = document.getElementById('idade');
    let periodo = document.getElementById('periodo');

    let date = new Date();
    let currentYear = date.getFullYear();
    let baseYear = currentYear - 2024;
    let periodCounter = baseYear * 2;
    let currentMonth = date.getMonth();
    console.log(currentMonth);

    if (currentMonth === 0 || currentMonth === 5) {
        periodCounter++;
    }

    let baseAge = ((new Date()).getFullYear() - 2005);
    if (currentMonth < 10) {
        baseAge--;
    }

    periodo.innerHTML = periodCounter.toString();
    idade.innerHTML = baseAge.toLocaleString('pt-BR');
})


function changeMode() {
    
}