export let aboutBtn = document.querySelector('.nav-list__item_about');
export let gameBtn = document.querySelector('.nav-list__item_game');
export let startGameBtn = document.querySelector('.start-about__btn');
let gamePage = document.querySelector('.game');
export let startPage = document.querySelector('.start-page');
export let galleryBtn = document.querySelector('.nav-list__item_gallery');
export let galleryField = document.querySelector('.gallery');

export function showStartPage() {
  startPage.style.display = 'block';
  gamePage.style.display = 'none';
  galleryField.style.display = 'none';
  aboutBtn.style.color = '#fbc315';
  aboutBtn.style.fontWeight = 'bold';
  gameBtn.style.color = 'white';
  gameBtn.style.fontWeight = '100';
  galleryBtn.style.color = 'white';
  galleryBtn.style.fontWeight = '100';

} 

export function showGamePage() {
  startPage.style.display = 'none';
  gamePage.style.display = 'block';
  galleryField.style.display = 'none';
  aboutBtn.style.color = 'white';
  aboutBtn.style.fontWeight = '100';
  gameBtn.style.color = '#fbc315';
  gameBtn.style.fontWeight = 'bold';
  galleryBtn.style.color = 'white';
  galleryBtn.style.fontWeight = '100';
}

export function showGalleryPage() {
  galleryField.style.display = 'block';
  galleryBtn.style.color = '#fbc315';
  galleryBtn.style.fontWeight = 'bold';
  startPage.style.display = 'none';
  gamePage.style.display = 'none';
  aboutBtn.style.color = 'white';
  aboutBtn.style.fontWeight = '100';
  gameBtn.style.color = 'white';
  gameBtn.style.fontWeight = '100';
}

