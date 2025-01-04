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
    let check = document.getElementById("mode");
    if (check.checked) {
        document.body.classList.remove("lightmode-style")
        document.body.classList.add("darkmode-style");

        for (let i = 0; i < document.body.children.length; i++) {
            console.log(document.body.children[i].tagName === "ASIDE");
            if (document.body.children[i].tagName === "ASIDE" || document.body.children[i].tagName === "ARTICLE") {
                document.body.children[i].style.boxShadow = "20px 20px 60px #363636, -20px -20px 60px #4a4a4a";
            }
            for (let j = 0; j < document.body.children[i].children.length; j++) {
                if (document.body.children[i].children[j].tagName === "ARTICLE") {
                    document.body.children[i].children[j].style.boxShadow = "20px 20px 60px #363636, -20px -20px 60px #4a4a4a";
                }
                if (document.body.children[i].children[j].tagName === "ASIDE") {
                    document.body.children[i].children[j].style.boxShadow = "20px 20px 60px #363636, -20px -20px 60px #4a4a4a";
                }
            }
        }

        document.body.style.backgroundColor = "#404040FF";
        document.body.style.color = "#FFFFFF";
    }
    if (!check.checked) {
        document.body.classList.remove("darkmode-style");
        document.body.classList.add("lightmode-style")
        for (let i = 0; i < document.body.children.length; i++) {
            console.log(document.body.children[i].tagName === "ASIDE");
            if (document.body.children[i].tagName === "ASIDE" || document.body.children[i].tagName === "ARTICLE") {
                document.body.children[i].style.boxShadow = "20px 20px 60px #bebebe, -20px -20px 60px #ffffff";
            }
            for (let j = 0; j < document.body.children[i].children.length; j++) {
                if (document.body.children[i].children[j].tagName === "ARTICLE") {
                    document.body.children[i].children[j].style.boxShadow = "20px 20px 60px #bebebe, -20px -20px 60px #ffffff";
                }
                if (document.body.children[i].children[j].tagName === "ASIDE") {
                    document.body.children[i].children[j].style.boxShadow = "20px 20px 60px #bebebe, -20px -20px 60px #ffffff";
                }
            }
        }
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#000000";
    }
}