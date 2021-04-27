var picArray = new Array();
/*picArray[0] = "1.png";
picArray[1] = "2.png";
picArray[2] = "3.png";
picArray[3] = "4.png";
picArray[4] = "5.png";
picArray[5] = "6.png";
picArray[6] = "7.png";*/
picArray[0] = "gif1.jpg";
picArray[1] = "gif2.jpg";
picArray[2] = "gif3.jpg";
picArray[3] = "blank.png";

function getTime(name){
  var nowDate = new Date();
  var hour = nowDate.getHours();
  var minutes = nowDate.getMinutes();
  var seconds = nowDate.getSeconds();
  var str = "现在的时间" + hour + "时" + minutes + "分" + seconds + "秒";

  var timer = document.getElementsByClassName(name)[0];
  timer.innerHTML = str;
}

function ChangeImg(name, num){
  var i = document.getElementsByClassName(name)[0].children[0];

  i.src = "./pic/" + picArray[num];
}

//监控按键函数
document.onkeydown=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];          
   if(e && e.keyCode==32){ 
     // backspace 键要做的事情
     var a=document.getElementsByClassName("q")[0];
     a.innerHTML = "333";
  }
}

function dd(){
  
  var num1 = Math.round(Math.random()*11);
  var num2 = Math.round(Math.random()*1);//获取0-1的随机数
  var str1 = "pic" + num1;

  ChangeImg(str1, num2)

  for (var i=0;i<12;i++){
    if (i==num1) continue;
    ChangeImg("pic" + i,picArray.length-1);
  }
}

function fontsize(){
  
}

window.setInterval("dd()",3000);

window.setInterval("fontsize()",3000);

/*windowAddMouseWheel();
function windowAddMouseWheel() {
    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                alert("滑轮向上滚动");
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                alert("滑轮向下滚动");
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向上滚动时
                alert("滑轮向上滚动");
            }
            if (e.detail< 0) { //当滑轮向下滚动时
                alert("滑轮向下滚动");
            }
        }
    };
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
//滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc;
}*/ 