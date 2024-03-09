---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Javascript Avanzado I
_class: invert title
header: Semana 4: Javascript Avanzado I
_header: ""
---

# Javascript Avanzado I

---

<!--
_class: title
 -->

## Optional Chaining

---

<!--
_class: body-center
 -->

## Optional Chaining

```js
function saludos(user) {
  console.log("Hola " + user.name);
}

let user = {
  name: "El chanclas",
};

saludos(user); // ??
```

##

---

<!--
_class: body-center
 -->

## Optional Chaining

```js
function saludos(user) {
  console.log("Hola " + user.name);
}

let user = {
  name: "El chanclas",
};

saludos(user); // "Hola El chanclas"
```

##

---

<!--
_class: body-center
 -->

## Optional Chaining

```js
function saludos(user) {
  console.log("Hola " + user.name);
}

let user = {};

saludos(user); // ??
```

##

---

<!--
_class: body-center
 -->

## Optional Chaining

```js
function saludos(user) {
  console.log("Hola " + user.name);
}

let user = {};

saludos(user); // "Hola undefined"
```

##

---

<!--
_class: body-center
 -->

## Optional Chaining

```js
function saludos(user) {
  console.log("Hola " + user.name);
}

saludos(); // ??
```

##

---

<!--
_class: body-center
 -->

## Optional Chaining

```js
function saludos(user) {
  console.log("Hola " + user.name);
}

saludos(); // Error.
```

##

---

<!--
_class: body-center
 -->

## Optional Chaining

```js
function saludos(user) {
  console.log("Hola " + user?.name);
}

saludos(); // "Hola undefined"
```

##

---

<!--
_class: body-center
 -->

## Optional Chaining

| Antes                                                      | Despues             |
| ---------------------------------------------------------- | ------------------- |
| `if (user) { return user.name } else { return undefined }` | `return user?.name` |

##

---

<!--
 _class: title
 -->

## Parametros Predeterminados

---

<!--
_class: body-center
 -->

## Parametros Predeterminados

```js
function saludos(name) {
  console.log("Hola " + name);
}

let user = {
  name: "El chanclas",
};

saludos(user.name); // "Hola El chanclas"
```

##

---

<!--
_class: body-center
 -->

## Parametros Predeterminados

```js
function saludos(name) {
  console.log("Hola " + name);
}

let user = {};

saludos(user.name); // "Hola undefined"
```

##

---

<!--
_class: body-center
 -->

## Parametros Predeterminados

```js
function saludos(name) {
  console.log("Hola " + name);
}

let user = undefined;

saludos(user.name); // Error.
```

##

---

<!--
_class: body-center
 -->

## Parametros Predeterminados

```js
function saludos(name) {
  console.log("Hola " + name);
}

let user = undefined;

saludos(user?.name); // "Hola undefined"
```

##

---

<!--
_class: body-center
 -->

## Parametros Predeterminados

```js
function saludos(name = "usuario") {
  console.log("Hola " + name);
}

let user = undefined;

saludos(user?.name); // "Hola usuario"
```

##

---

<!--
_class: body-center
 -->

## Parametros Predeterminados

```js
function saludos(name = "usuario") {
  console.log("Hola " + name);
}

let user = {};

saludos(user.name); // "Hola usuario"
```

##

---

<!--
_class: body-center
 -->

## Parametros Predeterminados

```js
function suma(a = 0, b = 0) {
  return a + b;
}

console.log(suma(1, 2)); // ??
console.log(suma(1)); // ??
console.log(suma(undefined, 2)); // ??
console.log(suma()); // ??
```

##

---

<!--
_class: body-center
 -->

## Parametros Predeterminados

```js
function suma(a = 0, b = 0) {
  return a + b;
}

console.log(suma(1, 2)); // 3
console.log(suma(1)); // 1
console.log(suma(undefined, 2)); // 2
console.log(suma()); // 0
```

##

---

