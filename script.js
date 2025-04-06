function getFirstElementFromHTMLCollectionByClassName(id) {
    return document.getElementsByClassName(id).item(0);
}

function ShouldShowCertificationField(fieldToShow, isShowing) {
    let certificationsField = getFirstElementFromHTMLCollectionByClassName(fieldToShow);
    if (!isShowing) {
        certificationsField.style.display = 'block';
        return !isShowing;
    }
    certificationsField.style.display = 'none';
    return !isShowing;
}


document.addEventListener('DOMContentLoaded', () => {
    let htmlCSSShowCertifications = false
    let javaShowCertifications = false
    let linuxShowCertifications = false
    let portugolShowCertifications = false
    let hardwareArchitectureShowCertifications = false

    let idade = document.getElementById('idade')
    let periodo = document.getElementById('periodo')

    let date = new Date()
    let currentYear = date.getFullYear()
    let baseYear = currentYear - 2024
    let periodCounter = baseYear * 2
    let currentMonth = date.getMonth()

    if (currentMonth === 0 || currentMonth === 5) {
        periodCounter++
    }

    let baseAge = ((new Date()).getFullYear() - 2005)
    if (currentMonth < 10) {
        baseAge--
    }

    periodo.innerHTML = periodCounter.toString();
    idade.innerHTML = baseAge.toLocaleString('pt-BR')

    document.querySelector('html').setAttribute("data-theme", "light");

    let htmlCssButton = document.getElementById('AboutHTMLandCSSCertifications')
    htmlCssButton.addEventListener('click', () => {
        htmlCSSShowCertifications = ShouldShowCertificationField(
            "AboutHTMLandCSSCertifications", htmlCSSShowCertifications
        );
    })

    let javaButton = document.getElementById('AboutJavaCertifications')
    javaButton.addEventListener('click', () => {
        javaShowCertifications = ShouldShowCertificationField(
            "AboutJavaCertifications",
            javaShowCertifications
        )
    })

    let linuxButton = document.getElementById('AboutLinuxCertifications')
    linuxButton.addEventListener('click', () => {
        linuxShowCertifications = ShouldShowCertificationField(
            "AboutLinuxCertifications",
            linuxShowCertifications
        )
    })

    let portugolButton = document.getElementById('AboutPortugolCertifications')
    portugolButton.addEventListener('click', () => {
        portugolShowCertifications = ShouldShowCertificationField(
            "AboutPortugolCertifications",
            portugolShowCertifications
        )
    })
    let hardwareArchitectureButton = document.getElementById('HardwareAchitectureCertifications')
    hardwareArchitectureButton.addEventListener('click', () => {
        hardwareArchitectureShowCertifications = ShouldShowCertificationField(
            "AboutHardwareArchitectureCertifications",
            hardwareArchitectureShowCertifications
        )
    })
})


function changeMode() {
    console.log(localStorage.getItem('theme'))
    let currentTheme = getInverseTheme(localStorage.getItem('theme'));
    console.log(currentTheme)
    localStorage.setItem('theme', currentTheme);
    document.querySelector('html').setAttribute("data-theme", currentTheme);
    console.log(currentTheme);
}

function getInverseTheme(currentTheme) {
    if (currentTheme === "light" || currentTheme === null) {
        return "dark";
    }
    return "light";
}
