
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el contenedor del carrusel
    const carousel = document.querySelector('.meet-team');
    const cards = carousel.querySelectorAll('.card');
    
    // Configuración del carrusel
    let currentIndex = 0;
    let cardsToShow = 3; // Número de tarjetas visibles a la vez en pantallas grandes
    
    // Adaptamos según el ancho de la pantalla
    function updateCardsToShow() {
      if (window.innerWidth < 768) {
        cardsToShow = 1; // Móviles: 1 tarjeta visible
      } else if (window.innerWidth < 992) {
        cardsToShow = 2; // Tablets: 2 tarjetas visibles
      } else {
        cardsToShow = 3; // Escritorio: 3 tarjetas visibles
      }
      updateCarousel(); // Actualizamos el carrusel después de cambiar el número de tarjetas
    }
    
    // Crear los controles del carrusel como flechas a los costados
    function createControls() {
      // Contenedor principal del carousel (para posicionamiento relativo)
      carousel.style.position = 'relative';
      
      // Flecha anterior
      const prevButton = document.createElement('div');
      prevButton.innerHTML = '&lt;';
      prevButton.className = 'carousel-control prev-button';
      prevButton.style.position = 'absolute';
      prevButton.style.left = '0';
      prevButton.style.top = '50%';
      prevButton.style.transform = 'translateY(-50%)';
      prevButton.style.zIndex = '10';
      prevButton.style.width = '40px';
      prevButton.style.height = '40px';
      prevButton.style.backgroundColor = '#FDB913';
      prevButton.style.color = 'white';
      prevButton.style.display = 'flex';
      prevButton.style.alignItems = 'center';
      prevButton.style.justifyContent = 'center';
      prevButton.style.borderRadius = '50%';
      prevButton.style.fontSize = '20px';
      prevButton.style.fontWeight = 'bold';
      prevButton.style.cursor = 'pointer';
      prevButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
      
      // Flecha siguiente
      const nextButton = document.createElement('div');
      nextButton.innerHTML = '&gt;';
      nextButton.className = 'carousel-control next-button';
      nextButton.style.position = 'absolute';
      nextButton.style.right = '0';
      nextButton.style.top = '50%';
      nextButton.style.transform = 'translateY(-50%)';
      nextButton.style.zIndex = '10';
      nextButton.style.width = '40px';
      nextButton.style.height = '40px';
      nextButton.style.backgroundColor = '#FDB913';
      nextButton.style.color = 'white';
      nextButton.style.display = 'flex';
      nextButton.style.alignItems = 'center';
      nextButton.style.justifyContent = 'center';
      nextButton.style.borderRadius = '50%';
      nextButton.style.fontSize = '20px';
      nextButton.style.fontWeight = 'bold';
      nextButton.style.cursor = 'pointer';
      nextButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
      
      // Agregar efecto hover
      prevButton.onmouseover = function() {
        this.style.backgroundColor = '#FDB913';
      };
      prevButton.onmouseout = function() {
        this.style.backgroundColor = '#FDB913';
      };
      nextButton.onmouseover = function() {
        this.style.backgroundColor = '#FDB913';
      };
      nextButton.onmouseout = function() {
        this.style.backgroundColor = '#FDB913';
      };
      
      // Agregamos eventos a los botones
      prevButton.addEventListener('click', previousSlide);
      nextButton.addEventListener('click', nextSlide);
      
      // Añadimos los botones directamente al carrusel
      carousel.appendChild(prevButton);
      carousel.appendChild(nextButton);
    }
    
    // Aplicar estilos iniciales al carrusel
    function setupCarousel() {
      // Establecemos el contenedor como un elemento con posición relativa
      carousel.style.position = 'relative';
      carousel.style.overflow = 'hidden';
      carousel.style.display = 'flex';
      carousel.style.transition = 'all 0.3s ease';
      
      // Establecemos el estilo para cada tarjeta
      cards.forEach(card => {
        card.style.flex = `0 0 ${100/cardsToShow}%`;
        card.style.padding = '10px';
        card.style.boxSizing = 'border-box';
        card.style.transition = 'all 0.3s ease';
      });
      
      // Creamos los controles
      createControls();
    }
    
    // Actualizar la visualización del carrusel
    function updateCarousel() {
      // Ocultamos todas las tarjetas primero
      cards.forEach(card => {
        card.style.display = 'none';
      });
      
      // Mostramos solo las tarjetas que deberían ser visibles
      for (let i = 0; i < cardsToShow; i++) {
        let index = (currentIndex + i) % cards.length;
        cards[index].style.display = 'block';
      }
    }
    
    // Mostrar la siguiente slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel();
    }
    
    // Mostrar la slide anterior
    function previousSlide() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCarousel();
    }
    
    // Inicializar el carrusel
    setupCarousel();
    updateCardsToShow();
    
    // Actualizar el carrusel cuando cambie el tamaño de la ventana
    window.addEventListener('resize', updateCardsToShow);
    

  });

  
   