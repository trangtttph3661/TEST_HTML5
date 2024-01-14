var canvas1 = document.getElementById("myCanvas");
    canvas1.width=200;
    canvas1.height=50;

    var ctx = canvas1.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle= "blue";
    ctx.fillStyle = "blue";
    
    ctx.moveTo(0,25);
    ctx.lineTo(90,0);
    ctx.lineTo(90,25);
    ctx.lineTo(90,50);
    ctx.lineTo(0,25);

    ctx.fill();
    ctx.stroke();


    // var canvas1 = document.getElementById("myCanvas");
    // canvas1.width = 200;
    // canvas1.height = 50;
    // var ctx = canvas1.getContext("2d");

    // ctx.beginPath();
    // ctx.strokeStyle="black";
    // ctx.fillStyle="black";

    // ctx.moveTo (0,25);
    // ctx.lineTo (90,0);
    // ctx.lineTo (90,25);
    // ctx.lineTo (0,25);

    // ctx.fill();
    // ctx.stroke();