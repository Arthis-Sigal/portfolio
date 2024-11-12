var canvas = document.getElementById('matrix');
ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight;

var letters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
letters = letters.split('');

var fontSize = 10,
  columns = canvas.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = 'rgba(0, 255, 0, 1)';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

setInterval(draw, 50);


//https://zonetuto.fr/javascript/comment-faire-une-pluie-de-caracteres-effet-matrix-en-javascript/