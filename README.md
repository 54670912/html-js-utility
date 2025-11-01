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

| Função                 | Demonstração                                     | Arquivo                        |
| ---------------------- | ------------------------------------------------ | ------------------------------ |
| Manipulador de Texto   | ![Demo](manipulador-texto/demo.gif){width=100px} | `manipulador-texto/index.html` |
| Calculadora Básica     | ![Demo](calculadora/demo.gif){width=100px}       | `calculadora/index.html`       |
| Contador de Caracteres | ![Demo](contador/demo.gif){width=100px}          | `contador/index.html`          |

> 💡 Cada miniatura GIF mostra a função em ação. Abra o arquivo HTML correspondente para testar.

---

## 🧠 Como Usar / How to Use

```bash
git clone https://github.com/VisaoTop10Tech/html-js-utility.git
```

---

## 🌗 Alternar Fundo do Site

Você pode alternar o fundo do site entre branco e preto com um simples clique!

**Como usar:**

1. Clique no botão “Alternar Fundo”.
2. O site muda automaticamente entre **modo claro** e **modo escuro**.

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



