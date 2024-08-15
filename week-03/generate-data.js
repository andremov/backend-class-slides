const firstnames = [
  "Mariana",
  "Nicolas",
  "Daniel",
  "María",
  "Alison",
  "Francisco",
  "Alberto",
  "Juan",
  "Cristian",
  "Luis",
  "Veronica",
  "Alejanda",
];
const lastnames = [
  "Martinez",
  "Gomez",
  "Gonzalez",
  "Lopez",
  "Hernandez",
  "Fernandez",
  "Ramirez",
  "Rodriguez",
];
const classnames = [
  "Inglés",
  "Matemáticas",
  "Castellano",
  "Química",
  "Sociales",
  "Ciencia",
  "Historia",
  "Fisica",
];
const minHeight = 1.47;
const maxHeight = 1.95;
const minClasses = 2;
const maxClasses = 7;
const classLevels = ["I", "II", "III"];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandom2(min, max) {
  return Math.random() * 1.25 * (max - min) + min;
}

function getRandomElementFromList(list) {
  return list[Math.floor(getRandom(0, list.length))];
}

function roundNumber(value) {
  return Math.floor(value * 10) / 10;
}

function generateClass() {
  const name = getRandomElementFromList(classnames);
  const level = getRandomElementFromList(classLevels);

  return {
    nombre: name + " " + level,
    nota: roundNumber(getRandom2(0, 5)),
  };
}

function generateClasses() {
  const classesToGenerate = getRandom(minClasses, maxClasses);
  const classList = [];

  for (let index = 0; index < classesToGenerate; index++) {
    classList.push(generateClass());
  }

  return classList;
}

function padNumber(number) {
  return (number < 100 ? "0" : "") + (number < 10 ? "0" : "") + number;
}

function generateStudent(count) {
  const nombre = getRandomElementFromList(firstnames);
  const apellido = getRandomElementFromList(lastnames);
  const altura = roundNumber(getRandom(minHeight, maxHeight));
  const cursos = generateClasses();
  const _id = "par01estid" + padNumber(count + 1);

  return {
    _id,
    nombre,
    apellido,
    altura,
    cursos,
  };
}

function generateStudents(studentCount) {
  const studentList = [];

  for (let index = 0; index < studentCount; index++) {
    studentList.push(generateStudent(index));
  }

  return studentList;
}

// console.log();

var fs = require("fs");
fs.writeFile(
  "datos.json",
  JSON.stringify(generateStudents(127)),
  function (err) {
    if (err) {
      console.log(err);
    }
  }
);
