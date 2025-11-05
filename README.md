<p align="center">
  <img src="banner.png" alt="HTML JS Utility Banner" width="100%">
</p>

<h1 align="center">🚀 HTML JS Utility</h1>

<p align="center">
  <!-- Contador de Visualizações -->
  <img src="https://komarev.com/ghpvc/?username=54670912&label=👀+Visualizações&color=blue&style=flat-square" alt="Contador de Visualizações"/>

  <!-- Contador de Estrelas do GitHub -->
 <p align="center">
  <img src="banner.png" alt="HTML JS Utility Banner" width="100%">
</p>




<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-JavaScript-yellow?style=for-the-badge&logo=javascript" alt="JavaScript Badge">
  <img src="https://img.shields.io/badge/HTML-Utility-orange?style=for-the-badge&logo=html5" alt="HTML Badge">
  <img src="https://img.shields.io/badge/Beginner-Friendly-blue?style=for-the-badge&logo=handshake" alt="Beginner Friendly Badge">
  <img src="https://img.shields.io/badge/Project-Learning-green?style=for-the-badge&logo=openai" alt="Learning Project Badge">
  <img src="https://img.shields.io/badge/Open%20Source-Yes-brightgreen?style=for-the-badge&logo=github" alt="Open Source Badge">
  <img src="https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge&logo=opensource" alt="License Badge">
</p>

---

### 💡 Sobre / About  

🇧🇷 **HTML JS Utility** ajuda iniciantes a praticar programação, melhorar a lógica e organizar funções reutilizáveis.  
🇺🇸 **HTML JS Utility** helps beginners practice coding, improve logic, and organize reusable HTML and JavaScript functions.

---

## ⚙️ Funcionalidades / Features  
- ✅ Funções JavaScript básicas (soma, média, manipulação de texto)  
- 🧩 Elementos HTML simples para estrutura e estilo  
- 🔁 Reutilizável e fácil de modificar  
- 🌐 Perfeito para iniciantes em desenvolvimento web  

---

## 🖥️ Exemplos Interativos  

| Função | Demonstração | Arquivo |
|:--|:--:|:--|
| Manipulador de Texto | <img src="manipulador-texto/demo.gif" width="150px"> | `manipulador-texto/index.html` |
| Calculadora Básica | <img src="calculadora/demo.gif" width="150px"> | `calculadora/index.html` |
| Contador de Caracteres | <img src="contador/demo.gif" width="150px"> | `contador/index.html` |

> 💡 Cada GIF mostra o projeto funcionando.  
> Basta abrir o arquivo HTML correspondente para testar!

---

## 🌗 Alternar Fundo do Site  

Você pode alternar o fundo do site entre **modo claro** e **modo escuro** com um simples clique!

**Código usado:**
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







