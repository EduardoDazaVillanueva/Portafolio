//menu móvil
const toggleMenuElement = document.getElementById('nav__menu');
const mainMenuElement = document.getElementById('navbar');

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main__menu--show');
});


//Cambiar tema
let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');

toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.toggle('dark');

    if (checked == true) {
        document.documentElement.style.setProperty('--color-claro', '#0c0c0c');
        document.documentElement.style.setProperty('--color-oscuro', '#F2F2F2');
        document.documentElement.style.setProperty('--color-fondo', '#e9e5e6');
        document.documentElement.style.setProperty('--color-rrss', '#0d0d0db0 ');
    } else {
        document.documentElement.style.setProperty('--color-claro', '#F2F2F2');
        document.documentElement.style.setProperty('--color-oscuro', '#0c0c0c');
        document.documentElement.style.setProperty('--color-fondo', '#161a19');
        document.documentElement.style.setProperty('--color-rrss', '#f2f2f2b0');
    }
});


// Scroll up
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.scrollTo(0, 0);
    }
}
///
buttonUp = document.getElementById("button-up");

window.onscroll = function () {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 500) {
        buttonUp.style.transform = "scale(0)";
    }

}
