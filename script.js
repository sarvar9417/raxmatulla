let sections = [
  { name: "Hisoblash jarayonini tanlang", section: "" },
  { name: "Shar hajmini hisoblash", section: "hajm" },
  { name: "Shar  to'la sirtini hisoblash", section: "tula_sirt" },
  { name: "Shar sektorining to'la sirtini", section: "sektor" },
  { name: "Shar sektorining hajmi", section: "sektor_hajm" },
  { name: "Shar segmantining yon sirtini hisoblash", section: "segment_sirti" },
  {
    name: "Shar segmantining to'la sirtini hisoblash",
    section: "segment_tula_sirti",
  },
  {
    name: "Shar segmantining hajmini hisoblash",
    section: "segment_hajm",
  },
];

let formulas = {
  hajm: {
    properties: [
      {
        text: "Radiusni kiriting:",
        id: "R",
        placeholder: "0",
      },
      {
        text: "Diametrni kiriting:",
        id: "D",
        placeholder: "0",
      },
    ],
    img: "./image/volumeofsphere.png",
    result: "Sharning hajmi: ",
    measure: "m<sup>3</sup>",
    R: 0,
    D: 0,
    calc() {
      return this.D >= 0
        ? (Math.PI * this.D * this.D * this.D) / 6
        : this.R > 0
        ? (4 / 3) * Math.PI * this.R * this.R * this.R
        : " ma'lumotlar to'liq kiritilmagan";
    },
  },
  tula_sirt: {
    properties: [
      {
        text: "Radiusni kiriting:",
        id: "R",
        placeholder: "0",
      },
      {
        text: "Diametrni kiriting:",
        id: "D",
        placeholder: "0",
      },
    ],
    img: "./image/2.png",
    result: "Sharning to'la sirti: ",
    measure: "m<sup>2</sup>",
    R: 0,
    D: 0,
    calc() {
      return this.D >= 0
        ? Math.PI * this.D * this.D
        : this.R > 0
        ? Math.PI * 4 * this.R * this.R
        : " ma'lumotlar to'liq kiritilmagan";
    },
  },
  sektor: {
    properties: [
      {
        text: "Katta radiusni kiriting:",
        id: "R",
        placeholder: "0",
      },
      {
        text: "Kichik radiusni kiriting:",
        id: "r",
        placeholder: "0",
      },
      {
        text: "Balandlikni kiriting:",
        id: "H",
        placeholder: "0",
      },
    ],
    img: "./image/3.png",
    result: "Shar sektorining to'la sirti: ",
    measure: "m<sup>2</sup>",
    R: 0,
    r: 0,
    H: 0,
    calc() {
      return this.R > 0 && this.r > 0 && this.H > 0
        ? Math.PI * this.R * (2 * this.H + this.r)
        : " ma'lumotlar to'liq kiritilmagan";
    },
  },
  sektor_hajm: {
    properties: [
      {
        text: "Radiusni kiriting:",
        id: "R",
        placeholder: "0",
      },
      {
        text: "Balandlikni kiriting:",
        id: "H",
        placeholder: "0",
      },
    ],
    result: "Shar sektorining hajmi: ",
    measure: "m<sup>3</sup>",
    R: 0,
    H: 0,
    img: "./image/3.png",
    calc() {
      return this.R > 0 && this.H > 0
        ? ((2 * Math.PI) / 3) * this.R * this.R * this.H
        : " ma'lumotlar to'liq kiritilmagan";
    },
  },
  segment_sirti: {
    properties: [
      {
        text: "Radiusni kiriting:",
        id: "R",
        placeholder: "0",
      },
      {
        text: "Balandlikni kiriting:",
        id: "H",
        placeholder: "0",
      },
    ],
    result: "Shar segmentining yon sirti: ",
    measure: "m<sup>2</sup>",
    R: 0,
    H: 0,
    img: "./image/4.png",
    calc() {
      return this.R > 0 && this.H > 0
        ? 2 * Math.PI * this.R * this.H
        : " ma'lumotlar to'liq kiritilmagan";
    },
  },
  segment_tula_sirti: {
    properties: [
      {
        text: "Katta radiusni kiriting:",
        id: "R",
        placeholder: "0",
      },
      {
        text: "Kichik radiusni kiriting:",
        id: "r",
        placeholder: "0",
      },
      {
        text: "Balandlikni kiriting:",
        id: "H",
        placeholder: "0",
      },
    ],
    result: "Shar segmentining to'la sirti: ",
    measure: "m<sup>2</sup>",
    R: 0,
    H: 0,
    r: 0,
    img: "./image/4.png",
    calc() {
      return this.R > 0 && this.H > 0 && this.r > 0
        ? 2 * Math.PI * this.R * this.H + Math.PI * this.r * this.r
        : " ma'lumotlar to'liq kiritilmagan";
    },
  },
  segment_hajm: {
    properties: [
      {
        text: "Radiusni kiriting:",
        id: "R",
        placeholder: "0",
      },
      {
        text: "Balandlikni kiriting:",
        id: "H",
        placeholder: "0",
      },
    ],
    result: "Shar segmentining hajmi: ",
    measure: "m<sup>3</sup>",
    R: 0,
    H: 0,
    img: "./image/4.png",
    calc() {
      return this.R > 0 && this.H > 0
        ? (1 / 3) * Math.PI * this.H * this.H * (3 * this.R - this.H)
        : " ma'lumotlar to'liq kiritilmagan";
    },
  },
};

