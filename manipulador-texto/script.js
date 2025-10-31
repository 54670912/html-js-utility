function converterMaiusculas() {
  let texto = document.getElementById('texto').value;
  document.getElementById('resultado').textContent = texto.toUpperCase();
}

function converterMinusculas() {
  let texto = document.getElementById('texto').value;
  document.getElementById('resultado').textContent = texto.toLowerCase();
}

function contarCaracteres() {
  let texto = document.getElementById('texto').value;
  document.getElementById('resultado').textContent = `Total de letras: ${texto.length}`;
}

function inverterTexto() {
  let texto = document.getElementById('texto').value;
  document.getElementById('resultado').textContent = texto.split('').reverse().join('');
}
