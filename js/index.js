const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  const contactMenu = document.querySelector('#contacts-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos > 2345) {
    contactMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

const openModalBtn = document.querySelector("[data-show-form]");
const sendContactButton = document.querySelector("[data-send-contact]");
const modal = document.getElementById("myModal");
const closeModal = document.getElementsByClassName("close-modal")[0];

openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

sendContactButton.addEventListener("click", function (event) {
  const form = document.querySelector('[data-form]');
  if (!form.checkValidity()) {
    return;
  }
  this.innerHTML = '<a>Enviando...</a>';
  this.disabled = true;
  const button = this;
  setTimeout(function () {
    modal.style.display = "none";
    button.innerHTML = '<a>Enviar</a>';
    button.disabled = false;
  }, 1500)
})
