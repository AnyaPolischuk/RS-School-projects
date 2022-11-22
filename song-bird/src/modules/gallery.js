import birdsData from "./birdsdata";
import birdsDataEn from './birdsdata-en';
import { changeLangBtn } from './change-lang'; 

let audioTrack, info, cardWrapper;
let gallery = document.querySelector('.gallery-wrapper');

// создание галереи на нужном языке
export function changeLangGallery() {
  if (cardWrapper) {
    gallery.innerHTML = '';
  }
  if (changeLangBtn.value === 'ru') {
    for (let i = 0; i < birdsData.length - 1; i++) {
      for (let j = 0; j < birdsData[i].length - 1; j++) {
        
        cardWrapper = document.createElement('div'); 
        cardWrapper.classList.add('card-wrapper');
        
        info = document.createElement('div');
        info.classList.add('gallery-info');
        cardWrapper.append(info);
  
        let img = document.createElement('img');
        img.classList.add('gallery-info__img');
        img.src = birdsData[i][j].image;
        info.append(img);
  
        let name = document.createElement('h2');
        name.classList.add('gallery-info__name');
        name.innerHTML = birdsData[i][j].name;
        info.append(name);
  
        audioTrack = document.createElement('audio');
        audioTrack.controls = true;
        audioTrack.classList.add('gallery-audio');
        audioTrack.src = birdsData[i][j].audio;
        info.append(audioTrack);
  
        let text = document.createElement('p');
        text.classList.add('gallery__text');
        text.innerHTML = birdsData[i][j].description;
        cardWrapper.append(text);
  
        gallery.append(cardWrapper);
      }
    }
  } else if (changeLangBtn.value === 'en') {
    for (let i = 0; i < birdsDataEn.length - 1; i++) {
      for (let j = 0; j < birdsDataEn[i].length - 1; j++) {
        
        cardWrapper = document.createElement('div'); 
        cardWrapper.classList.add('card-wrapper');
        
        info = document.createElement('div');
        info.classList.add('gallery-info');
        cardWrapper.append(info);
  
        let img = document.createElement('img');
        img.classList.add('gallery-info__img');
        img.src = birdsDataEn[i][j].image;
        info.append(img);
  
        let name = document.createElement('h2');
        name.classList.add('gallery-info__name');
        name.innerHTML = birdsDataEn[i][j].name;
        info.append(name);
  
        audioTrack = document.createElement('audio');
        audioTrack.controls = true;
        audioTrack.classList.add('gallery-audio');
        audioTrack.src = birdsDataEn[i][j].audio;
        info.append(audioTrack);
  
        let text = document.createElement('p');
        text.classList.add('gallery__text');
        text.innerHTML = birdsDataEn[i][j].description;
        cardWrapper.append(text);
  
        gallery.append(cardWrapper);
      }
    }
  }
}
