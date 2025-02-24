---
title: Javascript Avanzado II
theme: ../theme
transition: none
layout: cover
exportFilename: 13-javascript-avanzado-2
---


# Javascript Avanzado II

✏️ 2025-01 ➖ ⏱️ 45 min.

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: center
---

# Some y Every

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Some y Every

::contents::
```js {*}{lines:true}
function muyPeque(item, index, array) {
  return item < 3;
}

const numeros = [0, 1, 2, 3, 4, 5];

console.log(numeros.some(muyPeque)); // ?
console.log(numeros.every(muyPeque)); // ?
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Some y Every

::contents::
```js {*}{lines:true}
function muyPeque(item, index, array) {
  return item < 3;
}

const numeros = [1, 2, 3, 4, 5];

console.log(numeros.some(muyPeque)); // true
console.log(numeros.every(muyPeque)); // false
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .find()

::contents::
```js {*}{lines:true}
// función de busqueda que retorna true para el elemento que queremos
function findFunction(item) {
  return item === 4;
}

const numbers = [4, 5, 2, 1, 7];

// se le pasa la función de busqueda a .find
console.log(numbers.find(findFunction)); // 4
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .find()

::contents::
```js {*}{lines:true}
// función de busqueda que retorna true para el elemento que queremos
function findFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

// se le pasa la función de busqueda a .find
console.log(numbers.find(findFunction)); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .find()

::contents::
```js {*}{lines:true}
// función de busqueda que retorna true para el elemento que queremos
function findFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

// se le pasa la función de busqueda a .find
console.log(numbers.find(findFunction)); // 4
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .find()

::contents::
Le pasas una funcion de busqueda, y retorna el primer elemento para el que la funcion retorne true.

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .findIndex()

::contents::
```js {*}{lines:true}
function findFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.findIndex(findFunction)); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .findIndex()

::contents::
```js {*}{lines:true}
function findFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.findIndex(findFunction)); // 0
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---
# .findIndex()

::contents::
Le pasas una funcion de busqueda, y retorna el **indice** del primer elemento para el que la funcion retorne true.

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Pregunta Ejemplo #1

::contents::
Para retornar si en una lista de estudiantes se encuentra un estudiante con una cedula dada, que función se utilizaría?

|  |  |
|--|--|
| Some | Every |
| Find | FindIndex|

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Pregunta Ejemplo #1

::contents::
Para retornar si en una lista de estudiantes se encuentra un estudiante con una cedula dada, que función se utilizaría?

|  |  |
|--|--|
| **Some** | Every |
| Find | FindIndex|

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Pregunta Ejemplo #2

::contents::
Para retornar la información del estudiante de una lista de estudiantes con una cedula dada, que función se utilizaría?

|  |  |
|--|--|
| Some | Every |
| Find | FindIndex|

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Pregunta Ejemplo #2

::contents::
Para retornar la información del estudiante de una lista de estudiantes con una cedula dada, que función se utilizaría?

|  |  |
|--|--|
| Some | Every |
| **Find** | FindIndex|

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .filter()

::contents::
```js {*}{lines:true}
function filterFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.filter(filterFunction)); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .filter()

::contents::
```js {*}{lines:true}
function filterFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.filter(filterFunction)); // [4, 2]
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# .filter()

::contents::
Le pasas una funcion de filtro, y retorna todos los elemento para los que la funcion retorne true.

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .map()

::contents::
```js {*}{lines:true}
function mapFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.map(mapFunction)); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .map()

::contents::
```js {*}{lines:true}
function mapFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.map(mapFunction)); // [true, false, true, false, false, false]
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# .map()

::contents::
Le pasas una funcion de mutación y retorna los elementos tras ser mutados con esa función.

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .map()

::contents::
```js {*}{lines:true}
function mapFunction(item) {
  if (item % 2 === 0) {
    return item;
  }
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.map(mapFunction)); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .map()

