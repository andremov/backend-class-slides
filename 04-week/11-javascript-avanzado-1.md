---
theme: ../theme
transition: none
layout: cover
title: Javascript Avanzado I
exportFilename: 11-javascript-avanzado-1
---

# Javascript Avanzado I

✏️ 2024-03 ➖ ⏱️ 35 min.

---
layout: cover
---

# Optional Chaining

---
layout: default-y-center
---

## Optional Chaining

::contents::
```js
function saludos(user) {
  console.log("Hola " + user.name);
}

let user = {
  name: "El chanclas",
};

saludos(user); // ??
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Optional Chaining

::contents::
```js
function saludos(user) {
  console.log("Hola " + user.name);
}

let user = {
  name: "El chanclas",
};

saludos(user); // "Hola El chanclas"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Optional Chaining

::contents::
```js
function saludos(user) {
  console.log("Hola " + user.name);
}

let user = {
// empty
};

saludos(user); // ??
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Optional Chaining

::contents::
```js
function saludos(user) {
  console.log("Hola " + user.name);
}

let user = {
// empty
};

saludos(user); // "Hola undefined"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Optional Chaining

::contents::
```js
function saludos(user) {
  console.log("Hola " + user.name);
}

// 
// no user
// 

saludos(); // ??
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Optional Chaining

::contents::
```js
function saludos(user) {
  console.log("Hola " + user.name);
}

// 
// no user
// 

saludos(); // ⚠️
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Optional Chaining

::contents::
```js {2,9}
function saludos(user) {
  console.log("Hola " + user?.name);
}

// 
// no user
// 

saludos(); // "Hola undefined"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-centered
---

## Optional Chaining

::left::
```js
if (user !== undefined) {
  return user.name
} else { 
  return undefined 
}
```

::right::
```js
return user?.name
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# Parametros Predeterminados

---
layout: default-y-center
---

## Parametros Predeterminados

::contents::
```js
function saludos(name) {
  console.log("Hola " + name);
}

let user = {
  name: "El chanclas",
};

saludos(user.name); // "Hola El chanclas"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Parametros Predeterminados

::contents::
```js
function saludos(name) {
  console.log("Hola " + name);
}

let user = {
// aquí no hay nada
};

saludos(user.name); // "Hola undefined"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Parametros Predeterminados

::contents::
```js
function saludos(name) {
  console.log("Hola " + name);
}

// 
// ahora declarado como indefinido
let user = undefined;

saludos(user.name); // ⚠️
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Parametros Predeterminados

::contents::
```js
function saludos(name) {
  console.log("Hola " + name);
}

// 
// ahora declarado como indefinido
let user = undefined;

saludos(user?.name); // "Hola undefined"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Parametros Predeterminados

::contents::
```js{1,9}
function saludos(name = "usuario") {
  console.log("Hola " + name);
}

// 
// sigue siendo indefinido
let user = undefined;

saludos(user?.name); // "Hola usuario"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Parametros Predeterminados

::contents::
```js
function saludos(name = "usuario") {
  console.log("Hola " + name);
}

let user = {
  // nadita
};

saludos(user.name); // "Hola usuario"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Parametros Predeterminados

::contents::
```js
function suma(a = 0, b = 0) {
  return a + b;
}

console.log(suma(1, 2));
console.log(suma(1));
console.log(suma(undefined, 2));
console.log(suma());
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Parametros Predeterminados

::contents::
```js{5}
function suma(a = 0, b = 0) {
  return a + b;
}

console.log(suma(1, 2));
console.log(suma(1));
console.log(suma(undefined, 2));
console.log(suma());
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Parametros Predeterminados

::contents::
```js{5,6}
function suma(a = 0, b = 0) {
  return a + b;
}

console.log(suma(1, 2)); // 3
console.log(suma(1));
console.log(suma(undefined, 2));
console.log(suma());
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Parametros Predeterminados

::contents::
```js{6,7}
function suma(a = 0, b = 0) {
  return a + b;
}

console.log(suma(1, 2)); // 3
console.log(suma(1)); // 1
console.log(suma(undefined, 2));
console.log(suma());
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Parametros Predeterminados

::contents::
```js{7,8}
function suma(a = 0, b = 0) {
  return a + b;
}

console.log(suma(1, 2)); // 3
console.log(suma(1)); // 1
console.log(suma(undefined, 2)); // 2
console.log(suma());
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Parametros Predeterminados

::contents::
```js
function suma(a = 0, b = 0) {
  return a + b;
}

console.log(suma(1, 2)); // 3
console.log(suma(1)); // 1
console.log(suma(undefined, 2)); // 2
console.log(suma()); // 0
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Parametros Predeterminados

::contents::
```js
function suma(a = 15, b = 18) {
  return a + b;
}

console.log(suma(4, true)); 
console.log(suma(3, false));
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Parametros Predeterminados

::contents::
```js
function suma(a = 15, b = 18) {
  return a + b;
}

console.log(suma(4, true)); // 5
console.log(suma(3, false)); // 3
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# Null Coalescing Operator

---
layout: default-y-center
---

## Null Coalescing Operator

::contents::
```js
function saludo(nombre1, nombre2) {
  if (nombre2) {
    return "Hola " + nombre2;
  } else if (nombre1) {
    return "Hola " + nombre1;
  }

  return "Hola abominacion";
}

console.log(saludo("Experimento 626", "Stitch")); // ??
console.log(saludo("Experimento 626")); // ??
console.log(saludo()); // ??
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Null Coalescing Operator

::contents::
```js
function saludo(nombre1, nombre2) {
  return "Hola " + (nombre2 ?? nombre1 ?? "abominacion");
}