<!--
_class: body-center
 -->

## Parametros Predeterminados

```js
function suma(a = 15, b = 18) {
  return a + b;
}

console.log(suma(4, true)); // ??
console.log(suma(3, false)); // ??
```

##

---

<!--
_class: body-center
 -->

## Parametros Predeterminados

```js
function suma(a = 15, b = 18) {
  return a + b;
}

console.log(suma(4, true)); // 5
console.log(suma(3, false)); // 3
```

##

---

<!--
_class: title
 -->

## Null Coalescing Operator

---

<!--
_class: body-center
 -->

## Null Coalescing Operator

```js
function saludo(nombre1, nombre2) {
  if (nombre2) {
    return "Hola " + nombre2;
  } else if (nombre1) {
   return "Hola " + nombre1;
  }

  return "Hola abominacion;
}

console.log(saludo("Experimento 626", "Stitch")); // ??
console.log(saludo("Experimento 626")); // ??
console.log(saludo()); // ??
```

##

---

<!--
_class: body-center
 -->

## Null Coalescing Operator

```js
function saludo(nombre1, nombre2) {
  return "Hola " + (nombre2 ?? nombre1 ?? "abominacion");
}

console.log(saludo("Experimento 626", "Stitch")); // ??
console.log(saludo("Experimento 626")); // ??
console.log(saludo()); // ??
```

##

---

<!--
_class: body-center
 -->

## Null Coalescing Operator

```js
function saludo(nombre1, nombre2) {
  return "Hola " + (nombre2 ?? nombre1 ?? "abominacion");
}

console.log(saludo("Experimento 626", "Stitch")); // ??
console.log(saludo("Experimento 626", "undefined")); // ??
console.log(saludo(null, undefined)); // ??
```

##

---

<!--
_class: title
 -->

## Template Strings

---

<!--
_class: body-center
 -->

## Template Strings

```js
function saludo(nombre1, nombre2) {
  return "Hola " + (nombre2 ?? nombre1 ?? "abominacion");
}

console.log(saludo("Experimento 626", "Stitch")); // ??
console.log(saludo("Experimento 626")); // ??
console.log(saludo()); // ??
```

##

---

<!--
_class: body-center
 -->

## Template Strings

```js
function saludo(nombre1, nombre2) {
  return `Hola ${nombre2 ?? nombre1 ?? "abominacion"}`;
}

console.log(saludo("Experimento 626", "Stitch")); // ??
console.log(saludo("Experimento 626")); // ??
console.log(saludo()); // ??
```

##

---

<!--
_class: align-center body-center
 -->

 <style scoped>
  p {
    font-size: 4.5rem;
    line-height: 0.6;
  }
 </style>

## Template Strings

`
"Back tick"

##

---

<!--
_class: align-center body-center
 -->

 <style scoped>
  p {
    font-size: 4.5rem;
    line-height: 0.6;
  }
 </style>

## Template Strings

Alt Gr + }

##

---

<!--
_class: body-center
 -->

## Template Strings

```js
function saludo(nombre1, nombre2) {
  return `Hola ${nombre2 ?? nombre1 ?? "abominacion"}`;
}

