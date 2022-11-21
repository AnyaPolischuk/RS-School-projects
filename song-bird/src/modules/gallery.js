//import { galleryField } from "./header";
import birdsData from "./birdsdata";
import playImg from '../img/play-btn.png';
import pauseImg from '../img/pause-btn.png';
let audioTrack;
let finishTime;
let minutes;
let seconds;
let info;
let cardWrapper;

let gallery = document.querySelector('.gallery-wrapper');

export function createCards() { 

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

      let audio = document.createElement('div');
      audio.classList.add('audio-wrapper');
      let play = document.createElement('img');
      play.classList.add('gallery__play');
      play.src = playImg;
      audio.append(play);
      info.append(audio);

      let progress = document.createElement('div');
      progress.classList.add('gallery-progress');
      let progressBar = document.createElement('div');
      progressBar.classList.add('gallery-progress__bar');
      progress.append(progressBar);
      info.append(progress);

      //длина аудио
      

      audioTrack = new Audio(birdsData[i][j].audio);
  
      let startTime = document.createElement('div');
      startTime.classList.add('gallery-start');
      startTime.innerHTML = '0:00';
      info.append(startTime);
      finishTime = document.createElement('div');
      info.append(finishTime);
      finishTime.classList.add('gallery-finish');
      
      //audioTrack.addEventListener('loadeddata', findLengthOfAudio);
                        
      finishTime.innerHTML = '3:23';
      info.append(finishTime);
      



      let text = document.createElement('p');
      text.classList.add('gallery__text');
      text.innerHTML = birdsData[i][j].description;
      cardWrapper.append(text);



      gallery.append(cardWrapper);
    }
  }
}



// function findLengthOfAudio() {
  
//   minutes = Math.floor(this.duration / 60);
//   seconds = Math.floor(this.duration % 60);

//     if (minutes < 10) {
//         minutes = String(minutes);
//     }
//     if (seconds < 10) {
//         seconds = '0' + String(seconds);
//     }
    
//    finishTime.innerHTML = `${minutes}:${seconds}`;
  
//    console.log(finishTime.innerHTML)
// }