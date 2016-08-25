var canvasUtils = {
  
};

var CANVAS_WIDTH  = 500;
var CANVAS_HEIGHT = 500;

function paintBackground(ctx) {
	ctx.beginPath();
	ctx.fillStyle = '#fff';
  ctx.fillRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function drawCircle(ctx, x, y, r, i, color) {
  ctx.beginPath();
  ctx.moveTo(x - r, y);
  ctx.arc(x, y, r, 0, i * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function bearEyebrow ( ctx , h1 , h2 , x0 , y0 , y1 , d , sColor ) { 
    ctx.beginPath ();
    ctx.moveTo ( x0 , y0 );
    var x1 = x0 + d ;
    var cp1x = x0 + d / 2 ; 
    var cp1y = y0 - h1 ;
    var cp2y = y0 - h2 ;
    ctx.quadraticCurveTo ( cp1x , cp1y , x1 , y1 );
    ctx.quadraticCurveTo ( cp1x , cp2y , x0 , y0 );
    ctx.fillStyle = sColor ;
    ctx.fill ();
}

function drawOval(ctx, x, y, a, b, i, color , isRotated, ang) {
	ctx.save();
	var r = (a > b) ? a : b;
	var ratioX = a / r;
	var ratioY = b / r;

	if (isRotated) {
		ctx.translate(x / ratioX, y / ratioY);
		ctx.rotate(ang * Math.PI / 180)	;
	}

	ctx.scale(ratioX, ratioY);
	ctx.beginPath();
	ctx.arc(x / ratioX, y / ratioY, r, 0, i * Math.PI, false);
	ctx.closePath();
	ctx.restore();

	ctx.fillStyle = color;
	ctx.fill();
}


function drawKumamon() {
  var canvas = document.getElementById('kumamon');
	var ctx    = canvas.getContext('2d');
 	paintBackground(ctx);
  drawOval(ctx, 250, 210, 160, 130, 2, '#000');

  bearEyebrow( ctx ,20 , 10 , 150, 133 , 130 , 32 , "#fff");       
	bearEyebrow( ctx , 20 , 10 , 310 , 130 , 133 , 32 , "#fff"); 
  // left ear
  drawCircle(ctx, 100, 120, 40, 2, '#000');
  drawCircle(ctx, 100, 120, 20, 2, '#fff');

  // right ear
  drawCircle(ctx, 400, 120, 40, 2, '#000');
  drawCircle(ctx, 400, 120, 20, 2, '#fff');

  // 腮紅
  drawCircle(ctx, 100, 260, 35, 2, 'red');
  drawCircle(ctx, 400, 260, 35, 2, 'red');

  // eye
  drawCircle(ctx, 170, 170, 30, 2, '#fff');
  drawOval(ctx, 170, 170, 5, 11, 2, '#000');

  drawCircle(ctx, 320, 170, 30, 2, '#fff');
  drawOval(ctx, 320, 170, 5, 11, 2, '#000');

  // mouth
  drawOval(ctx, 250, 250, 80, 60,2, '#fff');

  drawOval(ctx,250, 220, 30, 20, 1, '#000');
  drawOval(ctx,250, 250, 30, 30, 1, '#000', true, 180);

	drawOval(ctx,250, 280, 10, 20, 2, '#000');
}


window.onload = function() { drawKumamon(); }