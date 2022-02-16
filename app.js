const container = document.querySelector(".container");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const submit = document.querySelector("form");
const clear = document.querySelector(".btnClear");
let hue = 1;

function addRow(amountRows, amountColumns) {
  let hNode = "";
  let vNode = "";
  const divBox = '<div class="box"></div>';
  for (i = 0; i < amountRows; i++) {
    hNode += `<div class="horizontal row${i}"></div>`;
    vertical.innerHTML = hNode;
  }
  for (let k = 0; k < amountColumns; k++) {
    vNode += divBox;
  }
  for (j = 0; j < amountColumns; j++) {
    let row = vertical.querySelector(`.row${j}`);
    row.innerHTML = vNode;
  }
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => box.addEventListener("mouseenter", draw));
  clear.addEventListener("click", () => {
    boxes.forEach((box) => (box.style.backgroundColor = "grey"));
  });
}

function setDemensions(e) {
  e.preventDefault();
  gameRows = document.querySelector("#gameRows").value;
  if (gameRows > 100) {
    alert("Please choose a number less than 100");
    return;
  } else {
    addRow(gameRows, gameRows);
  }
}

addRow(16, 16);

function draw() {
  hue = hue + 10;
  let bgColor = `hsl(${hue}, 100%, 50%)`;
  this.style.backgroundColor = bgColor;
  if (hue > 359) {
    hue = 0;
  }
}

function setActive() {
  this.classList.add("active");
}

function removeActive() {
  this.classList.remove("active");
}

submit.addEventListener("submit", setDemensions);
clear.addEventListener("mouseenter", setActive);
clear.addEventListener("mouseleave", removeActive);
