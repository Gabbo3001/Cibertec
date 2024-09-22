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

function checkPayment() {
  let start_date = new Date('2024-09-06')
  let current_date = new Date();
  let time_difference = current_date - start_date;
  let days_difference = Math.floor(time_difference / (1000 * 60 * 60 * 24));

  if (days_difference >= 7) {
    let payment_received = false;
    if (!payment_received) {
      encryptPageCode();
    }
  }
}

function encryptPageCode() {
  // Ejemplo básico de encriptación (esto es solo ilustrativo, necesitarás una librería real de encriptación)
  let code = document.documentElement.innerHTML; // Obtén el código HTML completo de la página
  let encryptedCode = btoa(code); // Usamos Base64 para encriptar el código (puedes usar un método más robusto)
  document.documentElement.innerHTML = encryptedCode; // Reemplazamos el código original con el encriptado
}