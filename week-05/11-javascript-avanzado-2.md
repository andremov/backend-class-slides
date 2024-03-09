---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Javascript Avanzado II
_class: invert title
header: Semana 5: Javascript Avanzado II
_header: ""
---

# Javascript Avanzado II

---

<!--
_class: title
 -->

## Metodos de listas/vectores/arrays/etc

---

<!--
_class: body-center
 -->

## .flat()

```js
const numbers = [[4, 5], [2, 1], [1], [7]];

console.log(numbers.flat()); // [4, 5, 2, 1, 7]
```

##

---

<!--
_class: body-center
 -->

## .join()

```js
const numbers = [4, 5, 2, 1, 7];

console.log(numbers.join(", ")); // "4, 5, 2, 1, 1, 7"
```

##

---

<!--
_class: body-center
 -->

## .find()

```js
function findFunction(item) {
  return item === 4;
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.find(findFunction)); // 4
```

##

---

<!--
_class: body-center
 -->

## .find()

```js
function findFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.find(findFunction)); // ??
```

##

---

<!--
_class: body-center
 -->

## .find()

```js
function findFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.find(findFunction)); // 4
```

##

---

<!--
_class: body-center
 -->

## .find()

Le pasas una funcion de busqueda, y retorna el primer elemento para el que la funcion retorne true.

##

---

<!--
_class: body-center
 -->

## .findIndex()

```js
function findFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.findIndex(findFunction)); // ??
```

##

---

<!--
_class: body-center
 -->

## .findIndex()

```js
function findFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.findIndex(findFunction)); // 0
```

##

---

<!--
_class: body-center
 -->

## .findIndex()

Le pasas una funcion de busqueda, y retorna el indice del primer elemento para el que la funcion retorne true.

##

---

<!--
_class: body-center
 -->

## .filter()

```js
function filterFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.filter(filterFunction)); // ??
```

##

---

<!--
_class: body-center
 -->

## .filter()

```js
function filterFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.filter(filterFunction)); // [4, 2]
```

##

---

<!--
_class: body-center
 -->

## .filter()

Le pasas una funcion de filtro, y retorna todos los elemento para los que la funcion retorne true.

##

---

<!--
_class: body-center
 -->

## .map()

```js
function mapFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.map(mapFunction)); // ??
```

##

---

<!--
_class: body-center
 -->

## .map()

```js
function mapFunction(item) {
  return !(item % 2);
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.map(mapFunction)); // [true, false, true, false, false, false]
```

##

---

<!--
_class: body-center
 -->

## .map()

Le pasas una funcion de "mappeo", y retorna los elementos resultantes de la funcion de "mappeo".

##

---

<!--
_class: body-center
 -->

## .map()

```js
function mapFunction(item) {
  if (item % 2 === 0) {
    return item;
  }
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.map(mapFunction)); // ??
```

##

---

<!--
_class: body-center
 -->

## .map()

```js
function mapFunction(item) {
  if (item % 2 === 0) {
    return item;
  }
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.map(mapFunction)); // [4, undefined, 2, undefined, undefined]
```

##

---

<!--
_class: body-center
 -->

 <style scoped>
  p:nth-child(4) {
    text-align: center;
    font-size: 2rem;
  }
 </style>

## .map()

Le pasas una funcion de "mappeo", y retorna los elementos resultantes de la funcion de "mappeo".

**No puede ser utilizada para filtrar.**

##

---

<!--
_class: body-center
 -->

## .sort()

```js
function sortFunction(item1, item2) {
  return item1 - item2;
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.sort(sortFunction)); // ??
```

##

---

<!--
_class: body-center
 -->

## .sort()

```js
function sortFunction(item1, item2) {
  return item1 - item2;
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.sort(sortFunction)); // [1, 2, 4, 5, 7]
```

##

---

<!--
_class: body-center
 -->

## .sort()

Le pasas una funcion de "ordenamiento", y retorna los elementos ordenados segun esa funcion.

La funcion de "ordenamiento" debe retornar numero negativo, positivo, o cero, segun el orden relativo de los elementos a comparar.

No es que le vayas a pasar burbuja, o insercion.

##

---

<!--
_class: body-center
 -->

## .reduce()

```js
function reduceFunction(acumulado, actual) {
  return acumulado + actual;
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.reduce(reduceFunction)); // ??
```

##

---

<!--
_class: body-center
 -->

## .reduce()

```js
function reduceFunction(acumulado, actual) {
  return acumulado + actual;
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.reduce(reduceFunction)); // 19
```

##

---

<!--
_class: body-center
 -->

## .reduce()

Le pasas una funcion de reduccion, y retorna el resultado de reducir el array usando la funcion.

