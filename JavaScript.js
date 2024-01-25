var iconoMenu = document.querySelector(".icono_m");

function desplegarMenu(){
    var menuDesplegable = document.querySelector(".container_pag");
    menuDesplegable.classList.toggle("desplegar_menu");

}

iconoMenu.addEventListener("click", desplegarMenu);