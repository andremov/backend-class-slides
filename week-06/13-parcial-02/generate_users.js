const first_names = [
  'Daniel',
  'Mariana',
  'Alison',
  'Zahet',
  'María',
  'Juan',
  'Javier',
  'Orlando',
  'Antonio',
  'Pedro',
];
const genders = {
  Daniel: 'M',
  Mariana: 'F',
  Alison: 'F',
  Zahet: 'M',
  María: 'F',
  Juan: 'M',
  Javier: 'M',
  Orlando: 'M',
  Antonia: 'F',
  Pedro: 'M',
};
const last_names = [
  'Hernandez',
  'Fernández',
  'Hoyos',
  'Ramírez',
  'Rodríguez',
  'Gomez',
  'Gonzalez',
  'Pascal',
  'Banderas',
];
const heights = [1.5, 1.6, 1.7, 1.8, 1.9, 2.0];
const semesters = [1, 2, 3, 4];
const extra_curriculars = [
  'Fotografía',
  'Natación',
  'Baloncesto',
  'Voleibol',
  'Poesía',
  'Modelo Naciones Unidas',
];
const assignments = [
  'Parcial 1',
  'Parcial 2',
  'Parcial 3',
  'Parcial 4',
  'Talleres',
  'Quices',
  'Proyecto 1',
  'Proyecto 2',
  'Asistencia',
];
const courses = [
  'Ingles 1',
  'Ingles 2',
  'Ingles 3',
  'Español 1',
  'Español 2',
  'Español 3',
  'Calculo 1',
  'Calculo 2',
  'Calculo 3',
  'Analisis de Datos',
  'Optimizacion',
  'Compiladores',
  'Algebra Lineal',
];
const weights = [0.2, 0.25, 0.3, 0.35, 0.4];
const ids = ['asc5sde', 'desc4pco', 'hexa6oci'];

const randomInt = (cap) => Math.floor(Math.random() * cap);
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const randomFirstName = () => first_names[randomInt(first_names.length)];
const randomLastName = () => last_names[randomInt(last_names.length)];
const randomHeight = () => heights[randomInt(heights.length)];
const randomSemester = () => semesters[randomInt(semesters.length)];
const randomAssignmentName = () => assignments[randomInt(assignments.length)];
const randomCourseName = () => courses[randomInt(courses.length)];
const randomExtraCurricularName = () => extra_curriculars[randomInt(extra_curriculars.length)];
const randomId = (index) => `${ids[randomInt(ids.length)]}${('' + index).padStart(2, '0')}`;
const randomWeight = () => weights[randomInt(weights.length)];
const randomGrade = () => randomInt(50) / 10;

const randomBirthDate = () => `${randomInt(27) + 1}-${randomInt(11) + 1}-${randomInt(5) + 2000}`;

const randomPersonalInfo = () => ({
  first_name: randomFirstName(),
  last_name: randomLastName(),
  height: randomHeight(),
  semester: randomSemester(),
  birthdate: randomBirthDate(),
});

const randomExtraCurriculars = (capSemester) => {
  const maxEC = (capSemester - 1) * (Math.random() * 2);
  let extra_curriculars = [];
  for (let index = 0; index < maxEC; index++) {
    extra_curriculars.push({
      name: randomExtraCurricularName(),
      semester: randomInt(capSemester - 1),
    });
  }
  return extra_curriculars;
};

const randomWeights = () => {
  let totalWeight = 0;
  let weights = [];

  while (totalWeight < 0.6) {
    weights.push(randomWeight());
    totalWeight += weights[weights.length - 1];
  }

  weights.push(Math.round((1 - totalWeight) * 100) / 100);
  return weights;
};

const randomAssignments = () => {
  const weights = randomWeights();
  return weights.map((w) => ({
    name: randomAssignmentName(),
    weight: w,
    grade: randomGrade(),
  }));
};

const randomCourse = (capSemester) => ({
  semester: randomInt(capSemester - 1) + 1,
  name: randomCourseName(),
  assignments: randomAssignments(),
});

const randomCourses = (capSemester) => {
  const maxC = capSemester * ((Math.random() + 1) * 4);
  let courses = [];

  for (let index = 0; index < maxC; index++) {
    courses.push(randomCourse(capSemester));
  }

  return courses;
};

const randomStudent = (index) => {
  let object = { id: randomId(index), personal_info: randomPersonalInfo() };
  return {
    ...object,
    personal_info: { ...object.personal_info, gender: genders[object.personal_info.first_name] },
    extra_curriculars: randomExtraCurriculars(object.personal_info.semester),
    courses: randomCourses(object.personal_info.semester),
  };
};

let students = [];
for (let index = 0; index < 50; index++) {
  students.push(randomStudent(index));
}
console.log(JSON.stringify(students));
