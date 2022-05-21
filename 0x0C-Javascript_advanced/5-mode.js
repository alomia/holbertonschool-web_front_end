function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = `${size}${"px"}`;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const p = document.createElement("p");
  const textP = document.createTextNode("Welcome Holberton!");
  p.appendChild(textP);
  document.body.appendChild(p);

  const buttonSpooky = document.createElement("button");
  const textSpooky = document.createTextNode("Spooky");
  buttonSpooky.appendChild(textSpooky);
  document.body.appendChild(buttonSpooky);
  buttonSpooky.onclick = function () {
    spooky();
  };

  const buttonDarkMode = document.createElement("button");
  const textDarkMode = document.createTextNode("Dark mode");
  buttonDarkMode.appendChild(textDarkMode);
  document.body.appendChild(buttonDarkMode);
  buttonDarkMode.onclick = function () {
    darkMode();
  };

  const buttonScreamMode = document.createElement("button");
  const textScreamMode = document.createTextNode("Scream mode");
  buttonScreamMode.appendChild(textScreamMode);
  document.body.appendChild(buttonScreamMode);
  buttonScreamMode.onclick = function () {
    screamMode();
  };
}

main();