let shapes = {
  r: {
    first:
      '<div class="ecvator"><div class="radius"></div></div><div class="dataName text-black text-sm">',
    text: "Radius: ",
    second: "</div > ",
  },
  H: {
    first:
      '<div class="ecvator"><div class="radius"></div></div><div class="dataName text-black text-sm">',
    text: "Radius: ",
    second: "</div > ",
  },
  R: {
    first:
      '<div class="ecvator"><div class="radius"></div></div><div class="dataName text-black text-sm">',
    text: "Radius: ",
    second: "</div > ",
  },
  D: {
    first:
      '<div class="ecvator"><div class="diametr"></div></div><div class="dataName text-black text-sm">',
    text: "Diametr: ",
    second: "</div > ",
  },
};

var globalSection;

let inputsdiv = document.getElementById("inputs");
let select = document.getElementById("select");
const btn = document.getElementById("btn");
const clr = document.getElementById("clr");
let result = document.getElementById("result");
let ball = document.getElementById("ball");
let img = document.getElementById("img");

function changeSection(section) {
  globalSection = section;
  inputsdiv.innerHTML = "";
  section = formulas[section].properties.forEach((property) => {
    const div = document.createElement("div");
    div.classList = "flex justify-between text-base py-1";
    const p = document.createElement("p");
    p.classList = "w-1/4";
    p.innerText = property.text;
    const input = document.createElement("input");
    input.placeholder = property.placeholder;
    input.id = property.id;
    input.type = "number";
    input.name = "input";
    input.classList =
      "rounded outline-none border-teal-900 border-2 px-2 w-1/3 text-right text-black";
    div.appendChild(p);
    div.appendChild(input);
    inputsdiv.appendChild(div);
  });
}

for (const section of sections) {
  let option = document.createElement("option");
  option.value = section.section;
  option.innerText = section.name;
  select.appendChild(option);
}

select.addEventListener("change", () => {
  changeSection(select.value);
});

btn.addEventListener("click", () => {
  result.innerHTML = "";
  let inputs = document.querySelectorAll("input[name=input]");
  inputs.forEach((input) => {
    formulas[globalSection][input.id] = parseFloat(input.value);
    if (formulas[globalSection][input.id]) {
      shape =
        shapes[input.id].first +
        shapes[input.id].text +
        formulas[globalSection][input.id] +
        shapes[input.id].second;
    }
  });
  let p1 = document.createElement("p");
  p1.classList = "mr-4 font-semibold";
  p1.innerText = formulas[globalSection].result;
  let p2 = document.createElement("p");
  p2.innerHTML =
    formulas[globalSection].calc() + " " + formulas[globalSection].measure;
  result.appendChild(p1);
  result.appendChild(p2);

  let image = document.createElement("img");
  image.src = formulas[globalSection].img;
  image.classList = "w-96 inline-block";
  document.getElementById("img").append(image);
});

clr.addEventListener("click", () => {
  let inputs = document.querySelectorAll("input[name=input]");
  inputs.forEach((input) => {
    input.value = "";
  });
});
