let words, word, definitionChoice;
let order;
let choices = [];
let correct = 0;
// svg image
function imageOne(){
  let a23 = '<svg><rect x="10" y="10" width="20" height="20" fill="orange" /><rect x="15" y="15" width="20" height="20" fill="blue" fill-opacity="0.7" /></svg>'
  return a23;
}
//select by line
function selectLine(a){
  for(let i=0; i<a2[a].length;i++){
    let a10 = "a" + a + i;
    if(document.getElementById(a10).style.color == "red"){
      deselect(a10);
    }else{
      for(let i2=0; i2<a2[a].length;i2++){
        a10 = "a" + a + i2;
        select(a10);
      }
      break;
    }
  }
  
}
//select by words
function selectWord(a, a1){
  let a5 = 'a' + a + a1;
  if(document.getElementById(a5).style.color == "red"){
    deselect(a5);
  }else{
    select(a5);
  }  
}
//change word color to red
function select(a){
  document.getElementById(a).style.color ="red";
}
//change word color to black
function deselect(a){
  document.getElementById(a).style.color ="black";
}
//display line a words
function line(a){
  let a4 = "";
  for(let i=0; i<a2[a].length; i++){
      let a7 = "a" + a + i
      a4 += `<span id='${a7}' onclick="selectWord('${a}', '${i}')">${a2[a][i][0]}</span>`;
  }
  return a4;
}
//display words line by line
function joinLine(){
  let a3 = "<p id='instruction'>Click on a line number to select the line or click on a word to select the word.</p><br>";
  for(let i=0; i<a2.length; i++){
      a3 += `<div class="lineButton2" onclick="selectLine(${i})">` + imageOne();
      a3 += `<div class="lineButton">${i}</div></div>` + line(i) + "<br>";
  }
  return a3;
}
//get all selected words
function questionSet(){
  let a11 = [];
  let a12 = 0;
  let a13 = "";
  for(let i=0; i < a2.length; i++){
    for(let i2=0; i2 < a2[i].length; i2++){
      a13 = "a"+i+i2;
      if(document.getElementById(a13).style.color == "red"){
        a11[a12] = [i, i2];
        a12 += 1;
      }
    }
  }
  return a11;
}
//randomize words order
function randomSet(){
  order = [];
  let a19 = words.length;
  for(let i=0; i<a19; i++){
    let a17 = Math.floor(Math.random() * (a19))
    while(order.includes(a17)){
      a17 = Math.floor(Math.random() * (a19))
    }
    order.push(a17);
  }  
}
//random choices
function choice(){
  let a14 = [];
  let a20 = a2.length;
  let a21 = Math.floor(Math.random()*4);
  for(let i=0; i<4; i++){
    let a15 = [];
    if(i == a21){
      a14.push(words[order[word]]);
    }else{
      a15[0] = Math.floor(Math.random()*(a20-1));
      a15[1] = Math.floor(Math.random() * (a2[a15[0]].length-1)); 
      a14[i] = a15;
/*
      
      while(a14.includes(a15)){
        a15 = Math.floor(Math.random()*(a20+1));
      }
*/
    }
  }
  
  choices = a14;
}
//display choice
function showChoices(){
  choice();
  let a25 = 2;
  // ce is 2 english is 3 chinese is 1
  if (definitionChoice == "english") {
    a25 = 3;
  } else if (definitionChoice == "chinese") {
    a25 = 1;
  }
  a20 = document.getElementById("content");
  for(let i=0; i<4; i++){
    a20.innerHTML += `<input type='radio' id=${i} name="choice" value="${a2[choices[i][0]][choices[i][1]][a25]}"><label for=${i}>${a2[choices[i][0]][choices[i][1]][a25]}</label><br>`;
  }
}
//create individual question
function question(){
  let a24 = 0;
  if(definitionChoice == "english"){
    a24 = 2;
  }
  if(word < words.length){
    document.getElementById("content").innerHTML = imageOne() + "<div id='q'>" + a2[words[order[word]][0]][words[order[word]][1]][a24] + "</div>" + "<br><br>";
    showChoices();
    word += 1;
  }else {
    document.getElementById("next").disabled = true;
    document.getElementById("result").disabled = true;
    document.getElementById("content").innerHTML = "Total correct questions: " + correct + " correct out of " + words.length + " questions.";
  }
}
//check radio button selection
//need to disable all radio button
function checking(){
  let a25 = 2;
  if (definitionChoice == "english") {
    a25 = 3;
  } else if (definitionChoice == "chinese") {
    a25 = 1;
  }
  answer = a2[words[order[word-1]][0]][words[order[word-1]][1]][a25];
  values = document.getElementsByName("choice");
  show = document.getElementById("message");
  let result = false;
  for(let i=0; i<values.length; i++){
    if(values[i].checked){
      if(values[i].value == answer){
        show.innerHTML = "\u2713 The correct answer is " + answer + ".<br>";
        //correct += 1;
        result = true;
      }else{
        show.innerHTML = "\u274C The correct answer is " + answer + ".<br>";
      }
      break; 
    } else if (i == 3) {
      show.innerHTML = "You did not make any selection.<br>";
    }
  }
  return result;
}
//next button function
function nextq(){
  let a22 = checking();
  if(a22){
    correct += 1;
  }
  question();
  document.getElementById("message").innerHTML = "";
}
//restart
function restartOne(){
  document.getElementById("message").innerHTML = "";
  multipleChoice(definitionChoice);
}
//create multiple choices
function questions(){
  if(questionSet().length){
    words = questionSet();
    word = 0;
    randomSet();
    question();
    document.getElementById("button").innerHTML = "<button id='restart' onclick='restartOne()'>Restart</button>";
    document.getElementById("button").innerHTML += "<button id='next' onclick='nextq()'>Next</button>";
    document.getElementById("button").innerHTML += "<button id='result' onclick='checking()'>Check answer</button>";
  }else{
    document.getElementById("content").innerHTML += "<div id='noSelection'>You did not select any words.</div>";
  }
}
//generating word choices and learning path
function multipleChoice(c){
 definitionChoice = c;
 const a1 = document.getElementById("content");
 a1.innerHTML = joinLine();
 document.getElementById("button").innerHTML = "<button onclick='questions()'>start</button>";
}
