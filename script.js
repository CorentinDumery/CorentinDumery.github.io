


function repeat(){
  var txt = document.getElementById('u0').style.top ;
  var buff="";
  var x=0;
  for (var i=0;i<txt.length-1;i++){
    if (txt[i]!="p"){
      buff += txt[i];
    }
    else {
      x=parseInt(buff)-2;
      if (x <-1620) {  x=0; }
      break;
    }
  }
  document.getElementById('u0').style.top= x+"px";
}

setInterval(repeat, 30);

const snail0 = document.getElementById("snail");
var snailx = parseInt(snail0.style.left);
var count = 1;

function snail(){
  snailx = snailx + 10/count;
  console.log(count);
  count ++;
  snail0.style.setProperty("left", snailx+"%");
  if (snailx > 60) {
    snail0.style.transform = 'rotate('+180+'deg)';
    count = -count;
  }

}

var duringBg = "rgba(50,120,155,1)";
var afterBg = "rgba(150,220,255,1)";

function playTruc(n) {
  console.log(n);
  var audio;
  if (n==0) audio = new Audio("door.mp3");
  if (n==1) audio = new Audio("bell0.mp3");
  if (n==2) audio = new Audio("bowl.mp3");
  if (n==3) audio = new Audio("wink.mp3");
  if (n==4) audio = new Audio("slight.mp3");
  if (n==5) audio = new Audio("idea.mp3");
  if (n==6) audio = new Audio("bell1.mp3");
  if (n==7) audio = new Audio("ding.mp3");
  if (n==8) audio = new Audio("metal.mp3");

  if (n==0) var obj = document.getElementById('audio0');
  if (n==1) var obj = document.getElementById('audio1');
  if (n==2) var obj = document.getElementById('audio2');
  if (n==3) var obj = document.getElementById('audio3');
  if (n==4) var obj = document.getElementById('audio4');
  if (n==5) var obj = document.getElementById('audio5');
  if (n==6) var obj = document.getElementById('audio6');
  if (n==7) var obj = document.getElementById('audio7');
  if (n==8) var obj = document.getElementById('audio8');

  obj.style.background = duringBg;
  audio.play();
  setTimeout(function(){
    obj.style.background = afterBg;
  }, 400);

}
