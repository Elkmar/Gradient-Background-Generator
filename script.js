var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");
var buttonSwitchSide = document.getElementById("buttonSwitchSide");
var angle = document.getElementById("angle");

function setGradient() {
	body.style.background = "linear-gradient(to right,"+ color1.value + ", " + color2.value + ")";
	css.innerHTML = body.style.background + ";" + "<br><br>Color 1(hex) : " + color1.value + " Color 2(hex) : " + color2.value;
}

function randomRgb() {
    var o = Math.round, r = Math.random, s = 255;
    return "rgb(" + o(r()*s) + "," + o(r()*s) + "," + o(r()*s) +")" ;
}

function setRandomGradient() {
	let random1 = randomRgb();
	let random2 = randomRgb();
	body.style.background = "linear-gradient(to right," + random1 + "," + random2 + ")";
	color1.value = RGBToHex(random1);
	color2.value = RGBToHex(random2);
	css.innerHTML = body.style.background + ";" + "<br><br>Color 1(hex) : " + color1.value + " Color 2(hex) : " + color2.value;
}

function RGBToHex(rgb) {
	// Choose correct separator
	let sep = rgb.indexOf(",") > -1 ? "," : " ";
	// Turn "rgb(r,g,b)" into [r,g,b]
	rgb = rgb.substr(4).split(")")[0].split(sep);
  
	let r = (+rgb[0]).toString(16),
		g = (+rgb[1]).toString(16),
		b = (+rgb[2]).toString(16);
  
	if (r.length == 1)
	  r = "0" + r;
	if (g.length == 1)
	  g = "0" + g;
	if (b.length == 1)
	  b = "0" + b;
  
	return "#" + r + g + b;
}

function switchSide() {
	let first = color1.value;
	let second = color2.value;
	color1.value = second;
	color2.value = first
	body.style.background = "linear-gradient(to right,"+ color1.value + ", " + color2.value + ")";
	css.innerHTML = body.style.background + ";" + "<br><br>Color 1(hex) : " + color1.value + " Color 2(hex) : " + color2.value;

}

setRandomGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomGradient);

buttonSwitchSide.addEventListener("click", switchSide);