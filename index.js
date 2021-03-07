window.onload = function() {
  document.getElementById('main-content').innerHTML = 'Hello, github pages :)'
}

function getTime(name){
  var nowDate = new Date();
  var hour = nowDate.getHours();
  var minutes = nowDate.getMinutes();
  var seconds = nowDate.getSeconds();
  var str = "现在的时间" + hour + "时" + minutes + "分" + seconds + "秒";

  //alert(str);
  var timer = document.getElementsByClassName(name)[0];
  timer.innerHTML = str;
}