(function() {
  const inputText = document.querySelector('.text_field');
  const outputText = document.querySelector('.output');
  const playBtn = document.querySelector('#play');
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.stopPropagation();
    e.preventDefault();
    speak();
  })

  inputText.addEventListener('keyup', parsing);

  let wordsArray = [];
  const voices = window.speechSynthesis.getVoices();
  const voice = voices[10];
  const voiceURI = 'native';
  const volume = 1; // 0 to 1
  const rate = 1; // 0.1 to 10
  const pitch = 1;
  const lang = 'ru-Ru'; // 'en-US' to read in English;

  window.speak = function speak() {
    const msg = Object.assign(new SpeechSynthesisUtterance(), {
      voice,
      voiceURI,
      volume,
      rate,
      pitch,
      lang,
      text: wordsArray.join(' '),
      onend(e){
        console.log(`Finished in ${e.elapsedTime} seconds.`);
      }
    });

    if (speechSynthesis.speaking === false) {
      speechSynthesis.speak(msg);
    }
  }

  function parsing() {
    const lettersStr   = inputText.value;
    const lettersArray = lettersStr.toUpperCase().split('');
    wordsArray = [];

    for (const letter of lettersArray) {
      if (window.ICAO.hasOwnProperty(letter)) {
        wordsArray.push(window.ICAO[letter]);
      }
    }

    printText(wordsArray.join(' - '));
  }

  function printText(str) {
    outputText.innerHTML = str;
  }

  (function bgColorFlow() {

    let mainBgColor = 0;

    function backgroundFlow() {
      document.body.style.backgroundColor = `hsl(${mainBgColor}, 100%, 88%)`;
      mainBgColor += 3;
      if (mainBgColor > 360) mainBgColor = 0;
    }

    const timerId = setInterval(backgroundFlow, 200);
  }());

}())
