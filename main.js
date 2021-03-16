//ukol 1 Písmo v odstavci po najetí myši ztuční
function vytucnit(){
  let tucne = document.querySelector("p");
  tucne.classList.toggle("tucnyodstavec");
  //console.log("vytucni");
}
 
//ukol 2 Tlačítko “červené po kliknutí” bude odstavce i přidávat/odebírat třídu, která bude barvu písma v odstavci měnit na červenou.

function zcervenat(){
  let zcervenani = document.querySelector("p");
  zcervenani.classList.toggle("barvaodstavce");
  //console.log("cervena");
}

//úkol 3: přidej tlačítko “větší po kliknutí”, které písmo zvětší o jeden pixel oproti jeho aktuální velikost.

function zvetsit(){
  let zvetsit = document.querySelector("p");
  //zvetsit.style.fontSize = (currentSize + 1) + 'px';
  //console.log("zvetseno");
  style = window.getComputedStyle(zvetsit, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    zvetsit.style.fontSize = (currentSize + 1) + 'px';
}

//úkol 4: Dopracuj ovládání audio souboru
//nastavení hlasitost zvuku na 0, 0.5 a 1
//vrácení se na začátek

function prehraj(elementSelector){
  let audioElement = document.querySelector(elementSelector);
  //vyhledava string elementSelector - parametrizovani fce
  audioElement.play();
}

function zastav(){
  let audioElement = document.querySelector('#js-audio');
  audioElement.pause();
}

function nazacatek(elementSelector){
  let audioElement = document.querySelector(elementSelector);
  audioElement.currentTime = 0;
}

function hlasitostmin(elementSelector){
  let audioElement = document.querySelector(elementSelector);
  audioElement.volume = 0;
}

function hlasitostnorm(elementSelector){
  let audioElement = document.querySelector(elementSelector);
  audioElement.volume = 0.5;
}

function hlasitostmax(elementSelector){
  let audioElement = document.querySelector(elementSelector);
  audioElement.volume = 1;
}