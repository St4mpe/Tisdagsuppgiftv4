document.addEventListener("DOMContentLoaded", function () {
    const knapp = document.getElementById('knapp');
    const topp = document.querySelector('.toppen');
    const backgrund = document.querySelector('.information');
    const inforuta = document.querySelector('inforuta');
    const body = document.getElementById('body');
    const footer = document.getElementById('footer');

    knapp.addEventListener('click', function () {

        if (knapp.classList.contains("light")) {
            body.classList.replace("bodyLight", "bodyDark");
            topp.classList.replace("toppenLight", "toppenDark");
            backgrund.classList.replace("informationLight", "informationDark");
            knapp.classList.replace("light", "dark");
            knapp.innerHTML = "Switch to Light-mode";
            footer.classList.replace("footerLight", "footerDark");
            inforuta.classList.replace("infoRutaLight", "infoRutaDark");
        } 
        else {
            body.classList.replace("bodyDark", "bodyLight");
            topp.classList.replace("toppenDark", "toppenLight");
            backgrund.classList.replace("informationDark", "informationLight");
            knapp.classList.replace("dark", "light");
            knapp.innerHTML = "Switch to Dark-mode";
            footer.classList.replace("footerDark", "footerLight");
            inforuta.classList.replace("infoRutaDark", "infoRutaLight");
        }
    });
});
