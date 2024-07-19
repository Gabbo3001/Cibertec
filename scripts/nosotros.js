
function mostrarOcultar() {
    let texto = document.getElementById("texto-oculto");
    let boton = document.querySelector(".btn");
    if (texto.style.display === "none" || texto.style.display === "") {
      texto.style.display = "block";
      boton.textContent = "Ver menos...";
    } else {
      texto.style.display = "none";
      boton.textContent = "Ver más...";
    }
  }