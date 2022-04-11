let score =100;
var rayon = 100;
var xMousePos = 0;
var yMousePos = 0;

var paint = document.getElementById("paint"); 
const scoreSpan = document.querySelector('.score');

document.onmousemove = function(e) {
  xMousePos = e.clientX + window.pageXOffset;
  yMousePos = e.clientY + window.pageYOffset - 79;
  console.log(xMousePos, yMousePos);
};

function RandomColor() {
    let color = "#" + (Math.floor(Math.random()*0xFFFFFF)).toString(16); 
    return color;
}

paint.addEventListener('click', event => {
    var paint = document.getElementById("paint"); 
    var context = paint.getContext("2d");
    context.beginPath();
    context.arc(xMousePos,yMousePos, rayon, 0, 2 * Math.PI);
    context.fillStyle=RandomColor();
    context.fill();
});

paint.addEventListener('wheel', function(e) {
    if (event.deltaY>0){
        if (rayon > 1)
        {
        rayon = rayon -5;
        score -=5;
        scoreSpan.textContent = score;
        }
        else{
            return false;
        }
  
    }
    else {
        rayon = rayon +5;
        score +=5;
        scoreSpan.textContent = score;
    }
});