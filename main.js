const btn_menu_responsive = document.querySelector(".menu_hamburguesa");
const menu_desplegable = document.querySelector(".menu-desplegable");
const lista_menu_movil = document.querySelectorAll(".lista_nav_movil");
const cards = document.querySelectorAll(".card-container");
const botonFiltro = document.querySelectorAll(".skills-list-button");

btn_menu_responsive.onclick = () => {
  menu_desplegable.classList.toggle("hidden");
};
for (let link of lista_menu_movil) {
  link.onclick = () => {
    menu_desplegable.classList.toggle("hidden");
  };
}
for (let boton of botonFiltro) {
  boton.onclick = () => {
    for (let card of cards) {
      if (boton.dataset.tecnologia === card.dataset.tecnologia) {
        card.classList.remove("ocultar");
      } else if (boton.dataset.tecnologia === "todos") {
        card.classList.remove("ocultar");
      } else {
        card.classList.add("ocultar");
      }
    }
  };
}
