console.log("hello world!")

let onClicked = false;

let btn = document.getElementById('btn')    

btn.onmouseover = () => {
    if (!onClicked) {
        btn.style.backgroundColor = "Green"
    }
}
btn.onmouseout = () => {
    if (!onClicked) {
        btn.style.backgroundColor = "Blue"
    } else {
        btn.innerHTML = `Quebrado!`
    }
}

btn.onclick = () => {
    onClicked = true
    btn.style.backgroundColor= "RED"
    console.log("Button clicked")
    btn.innerHTML = `Quebrei!`
}