console.log(saludo("Experimento 626", "Stitch")); // ??
console.log(saludo("Experimento 626")); // ??
console.log(saludo()); // ??
```

##

---

<!--
_class: title
 -->

## Intermision

---

<!--
_class: title
 -->

## Manipulacion de Strings

---

<!--
_class: body-center align-center
 -->

## Nota

Los metodos de manipulacion de string **retornan** la string modificada.

##

---

<!--
_class: body-center
 -->

## .split()

```js
function separarApellidos(apellidos) {
  const apellidos = [];
  let apellidoActual = "";

  for (let i = 0; i < apellidos.length; i++) {
    if (apellidos[i] === " ") {
      apellidos.push(apellidoActual);
      apellidoActual = "";
    } else {
      apellidoActual += apellidos[i];
    }
  }

  return apellidos;
}
```

##

---

<!--
_class: body-center
 -->

## .split()

```js
function separarApellidos(apellidos) {
  return apellidos.split(" ");
}
```

##

---

<!--
_class: body-center
 -->

## .substring()

```js
let text = "Apple, Banana, Kiwi";
// el segundo parametro es la posicion de fin
console.log(text.substring(7)); // "Banana, Kiwi"
console.log(text.substring(7, 13)); // "Banana"
console.log(text.substring(7).substring(8)); // "Kiwi"
```

##

---

<!--
_class: body-center
 -->

## .substr()

```js
let text = "Apple, Banana, Kiwi";
// el segundo parametro es la cantidad de caracteres
console.log(text.substr(7)); // "Banana, Kiwi"
console.log(text.substr(7, 6)); // "Banana"
console.log(text.substr(7).substr(0, 6)); // "Banana"
```

##

---

<!--
_class: body-center
 -->

## .slice()

```js
let text = "Apple, Banana, Kiwi";
// el segundo parametro es la cantidad de caracteres
console.log(text.slice(7)); // "Banana, Kiwi"
console.log(text.slice(7, 13)); // "Banana"
console.log(text.slice(7).slice(0, 6)); // "Banana"
```

##

---

<!--
_class: body-center
 -->

## .slice()

```js
let text = "Apple, Banana, Kiwi";
// el segundo parametro es la cantidad de caracteres
console.log(text.slice(-12)); // "Banana, Kiwi"
console.log(text.slice(-12, 13)); // "Banana"
console.log(text.slice(-12, -6)); // "Banana"
console.log(text.slice(7, -6)); // "Banana"
console.log(text.slice(-12).slice(-4)); // "Kiwi"
```

##

---

<!--
_class: body-center
 -->

## .trim()

```js
let text = "  Apple, Banana, Kiwi   ";

console.log(text.slice(7, 13)); // ", Bana"
```

##

---

<!--
_class: body-center
 -->

## .trim()

```js
let text = "  Apple, Banana, Kiwi   ";
text = text.trim();

console.log(text.slice(7, 13)); // "Banana"
```

##

---

<!--
_class: body-center
 -->

## .trim()

```js
let text = "  Apple, Banana, Kiwi   ";

console.log(text.trim().slice(7, 13)); // "Banana"
```

##

---

<!--
_class: body-center
 -->

## .trimStart(), .trimEnd()

```js
let text = "  Apple, Banana, Kiwi   ";

console.log(text.trimStart().trimEnd().slice(7, 13)); // "Banana"
```

##

---

<!--
_class: body-center
 -->

## .padStart(), .padEnd()

```js
let text = "Kiwi";

console.log(text.padStart("  ").padEnd("  ")); // "  Kiwi  "
```

##

---

<!--
_class: body-center
 -->

## .split()

```js
let text = "Apple, Banana, Kiwi";

console.log(text.split(",")); // ??
```

##

---

<!--
_class: body-center
 -->

## .split()

```js
let text = "Apple, Banana, Kiwi";

console.log(text.split(",")); // ["Apple", " Banana", " Kiwi"]
```

##

---

<!--
_class: body-center
 -->

## .split()

```js
let text = "Apple, Banana, Kiwi";

console.log(text.split(", ")); // ["Apple", "Banana", "Kiwi"]
```

##

---

<!--
_class: title
 -->

## Object.keys()

---

<!--
_class: body-center
 -->

## Object.keys()

```js
const obj = {
  key: "value",
};

console.log(Object.keys(obj)); // ["key"]
```

##

---

<!--
_class: body-center
 -->

## Object.keys()

```js
const user = {
  firstname: "Marlene",
  lastname: "Duarte",
};

console.log(Object.keys(user)); // ["firstname", "lastname"]
```

##

---

<!--
_class: title
 -->

## Inserte Disco 2
