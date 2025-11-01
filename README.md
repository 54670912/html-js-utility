<p align="center">
  <img src="banner.png" alt="HTML JS Utility Banner" width="100%">
</p>

# 🚀 HTML JS Utility

<p align="center">
  ![Contador de Visualizações](https://komarev.com/ghpvc/?username=VisaoTop10Tech&label=👀+Visualizações&color=blue&style=flat-square)<br>
  ![GitHub Stars](https://img.shields.io/github/stars/VisaoTop10Tech/html-js-utility?style=for-the-badge&label=⭐+Stars)
</p>

<p align="center">
  ![Feito com JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow?style=for-the-badge&logo=javascript)<br>
  ![Emblema HTML](https://img.shields.io/badge/HTML-Utility-orange?style=for-the-badge&logo=html5)<br>
  ![Fácil para Iniciantes](https://img.shields.io/badge/Beginner-Friendly-blue?style=for-the-badge&logo=handshake)<br>
  ![Projeto de Aprendizagem](https://img.shields.io/badge/Project-Learning-green?style=for-the-badge&logo=openai)<br>
  ![Código Aberto](https://img.shields.io/badge/Open%20Source-Yes-brightgreen?style=for-the-badge&logo=github)<br>
  ![Licença MIT](https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge&logo=opensource)
</p>

---

### 💡 Sobre / About

🇧🇷 HTML JS Utility ajuda iniciantes a praticar programação, melhorar a lógica e organizar funções reutilizáveis.
🇺🇸 HTML JS Utility helps beginners practice coding, improve logic, and organize reusable HTML and JavaScript functions.

---

## ⚙️ Funcionalidades / Features

* ✅ Funções JavaScript básicas (soma, média, manipulação de texto)
* 🧩 Elementos HTML simples para estrutura e estilo
* 🔁 Reutilizável e fácil de modificar
* 🌐 Perfeito para iniciantes em desenvolvimento web

---

## 🖥️ Exemplos Interativos

<p align="center">
  <b>Manipulador de Texto</b><br>
  <a href="manipulador-texto/index.html">
    <img src="manipulador-texto/demo.gif" width="150px">
  </a><br>
  <code>manipulador-texto/index.html</code>
</p>

<p align="center">
  <b>Calculadora Básica</b><br>
  <a href="calculadora/index.html">
    <img src="calculadora/demo.gif" width="150px">
  </a><br>
  <code>calculadora/index.html</code>
</p>

<p align="center">
  <b>Contador de Caracteres</b><br>
  <a href="contador/index.html">
    <img src="contador/demo.gif" width="150px">
  </a><br>
  <code>contador/index.html</code>
</p>

> 💡 Clique nos GIFs para abrir o arquivo HTML correspondente e testar a função.

---

## 🧠 Como Usar / How to Use

```bash
git clone https://github.com/VisaoTop10Tech/html-js-utility.git
```

---

## 🌗 Alternar Fundo do Site

Você pode alternar o fundo do site entre branco e preto com um simples clique!

<p align="center">
  <button onclick="alternarTema()" style="padding:10px 20px; font-size:16px; cursor:pointer;">Alternar Fundo</button>
</p>

**Código usado (script.js):**

```js
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
```



