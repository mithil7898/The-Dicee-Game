function randomizor()
{
    var random = Math.random() * 6;
    random = Math.floor(random) + 1;
    return random;
}
randomNo1 = randomizor();
var randomImage1 = "images/dice" + randomNo1 +".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);

randomNo2 = randomizor();
var randomImage2 = "images/dice" + randomNo2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

if(randomNo1 > randomNo2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}

else 
    if(randomNo1 < randomNo2)
    {
        document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
    }
    else
    {
        document.querySelector("h1").innerHTML = "Draw"
    }