::contents::
```js {*}{lines:true}
function mapFunction(item) {
  if (item % 2 === 0) {
    return item;
  }
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.map(mapFunction)); // [4, undefined, 2, undefined, undefined]
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# .map()

::contents::
Le pasas una funcion de mutación y retorna los elementos tras ser mutados con esa función.

## **Map no filtra**

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .sort()

::contents::
```js {*}{lines:true}
const numbers = [41, 5, 2, 19, 7];

console.log(numbers.sort()); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .sort()

::contents::
```js {*}{lines:true}
const numbers = [41, 5, 2, 19, 7];

console.log(numbers.sort()); // [19, 2, 41, 5, 7]
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .sort()

::contents::
```js {*}{lines:true}
function sortAscFunction(item1, item2) {
  if (item1 < item2) {
    return 1;
  } else if (item2 > item1) {
    return -1;
  } else {
    return 0;
  }
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.sort(sortFunction)); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .sort()

::contents::
```js {*}{lines:true}
function sortAscFunction(item1, item2) {
  if (item1 < item2) {
    return 1;
  } else if (item2 > item1) {
    return -1;
  } else {
    return 0;
  }
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.sort(sortFunction)); // [1, 2, 4, 5, 7]
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .sort()

::contents::
```js {*}{lines:true}
function sortAscFunction(item1, item2) {
  return item1 - item2;
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.sort(sortFunction)); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .sort()

::contents::
```js {*}{lines:true}
function sortAscFunction(item1, item2) {
  return item1 - item2;
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.sort(sortFunction)); // [1, 2, 4, 5, 7]
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# .sort()

::contents::
Le pasas una función de "ordenamiento", y retorna los elementos ordenados segun esa función.

La funcion de "ordenamiento" debe retornar numero negativo, positivo, o cero, segun el orden relativo de los elementos a comparar.

*No es que le vayas a pasar burbuja, o inserción.*

Si no pasas una función, los ordena como strings.

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .reduce()

::contents::
```js {*}{lines:true}
function reduceFunction(acumulado, actual) {
  return acumulado + actual;
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.reduce(reduceFunction)); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .reduce()

::contents::
```js {*}{lines:true}
function reduceFunction(acumulado, actual) {
  return acumulado + actual;
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.reduce(reduceFunction)); // 19
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# .reduce()

::contents::
Le pasas una funcion de reducción, y retorna el resultado de reducir el array usando la función.

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# .reduce()

::contents::
Le pasas una funcion de reducción, y retorna el resultado de reducir el array usando la función.

El primer valor del acumulado es el primer elemento del array.

Alternativamente, se le puede pasar un valor inicial como segundo parametro del reduce.

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# .reduce()

::contents::
```js {*}{lines:true}
function reduceFunction(acumulado, actual) {
  return acumulado + actual;
}

const numbers = [4, 5, 2, 1, 7];

// 1 es el valor inicial
console.log(numbers.reduce(reduceFunction, 1)); // 20
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# Intermisión

---
layout: default-y-center
---

# Destructuración Objetos

::contents::
```js {*}{lines:true}
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre } = user;

console.log(nombre); // ??
console.log(user.nombre); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Destructuración Objetos

::contents::
```js {*}{lines:true}
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre } = user;

console.log(nombre); // "Ismael"
console.log(user.nombre); // "Ismael"
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Destructuración Objetos

::contents::
```js {*}{lines:true}
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre, altura } = user;

console.log(nombre); // "Ismael"
console.log(altura); // 1.75
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Destructuración Objetos

::contents::
```js {*}{lines:true}
const user = {
  nombre: "Ismael",
  // altura: 1.75,
  puntaje: 3,
};

const { nombre, altura } = user;

console.log(nombre); // "Ismael"
console.log(altura); // undefined
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
---

# Destructuración Objetos

::left::
```js {*}{lines:true}
// OPCIÓN A
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre, altura } = user;
```

::right::
```js {*}{lines:true}
// OPCIÓN B
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const nombre = user.nombre;
const altura = user.altura;
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Valor Predeterminado

::contents::
```js {*}{lines:true}
const user = {
  nombre: "Ismael",
  // altura: 1.75,
  puntaje: 3,
};

const { nombre, altura = 1.7 } = user;

