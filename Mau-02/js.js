var canvas = document.getElementById('mycanvas');
    canvas.width=150;
    canvas.height=100;
var ctx = canvas.getContext('2d');
    // ctx.fillText('Hello World!',0,25);
    // ctx.fillStyle = "FFFFF";
    // ctx.fillRect(0,0,150,75);
    // ctx.strokeStyle="EF0E0E";
    ctx.fillStyle = 'black';
    ctx.fillText('Hello World!',24,25);

    ctx.beginPath();// khai báo tạo mới đường thẳng 
    ctx.strokeStyle = 'blue';
    ctx.moveTo(50,0);     // Điểm bắt đầu
    ctx.lineTo(0,25);
    ctx.lineTo(50,50);
    ctx.lineTo(100,25);
    ctx.lineTo(50,0);
    ctx.stroke(); // băt đầu vẽ 

    ctx.beginPath();// khai báo tạo mới đường thẳng 
    ctx.strokeStyle = 'blue';
    ctx.moveTo(55,5);     // Điểm bắt đầu
    ctx.lineTo(5,30);
    ctx.lineTo(55,55);
    ctx.lineTo(105,30);
    ctx.lineTo(55,5);
    ctx.stroke(); // băt đầu vẽ 

    // ctx.beginPath();        // Khai báo vẽ đường thẳng mới
    // ctx.strokeStyle="EF0E0E";
    // ctx.fillStyle = 'blue';
    // ctx.moveTo(50,0);     // Điểm bắt đầu
    // ctx.lineTo(0,25);
    // ctx.lineTo(50,50);
    // ctx.lineTo(100,25);
    // ctx.lineTo(50,0);
    // ctx.strokeStyle = 'blue'; // fill màu
    // // ctx.fill();
    // ctx.stroke(); // băt đầu vẽ 
    
    // ctx.beginPath();        // Khai báo vẽ đường thẳng mới
    // ctx.strokeStyle="EF0E0E";
    // ctx.fillStyle = 'blue';
    // ctx.moveTo(55,5);     // Điểm bắt đầu
    // ctx.lineTo(5,30);
    // ctx.lineTo(55,55);
    // ctx.lineTo(105,30);
    // ctx.lineTo(55,5);
    // ctx.strokeStyle = 'blue'; // fill màu
    // // ctx.fill();
    // ctx.stroke();