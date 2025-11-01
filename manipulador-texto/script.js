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
// Alternar entre modo claro e escuro
function alternarTema() {
  const body = document.body;
  const temaAtual = body.dataset.tema || "claro";

  if (temaAtual === "claro") {
    body.style.backgroundColor = "#000";
    body.style.color = "#fff";
    body.dataset.tema = "escuro";
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
    body.dataset.tema = "claro";
  }
}
function alternarTema() {
  const body = document.body;
  const temaAtual = body.dataset.tema || "claro";

  if (temaAtual === "claro") {
    body.style.backgroundColor = "#000";
    body.style.color = "#fff";
    body.dataset.tema = "escuro";
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
    body.dataset.tema = "claro";
  }
}