##

---

<!--
_class: body-center
 -->

## .reduce()

Le pasas una funcion de reduccion, y retorna el resultado de reducir el array usando la funcion.

El primer valor del acumulado es el primer elemento del array.

Alternativamente, se le puede pasar un primer valor como segundo parametro del reduce.

##

---

<!--
_class: body-center
 -->

## .reduce()

```js
function reduceFunction(acumulado, actual) {
  return acumulado + actual;
}

const numbers = [4, 5, 2, 1, 7];

console.log(numbers.reduce(reduceFunction, 1)); // 20
```

##

---

<!--
_class: title
 -->

## Intermision

---

<!--
_class: body-center
 -->

## Destructuracion Objetos

```js
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre } = user;

console.log(nombre); // ??
console.log(user.nombre); // ??
```

##

---

<!--
_class: body-center
 -->

## Destructuracion Objetos

```js
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre } = user;

console.log(nombre); // "Ismael"
console.log(user.nombre); // "Ismael"
```

##

---

<!--
_class: body-center
 -->

## Destructuracion Objetos

```js
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre, altura } = user;

console.log(nombre); // "Ismael"
console.log(altura); // 1.75
```

##

---

<!--
_class: body-center
 -->

## Destructuracion Objetos

```js
const user = {
  nombre: "Ismael",
  // altura: 1.75,
  puntaje: 3,
};

const { nombre, altura } = user;

console.log(nombre); // "Ismael"
console.log(altura); // undefined
```

##

---

<!--
_class: body-center
 -->

## Destructuracion Objetos

```js
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};
```

```js
// OPCION A
const { nombre, altura } = user;
```

```js
// OPCION B
const nombre = user.nombre;
const altura = user.altura;
```

##

---

<!--
_class: body-center
 -->

## Valor Predeterminado

```js
const user = {
  nombre: "Ismael",
  // altura: 1.75,
  puntaje: 3,
};

const { nombre, altura = 1.7 } = user;

console.log(nombre); // "Ismael"
console.log(altura); // 1.7
```

##

---

<!--
_class: body-center
 -->

## Renombrar variable

```js
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre: name } = user;

console.log(nombre); // undefined
console.log(name); // "Ismael"
```

##

---

<!--
_class: body-center
 -->

## Renombrar variable

```js
const user = {
  // nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre: name = "Persona" } = user;

console.log(nombre); // undefined
console.log(name); // "Persona"
```

##

---

<!--
_class: body-center
 -->

## Spread Operator

```js
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre, ...otrosDatos } = user;

console.log(Object.keys(otrosDatos)); // ??
```

##

---

<!--
_class: body-center
 -->

## Spread Operator

```js
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre, ...otrosDatos } = user;

console.log(Object.keys(otrosDatos)); // ["altura", "puntaje"]
```

##

---

<!--
_class: body-center
 -->

## Spread Operator

```js
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};

const { nombre, ...otrosDatos } = user;

console.log(otrosDatos.altura); // 1.75
console.log(user.altura); // 1.75
```

##

---

<!--
_class: body-center
 -->

## Destructuracion Objetos

```js
const user = {
  nombre: "Ismael",
  altura: 1.75,
  puntaje: 3,
};
```

```js
const { nombre, ...otrosDatos } = user;
```

```js
// ??
```

##

---

<!--
_class: title
 -->

## Intermision

---

<!--
_class: body-center
 -->

## Destructuracion Listas

```js
const users = ["Ismael", "Rafael", "Otroel"];

console.log(users[1]); // "Rafael"

const [user_0, user_1] = users;

console.log(user_1); // "Rafael"
console.log(users[1]); // "Rafael"
```

##

---

<!--
_class: body-center
 -->

## Destructuracion

Para destructurar un objeto, se usan { **llaves** }.

Para destructurar un array, se usan [ **corchetes** ].

##

---

<!--
_class: body-center
 -->

## Destructuracion

Esto sigue la nocion que un objeto se crea con { **llaves** }, mientras que un array se crea con [ **corchetes** ].

##

---

<!--
_class: body-center
 -->

## Destructuracion

```js
const users = ["Ismael", "Rafael", "Otroel"]; // array
const user = { nombre: "Ismael", altura: 1.75 }; // objeto
```

##

---

<!--
_class: body-center
 -->

## Destructuracion Listas

```js
const users = ["Ismael", "Rafael", "Otroel"];
```

```js
// OPCION A
const [user_0, user_1] = users;
```

```js
// OPCION B
const user_0 = users[0];
const user_1 = users[1];
```

##

---

<!--
_class: body-center
 -->

## Destructuracion Listas

Y si quiero el elemento #1, pero no el #0?

