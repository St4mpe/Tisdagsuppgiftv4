document.addEventListener("DOMContentLoaded", function () {
    const knapp = document.getElementById('knapp');
    const topp = document.querySelector('.toppen');
    const backgrund = document.querySelector('.information');
    const inforuta = document.getElementsByClassName('inforuta');
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
            for(vdo=0;vdo<inforuta.length;vdo++){
                inforuta[vdo].classList.replace("infoRutaLight", "infoRutaDark");
            }
        } 
        else {
            body.classList.replace("bodyDark", "bodyLight");
            topp.classList.replace("toppenDark", "toppenLight");
            backgrund.classList.replace("informationDark", "informationLight");
            knapp.classList.replace("dark", "light");
            knapp.innerHTML = "Switch to Dark-mode";
            footer.classList.replace("footerDark", "footerLight");

            for(vdo=0;vdo<inforuta.length;vdo++){
                inforuta[vdo].classList.replace("infoRutaDark", "infoRutaLight");
            }
        }
    });
});
