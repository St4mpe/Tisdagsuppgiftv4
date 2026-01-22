document.addEventListener("DOMContentLoaded", function () {
    const knapp = document.getElementById('knapp');
    const topp = document.querySelector('.toppen');
    const backgrund = document.querySelector('.information');
    const body = document.getElementById('body');

    knapp.addEventListener('click', function () {

        if (knapp.classList.contains("light")) {
            body.classList.replace("bodyLight", "bodyDark");
            topp.classList.replace("toppenLight", "toppenDark");
            backgrund.classList.replace("informationLight", "informationDark");
            knapp.classList.replace("light", "dark");
            knapp.textContent = "Switch to Light-mode";
        } 
        else {
            body.classList.replace("bodyDark", "bodyLight");
            topp.classList.replace("toppenDark", "toppenLight");
            backgrund.classList.replace("informationDark", "informationLight");
            knapp.classList.replace("dark", "light");
            knapp.textContent = "Switch to Dark-mode";
        }
    });
});
