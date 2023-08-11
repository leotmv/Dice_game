randomNumber1 = Math.floor(Math.random()*(7-1)+1);
randomNumber2 = Math.floor(Math.random()*(7-1)+1);

var img_name1 = "/dice"+randomNumber1+".png";
var img_name2 = "/dice"+randomNumber2+".png";
var path_img = "./assets";

var access_img1 = document.querySelector("img.img1");
access_img1.setAttribute("src", path_img+img_name1);
var access_img2 = document.querySelector("img.img2");
access_img2.setAttribute("src", path_img+img_name2);

if (randomNumber1 > randomNumber2){
    var msg = document.getElementsByTagName("h1")[0];
    msg.innerHTML = "Player 1 won! 🚩"
}
else if (randomNumber1 === randomNumber2){
    var msg = document.getElementsByTagName("h1")[0];
    msg.innerHTML = "Draw!"
}
else{
    var msg = document.getElementsByTagName("h1")[0];
    msg.innerHTML = "Player 2 won! 🚩"
}


