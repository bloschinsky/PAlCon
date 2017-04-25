(function(){
var inputText = document.querySelector(".text_field");
var outputText = document.querySelector(".output");

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

inputText.addEventListener("keyup", function(){parsing()});


function parsing(){
  var lettersStr = inputText.value;
  var lettersArray = lettersStr.toUpperCase().split("");
  var worldsArray = [];
  
  //var worldsArray = lettersArray.map(function(letter){if (ICAO[letter]) return ICAO[letter]});
  
  
  for (var i=0; i < lettersArray.length; i++){
    if (ICAO[ lettersArray[i] ]){
    worldsArray.push( ICAO[ lettersArray[i] ] );
    }
  }
  
  printText(worldsArray.join(" - "));
}

function printText(str){
	outputText.innerHTML = str;
}

(function bgColorFlow(){

var mainBgColor=0;

var backgroundFlow = function(){
    document.body.style.backgroundColor = "hsl("+ mainBgColor +", 100%, 88%)";
    mainBgColor +=3;
    if (mainBgColor>360) mainBgColor=0;
}

var timerId = setInterval(backgroundFlow, 200);
}())

}())
