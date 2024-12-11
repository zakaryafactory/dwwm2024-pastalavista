// DOM selection
const themeToggle = document.querySelector('.navigation__item--themeToggle');

const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const images = document.querySelectorAll('.gallery__item img');
const lightboxCloseButton = document.querySelector('.lightbox__closeButton');
const lightboxBackground = document.querySelector('.lightbox__background');

const reservationForm = document.querySelector('.reservation__form');
const nameInput = document.querySelector('.form__input--name');

/////////////////////////////////////////////////////////////
// DARK THEME
/////////////////////////////////////////////////////////////

themeToggle.addEventListener('click', () => {
  const body = document.body;
  const newTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  body.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme); // Sauvegarder le thème dans le stockage local
});

//////////////////////////////////////////////////////////////
// LIGHTBOX
/////////////////////////////////////////////////////////////

// Ouverture de la lightbox
images.forEach((image) => {
  image.addEventListener('click', () => {
    lightboxImage.innerHTML = '<img src="' + image.src + '" />';
    lightbox.style.visibility = 'visible';
  });
});

// Fermeture de la lightbox
lightboxCloseButton.addEventListener('click', () => {
  lightboxImage.innerHTML = '';
  lightbox.style.visibility = 'hidden';
});
lightboxBackground.addEventListener('click', () => {
  lightboxImage.innerHTML = '';
  lightbox.style.visibility = 'hidden';
});

//////////////////////////////////////////////////////////////
// Formulaire
/////////////////////////////////////////////////////////////

// Contrôle des champs
reservationForm.addEventListener('submit', (e) => {
  let submitting = true;
  e.preventDefault();
  // champ nom (minimun 3 caractètres)
  if (nameInput.value.length <= 3) {
    submitting = false;
    alert('Veuillez saisir au minimum 3 caractères dans le champ nom');
  }

  if (submitting) {
    alert('Formulaire valide');
    //reservationForm.submit();
  }
});

nameInput.addEventListener('keypress', () => {
  if (nameInput.value.length + 1 <= 3) {
    nameInput.style.backgroundColor = '#f8d4d4  ';
  } else {
    nameInput.style.backgroundColor = 'white';
  }
});
