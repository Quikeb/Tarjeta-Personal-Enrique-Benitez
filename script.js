/* enlazar los elementos de HTML */

const toggleButton = document.getElementById("toggle-button");
const body = document.body;
const logo = document.getElementById("logo");

/* función para ejecutar un código */

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");

  // cambiamos el logo segun el tema

  const isDark = body.classList.contains("dark"); // true - false

  logo.src = isDark ?  "./assets/marca-grafica-dark.svg" : "./assets/marca-grafica.svg"

} )