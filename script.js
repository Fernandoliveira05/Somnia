
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
          $(".black").css("background-color" , "rgba(0, 182, 18, 0);");
        }
  
        else{
            $(".black").css("background-color" , "red");  	
        }
    })
  })

  const carousel = document.querySelector('.carousel');


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

showSlide(currentIndex);

carousel.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        window.open(event.target.getAttribute('href'), '_blank');
    }
});

// Para adicionar controles de próximo e anterior, você pode usar botões e
// incrementar/decrementar o valor de currentIndex e chamar showSlide.

// Adicione este código no seu arquivo JavaScript (script.js)

// Seleciona os elementos do portfólio e os botões de navegação
const slides = document.querySelectorAll('.portfolio-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Função para mostrar o slide atual
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Função para avançar para o próximo slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Função para voltar ao slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Adiciona eventos aos botões de navegação
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Mostra o primeiro slide ao carregar a página
showSlide(currentIndex);


//IMPRENSA
// Seleciona os elementos necessários
const readMoreButtons = document.querySelectorAll('.btn-primary');
const overlay = document.querySelector('.overlay');
const newsBox = document.querySelector('.news-box');

// Função para mostrar a notícia
function showNews(newsContent) {
  overlay.style.display = 'flex';
  newsBox.innerHTML = newsContent;
  setTimeout(() => {
    overlay.style.opacity = 1;
    newsBox.style.opacity = 1;
    newsBox.style.transform = 'translateY(0)';
  }, 10);
}

// Evento de clique nos botões "Leia Mais"
readMoreButtons.forEach((button, index) => {
  const newsContent = `<h2>Título da Notícia ${index + 1}</h2>
  <p>Data da notícia</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Notícia ${index + 1}.</p>
  <a href="#" class="close-news">Fechar</a>`;

  button.addEventListener('click', (e) => {
    e.preventDefault();
    showNews(newsContent);
  });
});

// Evento de clique para fechar a notícia
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-news')) {
    overlay.style.opacity = 0;
    newsBox.style.opacity = 0;
    newsBox.style.transform = 'translateY(-50px)';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  }
});

document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário
  var searchIcon = document.getElementById("search-icon");
  searchIcon.style.display = "none";
  // Aqui você pode adicionar a lógica para processar a pesquisa
});

function abrirPagina(imagem) {
  // Aqui você pode redirecionar para diferentes páginas com base na imagem clicada
  // Por exemplo:
  if (imagem === 'imagem1') {
      window.location.href = 'pagina1.html';
  } else if (imagem === 'imagem2') {
      window.location.href = 'pagina2.html';
  } else if (imagem === 'imagem3') {
      window.location.href = 'pagina3.html';
  } else if (imagem === 'imagem4') {
      window.location.href = 'pagina4.html';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var parceirosImg = document.querySelector('.parceirosImg');

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();

      var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      
      // Defina uma margem de 100 pixels para cima e para baixo
      var margin = 0;

      return (
          rect.top >= -margin &&
          rect.bottom <= (windowHeight + margin)
      );
  }

  function checkVisibility() {
      if (isElementInViewport(parceirosImg)) {
          parceirosImg.classList.add('animacao9');
          window.removeEventListener('scroll', checkVisibility);
      }
  }

  window.addEventListener('scroll', checkVisibility);

  // Chamando checkVisibility também quando a página for carregada
  checkVisibility();
});

document.addEventListener('DOMContentLoaded', function() {
  var parceiros = document.querySelectorAll('.parceiros .parceiro');
  var centralIndex = Math.floor(parceiros.length / 2); // Calcula o índice do parceiro central

  parceiros[centralIndex].classList.add('central');
});

// Variável global para armazenar o player do YouTube
var player;

// Função que cria o player do YouTube
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'MxRLHg_STgY', // Substitua pelo ID do vídeo do YouTube
    playerVars: {
      'autoplay': 0, // Autoplay desativado
      'controls': 1, // Exibir controles do player
      'rel': 0, // Desativar vídeos relacionados no final
      'showinfo': 0 // Ocultar informações do vídeo
    }
  });
}

// Função que cria o player do YouTube
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player2', {
    height: '315',
    width: '560',
    videoId: 'HfKBL3JkUU&t=8s', // Substitua pelo ID do vídeo do YouTube
    playerVars: {
      'autoplay': 0, // Autoplay desativado
      'controls': 1, // Exibir controles do player
      'rel': 0, // Desativar vídeos relacionados no final
      'showinfo': 0 // Ocultar informações do vídeo
    }
  });
}