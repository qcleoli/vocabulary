const a2 = [[["信札","书信, 信件","letter"],["拆封","chinese definition", "English definition"],["谁","chinese definition", "English definition"],["为难","chinese definition", "English definition"]],[["不过","chinese definition", "English definition"],["寥寥","chinese definition", "English definition"],["数行","chinese definition", "English definition"]],[["娟秀","chinese definition", "English definition"],["字迹","chinese definition", "English definition"],["温柔","chinese definition", "English definition"],["却","chinese definition", "English definition"],["感伤","chinese definition", "English definition"]],[["你","chinese definition", "English definition"],["将"],["心事"],["上了"],["淡妆"]],[["该说的"],["话"],["却"],["被"],["仔细","chinese definition", "English definition"],["收藏","chinese definition", "English definition"]],[["暮色","chinese definition", "English definition"],["望","chinese definition", "English definition"],["垂杨","chinese definition", "English definition"]],[["拱桥","chinese definition", "English definition"],["粼粼","chinese definition", "English definition"],["月光","chinese definition", "English definition"]],[["忆","chinese definition", "English definition"],["往事","chinese definition", "English definition"],["我","chinese definition", "English definition"],["走笔","chinese definition", "English definition"],["也","chinese definition", "English definition"],["阑珊","chinese definition", "English definition"]],[["红颜如霜","chinese definition", "English definition"],["凝结了","chinese definition", "English definition"],["过往","chinese definition", "English definition"]],[["芦苇花","chinese definition", "English definition"],["开","chinese definition", "English definition"],["岁","chinese definition", "English definition"],["已寒","chinese definition", "English definition"]],[["若","chinese definition", "English definition"],["霜","chinese definition", "English definition"],["又降","chinese definition", "English definition"],["路遥","chinese definition", "English definition"],["漫长","chinese definition", "English definition"]],[["墙外","chinese definition", "English definition"],["是谁","chinese definition", "English definition"],["在吟唱","chinese definition", "English definition"],["凤求凰","chinese definition", "English definition"]],[["梨园","chinese definition", "English definition"],["台上","chinese definition", "English definition"],["西皮二黄","chinese definition", "English definition"]],[["却","chinese definition", "English definition"],["少了","chinese definition", "English definition"],["你","chinese definition", "English definition"],["无人问暖","chinese definition", "English definition"]],[["谁","chinese definition", "English definition"],["在","chinese definition", "English definition"],["彼岸","chinese definition", "English definition"],["天涯一方","chinese definition", "English definition"]],[["一句","chinese definition", "English definition"],["甚安无念","chinese definition", "English definition"]],[["你说","chinese definition", "English definition"],["落笔","chinese definition", "English definition"],["太难","chinese definition", "English definition"]],[["窗外","chinese definition", "English definition"],["古琴","chinese definition", "English definition"],["幽兰","chinese definition", "English definition"]],[["琴声","chinese definition", "English definition"],["平添","chinese definition", "English definition"],["孤单","chinese definition", "English definition"]],[["我","chinese definition", "English definition"],["墨","chinese definition", "English definition"],["走了","chinese definition", "English definition"],["几行","chinese definition", "English definition"]],[["泪","chinese definition", "English definition"],["潸然","chinese definition", "English definition"],["落了款","chinese definition", "English definition"]],[["思念","chinese definition", "English definition"],["徒留","chinese definition", "English definition"],["纸上","chinese definition", "English definition"]],[["一整篇","chinese definition", "English definition"],["被晕染","chinese definition", "English definition"]],[["何故","chinese definition", "English definition"],["远走","chinese definition", "English definition"],["潇湘","chinese definition", "English definition"]],[["你","chinese definition", "English definition"],["却","chinese definition", "English definition"],["语多委婉","chinese definition", "English definition"]],[["走过","chinese definition", "English definition"],["萧瑟","chinese definition", "English definition"],["秋凉","chinese definition", "English definition"]],[["等来","chinese definition", "English definition"],["芒草","chinese definition", "English definition"],["催黄","chinese definition", "English definition"]],[["而","chinese definition", "English definition"],["我","chinese definition", "English definition"],["遥望","chinese definition", "English definition"],["轻轻叹","chinese definition", "English definition"]],[["捎来的","chinese definition", "English definition"],["他乡","chinese definition", "English definition"]],[["到底","chinese definition", "English definition"],["隔","chinese definition", "English definition"],["几条江","chinese definition", "English definition"]],[["一封信","chinese definition", "English definition"],["到底","chinese definition", "English definition"],["转了","chinese definition", "English definition"],["几道弯","chinese definition", "English definition"]],[["缘分","chinese definition", "English definition"],["飘落在","chinese definition", "English definition"],["山外山","chinese definition", "English definition"]],[["而","chinese definition", "English definition"],["鱼雁","chinese definition", "English definition"],["不在往返","chinese definition", "English definition"]]];
let words, word;
let order = [];
let choices = [];
//select by line
function testTwo(a){
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
function testOne(a, a1){
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
      a4 += `<span id='${a7}' onclick="testOne('${a}', '${i}')">${a2[a][i][0]}</span>`;
  }
  return a4;
}
//display words line by line
function join(a){
  let a3 = "";
  for(let i=0; i<a.length; i++){
      a3 += `<button onclick="testTwo(${i})">i</button>` + line(i) + "<br>";
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
  let a19 = words.length;
  console.log(a19);
  for(let i=0; i<a19; i++){
    let a17 = Math.floor(Math.random() * (a19))
    console.log("randomSet2" + a17);
    while(order.includes(a17)){
      a17 = Math.floor(Math.random() * (a19))
      console.log("randomSet1" + a17);
    }
    order.push(a17);
  }  
  console.log("randomSet" + " " + order);
}
//random choices
function choice(){
  let a14 = [];
  let a20 = a2.length;
  let a21 = Math.floor(Math.random()*4);
  console.log("a1" + a21);
  for(let i=0; i<4; i++){
    let a15 = [];
    if(i == a21){
      a14.push(words[order[word]]);
 //     console.log("a2 " + a14);
    }else{
      a15[0] = Math.floor(Math.random()*(a20));
      a15[1] = Math.floor(Math.random() * (a2[a15[0]].length));
 //     console.log("a15 " + a15); 
      a14[i] = a15;
 //     console.log("a14i " + a14);
/*
      
      while(a14.includes(a15)){
        a15 = Math.floor(Math.random()*(a20+1));
      }
*/
    }
  }
  
  choices = a14;
  console.log("a14" + a14);
}
//display choice
function showChoices(){
  choice();
  a20 = document.getElementById("content");
  for(let i=0; i<4; i++){
  a20.innerHTML += `<input type='radio' id=${i} name="choice" value=${a2[choices[i][0]][choices[i][1]][2]}><label for=${i}>${a2[choices[i][0]][choices[i][1]][2]}</label><br>`;
  }
}
//create individual question
function question(){
  if(word < words.length){
    document.getElementById("content").innerHTML = a2[words[order[word]][0]][words[order[word]][1]][0] + "<br>";
    showChoices();
    word += 1;
  }else {
    document.getElementById("next").disabled = true;
  }
}
//create multiple choices
function questions(){
  words = questionSet();
  word = 0;
  randomSet();
  question();
  document.getElementById("button").innerHTML = "<button id='next' onclick='question()'>Next</button>";
}
function multipleChoice(){
 const a1 = document.getElementById("content");
 a1.innerHTML = join(a2, "<br>");
 document.getElementById("button").innerHTML = "<button onclick='questions()'>start</button>";
}
