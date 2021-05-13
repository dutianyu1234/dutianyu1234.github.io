var nowNum = 1;
function LeftClick(name){
  var tmp = document.getElementsByClassName("center")[0].children[0];
  if (nowNum > 1){
    nowNum -= 1;
    tmp.src = images[nowNum-1].src;
    //"../pic/" + name + "/" + name + " (" + nowNum + ").png";
  }
}

function RightClick(name, maxNum){
  var tmp = document.getElementsByClassName("center")[0].children[0];
  if (nowNum < maxNum){
    nowNum += 1;
    tmp.src = images[nowNum-1].src;
  }
}

function Menu(name, num){
    var tmp = document.getElementsByClassName("center")[0].children[0];
    nowNum = num;
    tmp.src = images[nowNum-1].src;
    //"../pic/" + name + "/" + name + " (" + nowNum + ").png";
}

function showPage(){
    var p = document.getElementsByClassName("page")[0];
    p.innerHTML = "当前页数：" + nowNum;
}

var images = new Array();
function preload() {
  var strUrl=window.location.href;
  var arrUrl=strUrl.split("/");
  var strPage=arrUrl[arrUrl.length-1];
  if(strPage.indexOf("?")>-1){
      var pageName=strPage.split("?");
      strPage=pageName[0];
  }
  strPage = strPage.split(".")[0]; 
  
  var p1 = document.getElementsByClassName("load")[0];

  for (i = 0; i < 19; i++) {
    p1.innerHTML = "正在加载图片：" + i;
      images[i] = new Image();
      images[i].src = "../pic/" + strPage + "/" + strPage + "(" + (i+1) + ").png";
  }
  p1.innerHTML = "";
}


window.onload=function(){
setInterval("showPage()",100);

preload();
}
