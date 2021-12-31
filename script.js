var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random")
let hexString = "0123456789abcdef";

function setInitialGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, 
		${color2.value})`
}

function setGradient() {
	body.style.background = 
	`linear-gradient(to right, ${color1.value}, 
	${color2.value})`

	css.textContent = `${body.style.background};`;
}

function setRandomGradient() {
	color1.value = randomColor();
	color2.value = randomColor();

	body.style.background = 
	`linear-gradient(to right, ${color1.value}, 
	${color2.value})`

	css.textContent = `${body.style.background};`;
}
	
	
	let randomColor = () => {
		let hexCode = "#";
		for( i=0; i<6; i++){
			hexCode += hexString[Math.floor(Math.random() * hexString.length)];
		}
		return hexCode;
	}
	
 

setInitialGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandomGradient)