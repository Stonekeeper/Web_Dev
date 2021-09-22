var randomNumber1=Math.random()*6+1
randomNumber1=Math.floor(randomNumber1);

var imageSelector="dice"+randomNumber1+".png";

var imagePath="images/"+imageSelector;

document.querySelectorAll("img")[0].setAttribute("src",imagePath);

// Player 2

var randomNumber2=Math.random()*6+1
randomNumber2=Math.floor(randomNumber2);

var imageSelector2="dice"+randomNumber2+".png";

var imagePath2="images/"+imageSelector2;

document.querySelectorAll("img")[1].setAttribute("src",imagePath2);

if(randomNumber1===randomNumber2)
  document.querySelector("h1").textContent=" Draw";

  if(randomNumber1>randomNumber2)
    document.querySelector("h1").textContent="Player 1 Wins.";
  else
    document.querySelector("h1").textContent="Player 2 Wins.";
