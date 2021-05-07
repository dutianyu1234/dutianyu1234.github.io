var nowNum = 1;
function LeftClick(name){
  var tmp = document.getElementsByClassName("center")[0].children[0];
  if (nowNum > 1){
    nowNum -= 1;
    tmp.src = "../pic/" + name + "/" + name + " (" + nowNum + ").png";
  }
}

function RightClick(name, maxNum){
  var tmp = document.getElementsByClassName("center")[0].children[0];
  if (nowNum < maxNum){
    nowNum += 1;
    tmp.src = "../pic/" + name + "/" + name + " (" + nowNum + ").png";
  }
}

function Menu(name, num){
  if (name == "zhu"){
    var tmp = document.getElementsByClassName("center")[0].children[0];
    nowNum = num;
    tmp.src = "../pic/" + name + "/" + name + " (" + nowNum + ").png";
  }
}

function showPage(){
  var p = document.getElementsByClassName("page")[0];
  p.innerHTML = "当前页数：" + nowNum;
}

setInterval("showPage()",100)