```js
const users = ["Ismael", "Rafael", "Otroel"];
```

```js
// OPCION A
const [_, user_1] = users;
```

```js
// OPCION B
const user_1 = users[1];
```

##

---

<!--
_class: body-center
 -->

## Valor Predeterminado

```js
const users = ["Ismael"];

const [user_0, user_1 = "Usuario 2"] = users;

console.log(user_0); // "Ismael"
console.log(user_1); // "Usuario 2"
```

##

---

<!--
_class: body-center
 -->

## Spread Operator

```js
const users = ["Ismael", "Rafael", "Otroel"];

const [user_0, ...otrosUsuarios] = users;

console.log(otrosUsuarios.length); // ??
console.log(otrosUsuarios[0]); // ??
```

##

---

<!--
_class: body-center
 -->

## Spread Operator

```js
const users = ["Ismael", "Rafael", "Otroel"];

const [user_0, ...otrosUsuarios] = users;

console.log(otrosUsuarios.length); // 2
console.log(otrosUsuarios[0]); // "Rafael"
```

##

---

<!--
_class: title
 -->

## Asignacion Avanzada

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Objetos

```js
const nombre = "Ismael";
const altura = 1.75;

const user1 = {
  nombre: nombre,
  altura: altura,
};
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Brevedad

```js
const nombre = "Ismael";
const altura = 1.75;

const user1 = {
  nombre,
  altura,
};
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Renombrar

```js
const nombre = "Ismael";
const altura = 1.75;

const user1 = {
  primerNombre: nombre,
  altura,
};
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Spread Op.

```js
const userDefault = {
  nombre: "Usuario",
  altura: 1.75,
  puntaje: 0,
};

const user1 = {
  ...userDefault,
};
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Spread Op.

```js
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

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Sobreescritura

```js
const userDefault = {
  nombre: "Usuario",
  altura: 1.75,
  puntaje: 0,
};

const user1 = {
  ...userDefault,
  nombre: "Rafael",
};
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Sobreescritura

```js
const userDefault = {
  nombre: "Usuario",
  altura: 1.75,
  puntaje: 0,
};

const user1 = {
  nombre: "Rafael",
  ...userDefault,
};
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Sobreescritura

```js
const userDefault = {
  nombre: "Usuario",
  altura: 1.75,
  puntaje: 0,
};
const nombre = "Rafael";

const user1 = {
  ...userDefault,
  nombre: nombre,
};
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Sobreescritura

```js
const userDefault = {
  nombre: "Usuario",
  altura: 1.75,
  puntaje: 0,
};
const nombre = "Rafael";

const user1 = {
  ...userDefault,
  nombre,
};
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Multi Spread

```js
const userDefault = {
  nombre: "Usuario",
  altura: 1.75,
  puntaje: 0,
};
const adminDefault = {
  nombre: "Admin",
};
const nombre = "Rafael";

const user1 = {
  ...userDefault,
  ...adminDefault,
  nombre,
};
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Listas

```js
const user_1 = "Ismael";
const user_2 = "Rafael";
const users = [user_1, user_2];

console.log(users[0]); // ??
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Listas

```js
const user_1 = "Ismael";
const user_2 = "Rafael";
const users = [user_1, user_2];

console.log(users[0]); // "Ismael"
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Listas

```js
const user_1 = ["Ismael", "Cael"];
const user_2 = "Rafael";
const users = [user_1, user_2];

console.log(users[0]); // ??
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Listas

```js
const user_1 = ["Ismael", "Cael"];
const user_2 = "Rafael";
const users = [user_1, user_2];

console.log(users[0]); // ["Ismael", "Cael"]
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Spread Op

```js
const user_1 = ["Ismael", "Cael"];
const user_2 = "Rafael";
const users = [...user_1, user_2];

console.log(users[0]); // ??
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Spread Op

```js
const user_1 = ["Ismael", "Cael"];
const user_2 = "Rafael";
const users = [...user_1, user_2];

console.log(users[0]); // "Ismael"
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Sobreescritura

```js
const user_1 = ["Ismael", "Cael"];
const user_2 = "Rafael";
const users = [user_2, ...user_1];

console.log(users[0]); // ??
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Sobreescritura

```js
const user_1 = ["Ismael", "Cael"];
const user_2 = "Rafael";
const users = [user_2, ...user_1];

console.log(users[0]); // ["Rafael"]
```

##

---

<!--
_class: body-center
 -->

## Asignacion Avanzada - Sobreescritura

```js
const user_1 = ["Ismael", "Cael"];
const user_2 = ["Rafael"];
const users = [...user_2, ...user_1];

console.log(users[0]); // "Rafael"
```

##
