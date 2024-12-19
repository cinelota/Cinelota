// Seleciona os botões
const explorarBtn = document.querySelector('.navbtn-container:nth-child(1) .navbtn');
const meusFilmesBtn = document.querySelector('.navbtn-container:nth-child(2) .navbtn');

// Seleciona as seções
const catalogoSection = document.querySelector('.catalogo');
const meusFilmesSection = document.querySelector('.meus-filmes');

// Adiciona eventos de clique nos botões
explorarBtn.addEventListener('click', () => {
  // Define qual botão é ativo
  explorarBtn.classList.add('active');
  meusFilmesBtn.classList.remove('active');

  // Exibe o catálogo
  catalogoSection.classList.add('active-section');
  meusFilmesSection.classList.remove('active-section');
});

meusFilmesBtn.addEventListener('click', () => {
  // Define qual botão é ativo
  meusFilmesBtn.classList.add('active');
  explorarBtn.classList.remove('active');

  // Exibe "Meus Filmes"
  meusFilmesSection.classList.add('active-section');
  catalogoSection.classList.remove('active-section');
});
