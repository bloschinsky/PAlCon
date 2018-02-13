(function() {
  var inputText = document.querySelector(".text_field");
  var outputText = document.querySelector(".output");
  var playBtn = document.querySelector('#play');
  var form = document.querySelector('form');
  console.log(form);
  form.addEventListener('submit', (e) => {
    e.stopPropagation();
    e.preventDefault();
    speak();
  })

  var ICAO;

  ICAO = Object.create(null);

  ICAO = {
    A: "Álfa",
    B: "Brávo",
    C: "Chárlie",
    D: "Délta",
    E: "Écho",
    F: "Fóxtrot",
    G: "Gólf",
    H: "Hotél",
    I: "Índia",
    J: "Júliet",
    K: "Kílo",
    L: "Líma",
    M: "Mike",
    N: "Novémber",
    O: "Óscar",
    P: "Papá",
    Q: "Quebéc",
    R: "Rómeo",
    S: "Siérra",
    T: "Tángo",
    U: "Úniform",
    V: "Víctor",
    W: "Whísky",
    X: "X-ray",
    Y: "Yánkee",
    Z: "Zúlu",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    0: "Zero",
    А: "А́нна",
    Б: "Бори́с",
    В: "Васи́лий",
    Г: "Григо́рий",
    Д: "Дми́трий",
    Е: "Еле́на",
    Ё: "Еле́на",
    Ж: "Же́ня",
    З: "Зинаи́да",
    И: "Ива́н",
    Й: "Ива́н кра́ткий",
    К: "Константи́н",
    Л: "Леони́д",
    М: "Михаи́л",
    Н: "Никола́й",
    О: "О́льга",
    П: "Па́вел",
    Р: "Рома́н",
    С: "Семён",
    Т: "Татья́на",
    У: "Улья́на",
    Ф: "Фёдор",
    Х: "Харито́н",
    Ц: "ца́пля",
    Ч: "чайка",
    Ш: "Шу́ра",
    Щ: "щу́ка",
    Ъ: "твёрдый знак",
    Ы: "е́ры",
    Ь: "мя́гкий знак",
    Э: "э́хо",
    Ю: "Ю́рий",
    Я: "Я́ков"
  }

  inputText.addEventListener("keyup", parsing);
  // playBtn.addEventListener('click', speak);

  var wordsArray = [];
  var voices = window.speechSynthesis.getVoices();
  var voice = voices[10];
  var voiceURI = 'native';
  var volume = 1; // 0 to 1
  var rate = 1; // 0.1 to 10
  var pitch = 1;
  var lang = 'ru-Ru'; // 'en-US' to read in English;

  window.speak = function speak() {
    var msg = new SpeechSynthesisUtterance();
    msg.voice = voice; // Note: some voices don't support altering params
    msg.voiceURI = voiceURI;
    msg.volume = volume; // 0 to 1
    msg.rate = rate; // 0.1 to 10
    msg.pitch = pitch; //0 to 2
    msg.text = wordsArray.join(' ');
    msg.lang = lang;

    msg.onend = function(e) {
      console.log('Finished in ' + event.elapsedTime + ' seconds.');
    };

    if (speechSynthesis.speaking === false) {
      speechSynthesis.speak(msg);
    }
  }

  function parsing() {
    var lettersStr = inputText.value;
    var lettersArray = lettersStr.toUpperCase().split("");
    wordsArray = [];

    for (var i = 0; i < lettersArray.length; i++) {
      if (ICAO.hasOwnProperty(lettersArray[i])) {
        wordsArray.push(ICAO[lettersArray[i]]);
      }
    }

    printText(wordsArray.join(" - "));
  }

  function printText(str) {
    outputText.innerHTML = str;
  }

  (function bgColorFlow() {

    var mainBgColor = 0;

    var backgroundFlow = function() {
      document.body.style.backgroundColor = "hsl(" + mainBgColor + ", 100%, 88%)";
      mainBgColor += 3;
      if (mainBgColor > 360) mainBgColor = 0;
    }

    var timerId = setInterval(backgroundFlow, 200);
  }());

}())