console.log(nombre); // "Ismael"
console.log(altura); // 1.7
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Renombrar variable

::contents::
```js {*}{lines:true}
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre: name } = user;

console.log(nombre); // undefined
console.log(name); // "Ismael"
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Renombrar + Predeterminado

::contents::
```js {*}{lines:true}
const user = {
  // nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre: name = "Persona" } = user;

console.log(nombre); // undefined
console.log(name); // "Persona"
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Spread Operator

::contents::
```js {*}{lines:true}
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre, ...otrosDatos } = user;

console.log(Object.keys(otrosDatos)); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Spread Operator

::contents::
```js {*}{lines:true}
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre, ...otrosDatos } = user;

console.log(Object.keys(otrosDatos)); // ["altura", "puntaje"]
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Spread Operator

::contents::
```js {*}{lines:true}
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre, ...otrosDatos } = user;

console.log(otrosDatos.altura); // 1.75
console.log(user.altura); // 1.75
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---


# Intermisión

---
layout: default-y-center
---

# Destructuración Listas

::contents::
```js {*}{lines:true}
const users = ["Ismael", "Rafael", "Otroel"];

console.log(users[1]); // ??

const [user_0, user_1] = users;

console.log(user_1); // ??
console.log(users[1]); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Destructuración Listas

::contents::
```js {*}{lines:true}
const users = ["Ismael", "Rafael", "Otroel"];

console.log(users[1]); // "Rafael"

const [user_0, user_1] = users;

console.log(user_1); // "Rafael"
console.log(users[1]); // "Rafael"
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Destructuración

::contents::
Para destructurar un objeto, se usan { **llaves** }.

Para destructurar un array, se usan [ **corchetes** ].

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Destructuración

::contents::
Esto sigue la noción que un objeto se crea con { **llaves** }, mientras que un array se crea con [ **corchetes** ].

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Destructuración

::contents::
```js {*}{lines:true}
const users = ["Ismael", "Rafael", "Otroel"]; // array
const user = { nombre: "Ismael", altura: 1.75 }; // objeto
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
---

# Destructuración Listas

::left::
```js {*}{lines:true}
// OPCION A
const users = ["Ismael", "Rafael", "Otroel"];

const [user_0, user_1] = users;
```

::right::
```js {*}{lines:true}
// OPCION B
const users = ["Ismael", "Rafael", "Otroel"];

const user_0 = users[0];
const user_1 = users[1];
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
---

# Destructuracion Listas

Y si quiero el elemento #1, pero no el #0?

::right::
```js {*}{lines:true}
// OPCION A
const users = ["Ismael", "Rafael", "Otroel"];

const [_, user_1] = users;
```

::left::
```js {*}{lines:true}
// OPCION B
const users = ["Ismael", "Rafael", "Otroel"];

const user_1 = users[1];
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Valor Predeterminado

::contents::
```js {*}{lines:true}
const users = ["Ismael"];

const [user_0, user_1 = "Usuario 2"] = users;

console.log(user_0); // "Ismael"
console.log(user_1); // "Usuario 2"
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Spread Operator

::contents::
```js {*}{lines:true}
const users = ["Ismael", "Rafael", "Otroel"];

const [user_0, ...otrosUsuarios] = users;

console.log(otrosUsuarios.length); // ??
console.log(otrosUsuarios[0]); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Spread Operator

::contents::
```js {*}{lines:true}
const users = ["Ismael", "Rafael", "Otroel"];

const [user_0, ...otrosUsuarios] = users;

console.log(otrosUsuarios.length); // 2
console.log(otrosUsuarios[0]); // "Rafael"
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---


# Asignación Avanzada

---
layout: default-y-center
---

# Asignación Avanzada - Objetos

::contents::
```js {*}{lines:true}
const nombre = "Ismael";
const altura = 1.75;

const user1 = {
  nombre: nombre,
  altura: altura,
};
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Brevedad

::contents::
```js {*}{lines:true}
const nombre = "Ismael";
const altura = 1.75;

const user1 = {
  nombre,
  altura,
};
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Renombrar

::contents::
```js {*}{lines:true}
const nombre = "Ismael";
const altura = 1.75;

