/* Enlazar los elementos del html */
const togglebutton = document.getElementById ("toggle-button");
const body = document.body;



/*  Creacion de una funcion para ejecutar un codigo  */


togglebutton.addEventListener("click",() => {
  body.classlist.toggle ("dark")
});

