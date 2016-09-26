//homework for week 3 of programming a to z with Dan Shiffman
// sketch pulls from a fortune cookie API found online here: http://docs.fortunecookie.apiary.io/


var loadedJSON;
var fortuneData;
var fortunes = [];
var words = [];
var randomNounURL = "https://api.wordnik.com/v4/words.json/randomWord?" +
                    "&excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&" +
                    "&includePartOfSpeech=noun" +
                    "&minLength=5&maxLength=-1" +
                    "&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";

// function preLoad() {
// //load the fortune cookie JSON from the API here.
// var url = 'http://fortunecookieapi.com/v1/fortunes';
// loadedJSON = loadJSON(url);
// console.log(loadedJSON);
// }

function setup() {
  // fortuneData = loadedJSON.message;
  // console.log(fortuneData);
  //var apiKey = no key
  var url = 'http://fortunecookieapi.com/v1/fortunes';
  // get http://fortunecookieapi.com/v1/fortunes?limit=&skip=&page=
  // limit defaul 100, max 1000
  // skip is the number of fortunes skipped before fetching
  // page number is taking into account given limit, default 1
  var query = "?limit=500&skip=&page=";



  loadJSON(url+query, gotData);
	// noCanvas();
  button1 = select('#submit');
  button1.mousePressed(createFortune);
  button2 = select('#clear');
  button2.mousePressed(removeFortune);
  button3 = select('#remix')
  button3.mousePressed(remixFortune);

}

function gotData(data){
  //the JSON will be stored in data
  fortunes = (data);
  // console.log(data[10].message);
}

function createFortune(){
  var i = floor(random(0,fortunes.length));
  console.log(i);
  console.log(fortunes.length);
  var forDiv = createDiv(fortunes[i].message);
  forDiv.style('background-color:#fff');
  forDiv.style('color:#ff0000');
  forDiv.style('font-family:Oleo Script, cursive');
  forDiv.style('font-size:16px');
  forDiv.style('text-align:center');
  forDiv.style('width:300px');
  forDiv.style('margin:auto');
  forDiv.style('padding:10px');
  forDiv.style('border-style:solid');
  forDiv.style('border-color:#c3e2c0');
  forDiv.style('border-width:2px;');
  // var text = createP(fortunes[i].message);
  // var text = fortunes[i].message;
  // h1 = text;
}

function removeFortune(){
  removeElements();
}

function remixFortune(){
  var i = floor(random(0,fortunes.length));
  var text = fortunes[i].message;
  // var regex = /(\W+)/;
  // var words = text.split(regex);
  // console.log('Total words:'+ words.length)
  var output = text.replace(/\b[a-z]{4,6}\b/gi, this.replacer);
  var forDiv = createDiv(output);
  forDiv.style('background-color:#fff');
  forDiv.style('color:#ff0000');
  forDiv.style('font-family:Oleo Script, cursive');
  forDiv.style('font-size:16px');
  forDiv.style('text-align:center');
  forDiv.style('width:300px');
  forDiv.style('margin:auto');
  forDiv.style('padding:10px');
  forDiv.style('border-style:solid');
  forDiv.style('border-color:#c3e2c0');
  forDiv.style('border-width:2px;');

  this.replacer = function(match){
    var len = match.length;
    if(len == 4){
      return "fast";
    } else if (len == 5)
    return "sugar";
  }
}
