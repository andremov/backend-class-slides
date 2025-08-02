---
theme: ../theme
transition: none
layout: cover
title: Javascript Intermedio
exportFilename: 08-javascript-intermedio
---

# Javascript Intermedio

✏️ 2024-03 ➖ ⏱️ 10 min.

---
layout: default-y-center
---

## Operador Y (and)

::contents::
```js
const meQuieroIr = true;
const mePuedoIr = true;

if (meQuieroIr && mePuedoIr) {
  console.log("Me voy");
} else {
  console.log("Me quedo");
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Operador O (or)

::contents::
```js
const meQuieroIr = false;
const mePuedoIr = true;

if (meQuieroIr || mePuedoIr) {
  console.log("Me voy");
} else {
  console.log("Me quedo");
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Conversión a number

::contents::
```js
const numberString = "123.15";

console.log(numberString); // "123.15"
console.log(parseInt(numberString)); // 123
console.log(parseFloat(numberString)); // 123.15
console.log(+numberString); // 123.15

// Todos los 3 son de tipo "number".
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Conversión a number

::contents::
```js
const booleanString = true;

console.log(booleanString); // true
console.log(+booleanString); // 1
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Number como boolean

::contents::
```js
const conditional = 1;

if (conditional) {
  console.log("Exito");
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

## Truthy & Falsy

::contents::
**Truthy** es cualquier valor que es considerado **true**, cuando interpretado como booleano.

**Falsy** es cualquier valor que es considerado **false**, cuando interpretado como booleano.

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

## Truthy

::contents::
Todo valor es truthy, a menos que sea falsy.

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Falsy

::contents::
Los siguientes valores son falsy:

- false
- 0 ó -0
- 0n ó -0n _(0 como BigInt)_
- "" _(Una string vacia)_
- null
- undefined
- NaN _(Not a Number)_
- document.all _(Deprecado)_

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Operador 'No'

::contents::
```js
const conditional = true;

if (!conditional) {
  console.log("Exito");
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Operador 'No'

::contents::
```js
const conditional = true;

if (!!conditional) {
  console.log("Exito");
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Operador 'No'

::contents::
```js
const conditional = true;

if (!!!conditional) {
  console.log("Exito");
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Operador 'No'

::contents::
```js
const conditional = 1;

if (!conditional) {
  console.log("Exito");
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Operador 'No'

::contents::
```js
const conditional = 1;

if (!!conditional) {
  console.log("Exito");
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Brevedad & Funciones

::contents::
```js
function esPar(numero) {
  // el modulo 2 de un numero es 1 si es impar, y 2 si es par.
  const modulo2 = number % 2;

  // si el modulo 2 de un numero es 0, es par, y la variable es true.
  const numeroEsPar = modulo2 === 0;

  if (numeroEsPar) { 
    // si la variable es true, la funcion debe retornar true
    return true;
  } else if (!numeroEsPar) {
    // si la variable es false, la funcion debe retornar false
    return false;
  }
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Brevedad & Funciones

::contents::
```js {2,3}
function esPar(numero) {
  // pero si modulo 2 es 1 cuando es impar, y 1 se interpreta como true...
  const modulo2 = number % 2;

  // si el modulo 2 de un numero es 0, es par, y la variable es true.
  const numeroEsPar = modulo2 === 0;

  if (numeroEsPar) { 
    // si la variable es true, la funcion debe retornar true
    return true;
  } else if (!numeroEsPar) {
    // si la variable es false, la funcion debe retornar false
    return false;
  }
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Brevedad & Funciones

::contents::
```js {2,3}
function esPar(numero) {
  // entonces puedo usar el operador 'No' para negar el truthy a un false (1 => false)
  const modulo2 = !(number % 2);

  // si el modulo 2 de un numero es 0, es par, y la variable es true.
  const numeroEsPar = modulo2 === 0;

  if (numeroEsPar) { 
    // si la variable es true, la funcion debe retornar true
    return true;
  } else if (!numeroEsPar) {
    // si la variable es false, la funcion debe retornar false
    return false;
  }
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Brevedad & Funciones

::contents::
```js
function esPar(numero) {
  // y esta variable se vuelve 'numeroEsPar'
  const numeroEsPar = !(number % 2);




  if (numeroEsPar) { 
    // si la variable es true, la funcion debe retornar true
    return true;
  } else if (!numeroEsPar) {
    // si la variable es false, la funcion debe retornar false
    return false;
  }
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Brevedad & Funciones

::contents::
```js{8-14}
function esPar(numero) {
  // y esta variable se vuelve 'numeroEsPar'
  const numeroEsPar = !(number % 2);




  if (numeroEsPar) { 
    // estas lineas son un poco redundantes...
    return true;
  } else if (!numeroEsPar) {
    // 
    return false;
  }
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Brevedad & Funciones

::contents::
```js{8-14}
function esPar(numero) {
  // y esta variable se vuelve 'numeroEsPar'
  const numeroEsPar = !(number % 2);




  
  
  
  
    
  return numeroEsPar;

}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Brevedad & Funciones

::contents::
```js
function esPar(numero) {
  // entonces la variable sobra...
  return !(numero % 2);
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Brevedad & Funciones

::contents::
```js
function esPar(numero) {
  // alternativamente...
  return numero % 2 === 0;
}
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# Objetos

---
layout: default-y-center
---

## Objetos

::contents::
```js
// esto es un objeto
const perro = {
  raza: "Labrador",
  edad: 4,
  nombre: "Tequila",
  muerde: false,
  juzga: true,
};

console.log(perro.nombre); // "Tequila"
console.log(perro["muerde"]); // false
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Objetos

::contents::
```js
const perro = {
  raza: "Labrador",
  edad: 4,
  nombre: "Tequila",
  muerde: false,
  juzga: true,
};

const campo = "juzga";
console.log(perro[campo]); // true
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Objetos

::contents::
```js
const perro = {
  raza: "Labrador",
  edad: 4,
  nombre: "Tequila",
  muerde: false,
  juzga: true,
};

perro.nombre = "Whiskey";
perro["muerde"] = true;

console.log(perro.nombre); // "Whiskey"
console.log(perro.muerde); // true
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Vectores / Arrays

::contents::
```js
const estudiantes = [
  {
    nombre: "Martin Elias",
    velocidad: 9001,
  },
  {
    nombre: "Diomedes",
    numHijos: 9002,
  },
];
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Vectores / Arrays

::contents::
```js
console.log(estudiantes.length); // 2

console.log(estudiantes[0].velocidad); // 9001

console.log(estudiantes["1"].numHijos); // 9002
```

::header::
Semana 2: Javascript Intermedio

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# 🎉

# Están listos para el parcial!
