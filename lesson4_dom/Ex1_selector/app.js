//============= GetElementById ===================

const parag = document.getElementById("para");
parag.backgroundColor = "black";
parag.color = "white";
parag.fontSize = "30px";
// parag.fontStyle = "Georgia";

const clickhereButton = document.getElementById("btn");
clickhereButton.style.width = "200px";
clickhereButton.style.color = "red";
clickhereButton.style.fontSize = "18px";
clickhereButton.textContent = "Search";  // taglarin icindeki yaziyi degistirmek istersek

//============= GetElementByTagname ===================
const picture = document.getElementsByTagName("img");
picture[0].style.width = "300px";
picture[0].style.height = "300px";
picture[1].style.border = "3px solid red";



