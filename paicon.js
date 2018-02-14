import { initBgColorFlow } from './backgroundFlow.js';
import { ICAO } from './icao.js';
import { parsing } from './parsing.js';
import { speak } from './speak.js';

export class PAICon {
  constructor() {
    this.init();
  }

  setElements() {
    this.inputEl = document.querySelector('.text_field');
    this.outputEl = document.querySelector('.output');
    this.form = document.querySelector('form');
  }

  addListeners() {
    this.addKeyupListener();
    this.addSubmitListener();
  }

  addKeyupListener() {
    const parsingHandler = parsing.bind(this, this.inputEl, this.outputEl);
    this.inputEl.addEventListener('keyup', parsingHandler);
  }

  addSubmitListener() {
    const speakBinded = speak.bind(this);
    const speakHandler = e => {
        e.preventDefault();
        speakBinded();
    };
    this.form.addEventListener('submit', speakHandler);
  }

  init() {
    this.wordsArray = [];
    this.ICAO = ICAO;
    this.setElements();
    this.addListeners();
    initBgColorFlow();
  }
}




 

  

