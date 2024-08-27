function encriptarYRedireccionar() {
  const texto = document.getElementById("textoUsuario").value;

  // Validación del texto (permite letras minúsculas y caracteres especiales)
  if (!texto.match(/^[a-z\senterimesaiberufat]+$/)) {
    alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
    return; // Detener la ejecución si la validación falla
  }

  const resultado = encriptar(texto);

  // Crea un parámetro en la URL para enviar el resultado
  const url = "resultado.html?resultado=" + encodeURIComponent(resultado);

  // Redirige al segundo HTML
  window.location.href = url;
}

function encriptar(texto) {
  return texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
}

function desencriptar() {
  const texto = document.getElementById("textoUsuario").value;

  // Validación del texto (permite letras minúsculas y caracteres especiales)
  if (!texto.match(/^[a-z\senterimesaiberufat]+$/)) {
    alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
    return; // Detener la ejecución si la validación falla
  }

  const resultado = desencriptarTexto(texto);

  // Crea un parámetro en la URL para enviar el resultado
  const url = "resultado.html?resultado=" + encodeURIComponent(resultado);

  // Redirige al segundo HTML
  window.location.href = url;
}

function desencriptarTexto(texto) {
  return texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
}

// Obtiene el parámetro "resultado" de la URL
const urlParams = new URLSearchParams(window.location.search);
const resultado = urlParams.get("resultado");

// Muestra el resultado en el textarea
if (resultado) { 
  document.getElementById("resultado").value = decodeURIComponent(resultado);
}

// Función para copiar el texto encriptado y volver al primer HTML
function copiar() {
  const textoEncriptado = document.getElementById("resultado");
  textoEncriptado.select();
  document.execCommand("copy");
  
  alert("¡Texto copiado!");

  // Redirige al primer HTML
  window.location.href = "index.html";
}