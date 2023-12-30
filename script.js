document.addEventListener('DOMContentLoaded', function () {
    // Initialize the carousel
    var carousel = new bootstrap.Carousel(document.getElementById('recipeCarousel'), {
      interval: 2000, // Set your desired interval in milliseconds
      pause: 'hover', // Pause on mouse enter
    });

    // Clone items for seamless autoplay
    let items = document.querySelectorAll('.sponsor .carousel .carousel-item')

    items.forEach((el) => {
      const minPerSlide = 10
      let next = el.nextElementSibling
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
      }
    });

    // Pause and play the carousel on mouse enter and leave
    document.getElementById('recipeCarousel').addEventListener('mouseenter', function () {
      carousel.pause();
    });

    document.getElementById('recipeCarousel').addEventListener('mouseleave', function () {
      carousel.cycle();
    });

    const articleNavLinks = document.querySelectorAll(".article .navbar li");
    const photoCount = 5;
    const videoDuration = 105;

    var formatDuration = new Date(0);
    formatDuration.setSeconds(videoDuration);
    var timeString = formatDuration.toISOString().substr(11, 8);

    function createIconElement(iconPath) {
      const iconElement = document.createElement("img");
      iconElement.src = iconPath;
      iconElement.alt = "Icon";
      iconElement.style.width = "20px";
      document.body.appendChild(iconElement);
      return iconElement;
    }

    articleNavLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          const cards = document.querySelectorAll(".article .card");
          cards.forEach(function (card) {
            const countElement = card.querySelector(".count-element");
            if (countElement) {
              card.removeChild(countElement);
            }
          });
      
          if (link.textContent.trim() === "Foto") {
            cards.forEach(function (card) {
              const newCountElement = document.createElement("div");
              newCountElement.className = "count-element";
      
              const fotoIcon = createIconElement("./public/img/foto.svg");
              newCountElement.appendChild(fotoIcon);
      
              const countText = document.createElement("span");
              countText.textContent = `${photoCount} Photos`;
      
              newCountElement.appendChild(countText);
      
              // Position the count element at the top right of the image
              newCountElement.style.position = "absolute";
              newCountElement.style.top = "10px";
              newCountElement.style.right = "10px"; // Adjusted right positioning
              newCountElement.style.backgroundColor = "rgba(33, 36, 39, 0.50)";
              newCountElement.style.padding = "5px";
              newCountElement.style.borderRadius = "5px";
              newCountElement.style.color = "white";
      
              card.appendChild(newCountElement);
            });
          } else if (link.textContent.trim() === "Video") {
            cards.forEach(function (card) {
              const newCountElement = document.createElement("div");
              newCountElement.className = "count-element";
      
              const videoIcon = createIconElement("./public/img/video.svg");
              newCountElement.appendChild(videoIcon);
      
              const countText = document.createElement("span");
              countText.textContent = `${timeString}`;
      
              newCountElement.appendChild(countText);
      
              // Position the count element at the top right of the image
              newCountElement.style.position = "absolute";
              newCountElement.style.top = "10px";
              newCountElement.style.right = "10px"; // Adjusted right positioning
              newCountElement.style.backgroundColor = "rgba(33, 36, 39, 0.50)";
              newCountElement.style.padding = "5px";
              newCountElement.style.borderRadius = "5px";
              newCountElement.style.color = "white";
      
              card.appendChild(newCountElement);
            });
          }
        });
      });
      

    const menuIcon = document.querySelector('[data-bs-toggle="collapse"]');
    const navbarNav = document.getElementById('navbarNav');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if(navbarCollapse.classList.contains('show')) {
        navbarNav.classList
    }

    menuIcon.addEventListener('click', function () {
      navbarNav.classList.toggle('show');
      if (menuIcon.src.includes('menu.svg')) {
        menuIcon.src = './public/img/close.svg';
      } else {
        menuIcon.src = './public/img/menu.svg';
        navbarNav.classList.remove('show');
      }
    });
  });