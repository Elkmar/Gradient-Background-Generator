const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient"); 
const randomColor = document.getElementById("randomColor")
const toLeftButton = document.getElementById("toLeft");
const toRightButton = document.getElementById("toRight");
const angleInput = document.getElementById("angleInput");
const switchSideButton = document.getElementById("switchSide");
const radialGradient = document.getElementById("radialGradient");

let mode = "rightGradient";

const setGradient = () => {
	let gradientStyle;
  
	switch (mode) {
	  case "leftGradient":
		gradientStyle = `linear-gradient(to left, ${color1.value}, ${color2.value})`;
		break;
	  case "angleGradient":
		gradientStyle = `linear-gradient(${angleInput.value}deg, ${color1.value}, ${color2.value})`;
		break;
	  case "radialGradient":
		gradientStyle = `radial-gradient(${color1.value}, ${color2.value})`;
		break;
	  default:
		gradientStyle = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	}
	body.style.background = gradientStyle;
	css.textContent = `${gradientStyle};`;
};

const generateRandomColor = () => {
	return "#" + Math.floor(Math.random()*16777215).toString(16);
}

const generateRandomBackground = () => {
	color1.value = generateRandomColor();
	color2.value = generateRandomColor();
	setGradient();
};

const setAngleGradient = () => {
	mode = "angleGradient";
	setGradient();
};

const setToRightGradient = () => {
	mode = "rightGradient";
	setGradient();
};

const setToLeftGradient = () => {
	mode = "leftGradient";
	setGradient();
};

const setRadialGradient = () => {
	mode = "radialGradient";
	setGradient();
};

const switchSide = () => {
	[color1.value, color2.value] = [color2.value, color1.value];
	setGradient();
  };

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomColor.addEventListener("click", generateRandomBackground);
toLeftButton.addEventListener("click", setToLeftGradient);
toRightButton.addEventListener("click", setToRightGradient);
angleInput.addEventListener("input", setAngleGradient);
switchSideButton.addEventListener("click", switchSide);
radialGradient.addEventListener("click", setRadialGradient);

generateRandomBackground();