const user1 = {
  primerNombre: nombre,
  altura,
};
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Spread Op.

::contents::
```js {*}{lines:true}
const userDefault = {
  nombre: "Usuario",
  altura: 1.75,
  puntaje: 0,
};

const user1 = {
  ...userDefault,
};
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Spread Op.

::contents::
```js {*}{lines:true}
const userDefault = {
  nombre: "Usuario",
  altura: 1.75,
  puntaje: 0,
};

const user1 = {
  userDefault,
};
// user1.userDefault.nombre
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Sobreescritura

::contents::
```js {*}{lines:true}
const userPredeterminado = {
  nombre: "Usuario",
  altura: 1.75,
  puntaje: 0,
};

const user1 = {
  ...userPredeterminado,
  nombre: "Rafael",
};
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Sobreescritura

::contents::
```js {*}{lines:true}
const userPredeterminado = {
  nombre: "Usuario",
  altura: 1.75,
  puntaje: 0,
};

const user1 = {
  nombre: "Rafael",
  ...userPredeterminado,
};
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Sobreescritura

::contents::
```js {*}{lines:true}
const userPredeterminado = {
  nombre: "Usuario",
  altura: 1.75,
  puntaje: 0,
};
const nombre = "Rafael";

const user1 = {
  ...userPredeterminado,
  nombre: nombre,
};
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Sobreescritura

::contents::
```js {*}{lines:true}
const userPredeterminado = {
  nombre: "Usuario",
  altura: 1.75,
  puntaje: 0,
};
const nombre = "Rafael";

const user1 = {
  ...userPredeterminado,
  nombre,
};
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Multi Spread

::contents::
```js {*}{lines:true}
const userPredeterminado = {
  nombre: "Usuario",
  altura: 1.75,
  puntaje: 0,
};

const adminPredeterminado = {
  nombre: "Admin",
};

const nombre = "Rafael";

const user1 = {
  ...userPredeterminado,
  ...adminPredeterminado,
  nombre,
};
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Listas

::contents::
```js {*}{lines:true}
const user_1 = "Ismael";
const user_2 = "Rafael";
const users = [user_1, user_2];

console.log(users[0]); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Listas

::contents::
```js {*}{lines:true}
const user_1 = "Ismael";
const user_2 = "Rafael";
const users = [user_1, user_2];

console.log(users[0]); // "Ismael"
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Listas

::contents::
```js {*}{lines:true}
const user_1 = ["Ismael", "Cael"];
const user_2 = "Rafael";
const users = [user_1, user_2];

console.log(users[0]); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Listas

::contents::
```js {*}{lines:true}
const user_1 = ["Ismael", "Cael"];
const user_2 = "Rafael";
const users = [user_1, user_2];

console.log(users[0]); // ["Ismael", "Cael"]
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Spread Op.

::contents::
```js {*}{lines:true}
const user_1 = ["Ismael", "Cael"];
const user_2 = "Rafael";
const users = [...user_1, user_2];

console.log(users[0]); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Spread Op.

::contents::
```js {*}{lines:true}
const user_1 = ["Ismael", "Cael"];
const user_2 = "Rafael";
const users = [...user_1, user_2];

console.log(users[0]); // "Ismael"
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Sobreescritura

::contents::
```js {*}{lines:true}
const user_1 = ["Ismael", "Cael"];
const user_2 = "Rafael";
const users = [user_2, ...user_1];

console.log(users[0]); // ??
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Sobreescritura

::contents::
```js {*}{lines:true}
const user_1 = ["Ismael", "Cael"];
const user_2 = "Rafael";
const users = [user_2, ...user_1];

console.log(users[0]); // ["Rafael"]
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Asignación Avanzada - Sobreescritura

::contents::
```js {*}{lines:true}
const user_1 = ["Ismael", "Cael"];
const user_2 = ["Rafael"];
const users = [...user_2, ...user_1];

console.log(users[0]); // "Rafael"
```

::header::
Semana 5: Javascript Avanzado II

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# 🎉

# Son expertos en JS!
