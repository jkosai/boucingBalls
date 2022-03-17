
var velocity = 100;
function allBall(){
  let positionX = Math.floor(Math.random()*300);
  let positionY = Math.floor(Math.random()*500);
  let reverse = false;
  let reverseY = false;
  var ball = create("ball");
  function moveBall() {
  
    let Xmin = 0;
    let Xmax = 300;
    let Ymin = 0;
    let Ymax = 500;

    if (reverse == false)
      {
      positionX += velocity;
      }

    if (reverse == true)
      {
      positionX = positionX - velocity;
      }

    if (positionY >= Ymax || positionY <= Ymin )
      {
      reverseY = !reverseY;
      }

    if (reverseY == false)
      {
      positionY += velocity;
      }

    if (reverseY == true)
      {
      positionY = positionY - velocity;
      }

    if (positionX >= Xmax || positionX <= Xmin )
      {
      reverse = !reverse;
      }

    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';  
  }

// This call the moveBall function every 100ms
  setInterval(moveBall,100);
}
for (let x=0; x<20;x++){
  allBall();
}