console.log(saludo("Experimento 626", "Stitch")); // ??
console.log(saludo("Experimento 626")); // ??
console.log(saludo()); // ??
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Null Coalescing Operator

::contents::
```js
function saludo(nombre1, nombre2) {
  return "Hola " + (nombre2 ?? nombre1 ?? "abominacion");
}







console.log(saludo("Experimento 626", "Stitch")); // ??
console.log(saludo("Experimento 626", "undefined")); // ??
console.log(saludo(null, undefined)); // ??
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# Template Strings

---
layout: default-y-center
---

## Template Strings

::contents::
```js
function saludo(nombre1, nombre2) {
  return "Hola " + (nombre2 ?? nombre1 ?? "abominacion");
}

console.log(saludo("Experimento 626", "Stitch")); // ??
console.log(saludo("Experimento 626")); // ??
console.log(saludo()); // ??
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Template Strings

::contents::
```js
function saludo(nombre1, nombre2) {
  return `Hola ${nombre2 ?? nombre1 ?? "abominacion"}`;
}

console.log(saludo("Experimento 626", "Stitch")); // ??
console.log(saludo("Experimento 626")); // ??
console.log(saludo()); // ??
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---


## Template Strings

::contents::
# `

"Back tick"

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---


## Template Strings

::contents::
# `Alt Gr` + `}`

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Template Strings

::contents::
```js
function saludo(nombre1, nombre2) {
  return `Hola ${nombre2 ?? nombre1 ?? "abominacion"}`;
}

console.log(saludo("Experimento 626", "Stitch")); // ??
console.log(saludo("Experimento 626")); // ??
console.log(saludo()); // ??
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# Intermisión

---
layout: cover
---

# Manipulación de Strings

---
layout: default-center
---

## Nota

::contents::
Los metodos de manipulación de string **retornan** la string modificada.

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## .split()

::contents::
```js
let text = "Apple, Banana, Kiwi";

console.log(text.split(",")); // ??
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## .split()

::contents::
```js
let text = "Apple, Banana, Kiwi";

console.log(text.split(",")); // ["Apple", " Banana", " Kiwi"]
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## .split()

::contents::
```js
let text = "Apple, Banana, Kiwi";

console.log(text.split(", ")); // ["Apple", "Banana", "Kiwi"]
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-centered
---


## .split()

::left::
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

::right::
```js
function separarApellidos(apellidos) {
  return apellidos.split(" ");
}
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---


## .substring()

::contents::
```js
let text = "Apple, Banana, Kiwi";

// el segundo parametro es la posicion de fin
console.log(text.substring(7)); // "Banana, Kiwi"
console.log(text.substring(7, 13)); // "Banana"
console.log(text.substring(7).substring(8)); // "Kiwi"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## .substr()

::contents::
```js
let text = "Apple, Banana, Kiwi";

// el segundo parametro es la cantidad de caracteres
console.log(text.substr(7)); // "Banana, Kiwi"
console.log(text.substr(7, 6)); // "Banana"
console.log(text.substr(7).substr(0, 6)); // "Banana"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## .slice()

::contents::
```js
let text = "Apple, Banana, Kiwi";

// el segundo parametro es la posicion de fin
console.log(text.slice(7)); // "Banana, Kiwi"
console.log(text.slice(7, 13)); // "Banana"
console.log(text.slice(7).slice(0, 6)); // "Banana"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## .slice()

::contents::
```js
let text = "Apple, Banana, Kiwi";

// el segundo parametro es la posicion de fin
console.log(text.slice(-12)); // "Banana, Kiwi"
console.log(text.slice(-12, 13)); // "Banana"
console.log(text.slice(-12, -6)); // "Banana"
console.log(text.slice(7, -6)); // "Banana"
console.log(text.slice(-12).slice(-4)); // "Kiwi"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## .trim()

::contents::
```js
let text = "  Apple, Banana, Kiwi   ";


console.log(text.slice(7, 13)); // ", Bana"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## .trim()

::contents::
```js
let text = "  Apple, Banana, Kiwi   ";
text = text.trim();

console.log(text.slice(7, 13)); // "Banana"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## .trim()

::contents::
```js
let text = "  Apple, Banana, Kiwi   ";


console.log(text.trim().slice(7, 13)); // "Banana"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## .trimStart(), .trimEnd()

::contents::
```js
let text = "  Apple, Banana, Kiwi   ";


console.log(text.trimStart().trimEnd().slice(7, 13)); // "Banana"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## .padStart(), .padEnd()

::contents::
```js
let text = "Kiwi";


console.log(text.padStart("  ").padEnd("  ")); // "  Kiwi  "
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# Object.keys()

---
layout: default-y-center
---


## Object.keys()

::contents::
```js
const obj = {
  key: "value",
};


console.log(Object.keys(obj)); // ["key"]
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---


## Object.keys()

::contents::
```js
const user = {
  firstname: "Marlene",
  lastname: "Duarte",
};

console.log(Object.keys(user)); // ["firstname", "lastname"]
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## .flat()

::contents::
```js
const numbers = [[4, 5], [2, 1], [1], [7]];

console.log(numbers.flat()); // [4, 5, 2, 1, 7]
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## .join()

::contents::
```js
const numbers = [4, 5, 2, 1, 7];

console.log(numbers.join(", ")); // "4, 5, 2, 1, 1, 7"
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## .includes()

::contents::
```js
const numbers = [4, 5, 2, 1, 7];

console.log(numbers.includes(3)); // false
console.log(numbers.includes(7)); // true
```

::header::
Semana 4: Javascript Avanzado I

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---


# 💿

# Inserte Disco 2
