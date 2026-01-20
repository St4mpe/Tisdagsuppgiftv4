document.addEventListener("DOMContentLoaded", function () {
    const knapp = document.getElementById('knapp');
    const topp = document.querySelector('.toppen');
    const backgrund = document.querySelector('.information');

    knapp.addEventListener('click', function () {

        if (knapp.classList.contains("light")) {
            topp.classList.replace("toppenLight", "toppenDark");
            backgrund.classList.replace("informationLight", "informationDark");
            knapp.classList.replace("light", "dark");
            knapp.textContent = "Switch to Light-mode";
        } 
        else {
            topp.classList.replace("toppenDark", "toppenLight");
            backgrund.classList.replace("informationDark", "informationLight");
            knapp.classList.replace("dark", "light");
            knapp.textContent = "Switch to Dark-mode";
        }

    });
});
