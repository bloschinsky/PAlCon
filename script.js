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
  0: "Zero"
}

inputText.addEventListener("keyup", function(){parsing()});


function parsing(){
  var str = inputText.value;
  var tempInputArray = str.toUpperCase().split("");
  var tempOutputArray = [];
  
  for (var i=0; i < tempInputArray.length; i++)
  {
    if (ICAO[ tempInputArray[i] ]){
    tempOutputArray.push( ICAO[ tempInputArray[i] ] );
    }
  }
  
  printText(tempOutputArray.join(" - "));
}

function printText(str){
	outputText.innerHTML = str;
}

(function bgColorFlow(){

var mainBgColor=0;

var backgroundFlow = function(){
    document.body.style.backgroundColor = "hsl("+ mainBgColor +", 100%, 90%)";
    mainBgColor +=3;
    if (i>360) i=0;
}

var timerId = setInterval(backgroundFlow, 200);
}())

}())