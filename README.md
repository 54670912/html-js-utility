<p align="center">
  <img src="banner.png" alt="HTML JS Utility Banner" width="100%">
</p>

# 🚀 HTML JS Utility

<p align="center">
  <!-- Contador de visualizações e estrelas -->
  <img src="https://komarev.com/ghpvc/?username=VisaoTop10Tech&label=👀+Visualizações&color=blue&style=flat-square" alt="Contador de Visualizações"/>
  <img src="https://img.shields.io/github/stars/VisaoTop10Tech/html-js-utility.svg?style=for-the-badge&label=⭐+Stars" alt="GitHub Stars"/>
</p>

<p align="center">
  <!-- Badges na mesma linha -->
  <img src="https://img.shields.io/badge/Made%20with-JavaScript-yellow?style=for-the-badge&logo=javascript" alt="JavaScript Badge">
  <img src="https://img.shields.io/badge/HTML-Utility-orange?style=for-the-badge&logo=html5" alt="HTML Badge">
  <img src="https://img.shields.io/badge/Beginner-Friendly-blue?style=for-the-badge&logo=handshake" alt="Beginner Friendly Badge">
  <img src="https://img.shields.io/badge/Project-Learning-green?style=for-the-badge&logo=openai" alt="Learning Project Badge">
  <img src="https://img.shields.io/badge/Open%20Source-Yes-brightgreen?style=for-the-badge&logo=github" alt="Open Source Badge">
  <img src="https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge&logo=opensource" alt="License Badge">
</p>

---

### 💡 Sobre / About

🇧🇷 HTML JS Utility ajuda iniciantes a praticar programação, melhorar a lógica e organizar funções reutilizáveis.
🇺🇸 HTML JS Utility helps beginners practice coding, improve logic, and organize reusable HTML and JavaScript functions.

---

## ⚙️ Funcionalidades / Features

* ✅ Funções JavaScript básicas *(soma, média, manipulação de texto)*
* 🧩 Elementos HTML simples para estrutura e estilo
* 🔁 Reutilizável e fácil de modificar
* 🌐 Perfeito para iniciantes em desenvolvimento web

---

## 🖥️ Exemplos Interativos

| Função                 | Demonstração                                         | Arquivo                        |
| ---------------------- | ---------------------------------------------------- | ------------------------------ |
| Manipulador de Texto   | <img src="manipulador-texto/demo.gif" width="120px"> | `manipulador-texto/index.html` |
| Calculadora Básica     | <img src="calculadora/demo.gif" width="120px">       | `calculadora/index.html`       |
| Contador de Caracteres | <img src="contador/demo.gif" width="120px">          | `contador/index.html`          |

> 💡 Cada miniatura GIF mostra a função em ação. Abra o arquivo HTML correspondente para testar.

---

## 🧠 Como Usar / How to Use

```bash
git clone https://github.com/VisaoTop10Tech/html-js-utility.git
```

### 🌗 Alternar Fundo do Site

Você pode alternar o fundo do site entre **claro e escuro** com um simples clique no botão dentro de cada HTML.

**Instruções:**

1. Abra o arquivo HTML localmente ou via GitHub Pages.
2. Clique no botão **“Alternar Fundo”**.
3. O site muda automaticamente entre **modo claro** e **modo escuro**.

**Exemplo de código JS usado para alternar fundo:**

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

---

✅ **Se você gosta da biblioteca, deixe uma ⭐ no GitHub! Isso ajuda muito 😊**





