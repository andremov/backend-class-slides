const firstnamesF = [
  "Mariana",
  "María",
  "Alison",
  "Veronica",
  "Alejandra",
  "Valentina",
  "Carolina",
  "Paola",
  "Shadia",
  "Angela",
];
const firstnamesM = [
  "Nicolas",
  "Daniel",
  "Francisco",
  "Alberto",
  "Juan",
  "Cristian",
  "Luis",
  "Alvaro",
  "Sebastian",
  "Santiago",
  "Antonio",
  "Diego",
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
  "Molina",
  "Rueda",
  "Villa",
  "Avila",
  "Fabregas",
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
  "Calculo",
  "Español",
  "Filosofía",
  "Estadistica",
  "Economía",
];
const extra_curriculars = [
  "Fotografía",
  "Natación",
  "INNOVA",
  "Baloncesto",
  "Voleibol",
  "Poesía",
  "Modelo Naciones Unidas",
];
const assignments = [
  "Parcial 1",
  "Parcial 2",
  "Parcial 3",
  "Parcial 4",
  "Talleres",
  "Quices",
  "Proyecto 1",
  "Proyecto 2",
  "Asistencia",
];
const weights = [
  [0.25, 0.25, 0.25, 0.25],
  [0.25, 0.25, 0.3, 0.2],
  [0.2, 0.2, 0.3, 0.2, 0.1],
  [0.2, 0.2, 0.2, 0.2, 0.2],
  [0.2, 0.2, 0.3, 0.2, 0.1],
];
const minHeight = 1.47;
const maxHeight = 1.95;
const minClasses = 2;
const maxClasses = 5;
const minExtra = 0;
const maxExtra = 3;
const minSemester = 1;
const maxSemester = 6;
const classLevels = ["I", "II", "III"];
const minBirthYear = 2002;
const maxBirthYear = 2006;

function shuffle(inputArray) {
  let array = JSON.parse(JSON.stringify(inputArray));
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

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
  return Math.floor(value * 100) / 100;
}

function generateAssignments() {
  const classWeights = getRandomElementFromList(weights);

  return classWeights.map((w) => ({
    nota: roundNumber(getRandom2(0, 5)),
    peso: w,
  }));
}

function generateClasses(semester) {
  const progress = classnames.map((cn) => ({
    name: cn,
    current: 0,
  }));

  const classList = [];

  for (let index = 0; index < semester; index++) {
    const classesToGenerate = getRandom(minClasses, maxClasses);
    shuffle(progress.filter((c) => c.current < 2))
      .slice(0, classesToGenerate)
      .forEach((cdata) => {
        classList.push({
          name: cdata.name + " " + classLevels[cdata.current],
          notas: generateAssignments(),
          semestre: index + 1,
        });
        const classIndex = progress.findIndex((s) => s.name === cdata.name);
        progress[classIndex].current += 1;
      });
  }

  return classList;
}

function padNumberTwoDigits(number) {
  return (number < 10 ? "0" : "") + number;
}

function padNumberThreeDigits(number) {
  return (number < 100 ? "0" : "") + padNumberTwoDigits(number);
}

function generatePersonalInformation() {
  const gender = ["F", "M"][Math.floor(getRandom(0, 2))];
  const nombre = getRandomElementFromList(
    gender === "M" ? firstnamesM : firstnamesF
  );
  const apellido = getRandomElementFromList(lastnames);
  const altura = roundNumber(getRandom(minHeight, maxHeight));
  const birthYear = Math.floor(getRandom(minBirthYear, maxBirthYear));
  const birthMonth = padNumberTwoDigits(Math.floor(getRandom(1, 12)));
  const birthDay = padNumberTwoDigits(Math.floor(getRandom(1, 28)));
  const nacimiento = `${birthYear}-${birthMonth}-${birthDay}`;
  const correo =
    nombre[0].toLowerCase() + apellido.toLowerCase() + "@uninorte.edu.co";

  return {
    gender,
    nombre,
    apellido,
    correo,
    altura,
    nacimiento,
  };
}

function generateExtraCurriculars(semester) {
  const extra = [];

  for (let newSemester = 0; newSemester < semester; newSemester++) {
    const count = getRandom(minExtra, maxExtra);
    shuffle(extra_curriculars)
      .slice(0, count)
      .forEach((element) => {
        extra.push({
          nombre: element,
          semestre: newSemester + 1,
        });
      });
  }

  return extra;
}

function generateStudent(count) {
  const _id = "par02estid" + padNumberThreeDigits(count + 1);
  const semester = Math.floor(getRandom(minSemester, maxSemester));
  const info_personal = generatePersonalInformation();
  const info_matricula = generateClasses(semester);
  const info_extra_curriculares = generateExtraCurriculars(semester);

  return {
    _id,
    info_personal,
    info_matricula,
    info_extra_curriculares,
  };
}

function generateStudents(studentCount) {
  const studentList = [];

  for (let index = 0; index < studentCount; index++) {
    studentList.push(generateStudent(index));
  }

  return studentList;
}

var fs = require("fs");
fs.writeFile(
  "./datos.json",
  JSON.stringify(generateStudents(347)),
  function (err) {
    if (err) {
      console.log(err);
    }
  }
);
