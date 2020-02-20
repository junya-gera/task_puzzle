"use strict";
{
  const image = new Image();
  image.onload = function(e){
    const canvas = document.getElementById("stage");
    const ctx = canvas.getContext("2d");
    
    
    
    ctx.drawImage(image,
      0, 0, 180, 180,
      0, 0, 180, 180).setAttribute(id,1_1);
    // ctx.drawImage(image)
  };
    
  image.src = "/assets/puzzle1.jpg";

}

