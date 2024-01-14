var canvas = document.querySelector("canvas");
canvas.width = 200 ;
canvas.height = 50 ;
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle() = "blue";
ctx.fillStyle() = "blue";
ctx.moveTo(0,25);
ctx.lineTo(90,0);
ctx.lineTo(70,25);
ctx.lineTo(90,50);
ctx.lineTo(0,25);
ctx.stroke();