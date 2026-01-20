document.addEventListener("DOMContentLoaded", function(){
    const knapp = document.getElementById('knapp');
    const topp = document.getElementsByClassName('toppen')

    knapp.addEventListener('click', function(){
        if (knapp.classList.contains("dark"))
        {
            topp.replace("toppenLight", "toppenDark");
            knapp.classList.replace("dark", "light");
            knapp.innerHTML="Switch to Dark-mode";
        }
        else if(theme_switch.classList.contains("light"))
        {
            topp.replace("toppenLight", "toppenDark");
            knapp.classList.replace("light", "dark");
            knapp.innerHTML="Switch to Light-mode";
        }
    })
})