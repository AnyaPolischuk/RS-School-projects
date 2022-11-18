import { translateOfFunctionality } from './translate-functional';

export let changeLangBtn = document.querySelector('select');

export function changeUrlLang() {
  let lang = changeLangBtn.value;
  location.href = window.location.pathname + '#' + lang;
}

export function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  changeLangBtn.value = hash;

  for (let key in translateOfFunctionality) {
      let elem = document.querySelector('.lng-' + key);
      if (elem) {
          elem.innerHTML = translateOfFunctionality[key][hash];
      }
  }
}
