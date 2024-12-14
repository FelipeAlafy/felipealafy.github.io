var scrollStatus = false;

document.addEventListener('DOMContentLoaded', () => {
    let age = document.getElementById('age');
    age.innerHTML = ((new Date()).getFullYear() - 2005).toLocaleString('pt-BR');
    variousTitles().then(r => 0)
})

async function variousTitles() {
    let  welcome_title = document.getElementById('welcome');
    welcome_title.innerHTML = "";
    let texts = ["Bem\tVindo(a)!", "Ao\tCurriculum\tVitae", "Do Carrasco", "Do\tFelipe\tAlafy."]
    const cursor= "|";

    for (let i = 0; i < texts.length; i++) {
        for (let l = 0; l < texts[i].length; l++) {
            let delay_time = 200;
            await sleep(delay_time).then(() => {
                welcome_title.innerText += cursor;
            });
            await sleep(delay_time).then(() => {
                welcome_title.innerText = welcome_title.innerText.substring(0, welcome_title.innerText.length - 1);
                welcome_title.innerText += texts[i][l];
            })
        }
        await sleep(2000);
        if (i === texts.length - 1) {break}
        for (let l = welcome_title.innerText.length; l > 0; l--) {
            welcome_title.innerText += cursor;
            await sleep(200).then(() => {
                welcome_title.innerText = welcome_title.innerText.substring(0, welcome_title.innerText.length - 2);
            });
        }
    }
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function ScrollOnPress() {
    const button = document.getElementById("startButton");
    let scroll;
    let margin;
    let transform;
    const baseScroll = 600;
    if (scrollStatus) {
        scroll = baseScroll * (-1);
        scrollStatus = false;
        margin = "0px";
        transform = "rotate(-270deg)";
    } else {
        scroll = baseScroll;
        scrollStatus = true;
        margin = "250px"
        transform = "rotate(-90deg)";
    }

    button.style.marginTop = margin;
    window.scrollBy({left: 0,top: scroll, behavior: 'smooth'});
    await sleep(1000);
    button.style.translate = "0";
    await sleep(400);
    button.style.transform = transform;

    button.addEventListener("mouseover", function (event) {
        transform += " scale(1.2)";
        button.style.transform = transform;
    })
}

