"use strict";
window.onload = function(){
  const image = new Image();  //インスタンス化
  image.src = "/assets/puzzle1.jpg";  //画像ファイルの読み込み
  const canvas = document.getElementById("stage");
  const ctx = canvas.getContext("2d");

  image.addEventListener('load', function(e){
  
    ctx.drawImage(image,
      0, 0, 540, 540,
      0, 0, 540, 540);

  });

    const bottomRight = document.getElementById("bottom_right");
    console.log(bottomRight);
    const BRCtx = bottomRight.getContext("2d");
    BRCtx.fillStyle = "rgb(0, 0, 255,1.0)";   //9つの青マス

    BRCtx.fillRect(360,360,180,180); // 3_3



    // ctx.fillRect(  0,  0,180,180); // 1_1
    // ctx.fillRect(180,  0,180,180); // 1_2
    // ctx.fillRect(360,  0,180,180); // 1_3
    // ctx.fillRect(  0,180,180,180); // 2_1
    // ctx.fillRect(180,180,180,180); // 2_2
    // ctx.fillRect(360,180,180,180); // 2_3
    // ctx.fillRect(  0,360,180,180); // 3_1
    // ctx.fillRect(180,360,180,180); // 3_2
    // ctx.fillRect(360,360,180,180); // 3_3

    ctx.strokeStyle = "rgb(255,255,255,0.7)"; //枠の線
    ctx.beginPath();
    ctx.moveTo(180,0);
    ctx.lineTo(180,540);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(360,0);
    ctx.lineTo(360,540);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0,180);
    ctx.lineTo(540,180);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0,360);
    ctx.lineTo(540,360);
    ctx.stroke();
    
    
  
}

document.addEventListener("DOMContentLoaded", function(event) {
  new Vue({
    el: '#task',
    data: {
      methods: {
        bottom_right: function(){
          bottomRight.style.display="none";
        }
      }
    }
  })
})
