async function dosomething() {
    let welcome_text = document.getElementById("welcome");
    console.log("doSomeThing");
    await sleep(200).then(() => {
        welcome_text.innerHTML = "B|";
    })
    await sleep(200).then(() => {
        welcome_text.innerHTML = "Be";
    })
    await sleep(200).then(() => {
        welcome_text.innerHTML = "Bem|";
    })
    await sleep(200).then(() => {
        welcome_text.innerHTML = "Bem ";
    })
    await sleep(200).then(() => {
        welcome_text.innerHTML = "Bem V|";
    })
    await sleep(200).then(() => {
        welcome_text.innerHTML = "Bem Vi";
    })
    await sleep(200).then(() => {
        welcome_text.innerHTML = "Bem Vin|";
    })
    await sleep(200).then(() => {
        welcome_text.innerHTML = "Bem Vind";
    })
    await sleep(200).then(() => {
        welcome_text.innerHTML = "Bem Vindo|";
    })
    await sleep(200).then(() => {
        welcome_text.innerHTML = "Bem Vindo!";
    })
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
