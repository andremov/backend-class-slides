---
title: Typescript
theme: ../theme
transition: none
layout: cover
exportFilename: 20-typescript
---

# Typescript

✏️ 2025-01 ➖ ⏱️ 45 min.

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Tipado

::contents::
Javascript es un lenguaje de programacion con tipado debil.

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Tipado

::contents::
"Tipado" hace referencia al posible requisito de un lenguaje de
programacion de declarar el tipo de una variable.

- Java tiene un tipado fuerte.
- JavaScript tiene un tipado debil.

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Tipado

::contents::
"Tipado" hace referencia al posible requisito de un lenguaje de
programacion de declarar el tipo de una variable.

- Java tiene un tipado fuerte.
- JavaScript tiene un tipado debil.
- **TypeScript tiene un tipado fuerte.**

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Typescript

::contents::
Typescript es un lenguaje de programacion que *transpila* a Javascript.

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Ejemplo

::contents::
```js {*}{lines:true}
function getUserAge(user, today) {
  return today - user.birthdate;
}

// que es user? que es today? que es user.birthdate? que somos? que?
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
---

# Ejemplo

::left::
## Javascript
```js {*}{lines:true}
function getUserAge(user, today) {
  return today - user.birthdate;
}
```

::right::
## Typescript
```ts {*}{lines:true}
function getUserAge(user: User, today: Date): number {
  return today - user.birthdate;
}
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---
# Instalación

::contents::
```bash
$ npm install typescript
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Configuración de TypeScript

::contents::
Se encuentra en el archivo `tsconfig.json`.

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Ejemplo de Configuración

::contents::
```json {*}{lines:true}
{
  "compilerOptions": {
  "module": "system",
  "noImplicitAny": true,
  "removeComments": true,
  "preserveConstEnums": true,
  "outFile": "../../built/local/tsc.js",
  "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-center
---

# Configuración de TypeScript

::contents::
`https://www.typescriptlang.org/tsconfig`

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
---

# Declaracion de una variable

::left::
## Javascript
```js {*}{lines:true}
let variable1 = 1;
const variable2 = "2";
```

::right::
## Typescript
```ts {*}{lines:true}
let variable1: number = 1;
const variable2: string = "2";
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
---

# Y los arrays?

::left::
## Javascript
```js {*}{lines:true}
let variable1 = [1, 3, 5];
```

::right::
## Typescript
```ts {*}{lines:true}
// ?
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
---

# Y los arrays?

::left::
## Javascript
```js {*}{lines:true}
let variable1 = [1, 3, 5];
```

::right::
## Typescript
```ts {*}{lines:true}
let variable1: number[] = [1, 3, 5];
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
---

# Y los objetos?

::left::
## Javascript
```js {*}{lines:true}
let usuario = {
  name: "Anyelo",
  birthdate: "2002-10-05",
  semester: 7,
};
```

::right::
## Typescript
```ts {*}{lines:true}
// ?
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
---

# Y los objetos?

::left::
## Javascript
```js {*}{lines:true}
let usuario = {
  name: "Anyelo",
  birthdate: "2002-10-05",
  semester: 7,
};
```

::right::
## Typescript
```ts {*}{lines:true}
let usuario: {
  name: string,
  birthdate: Date,
  semester: number,
} = {
  name: "Anyelo",
  birthdate: "2002-10-05",
  semester: 7,
};
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Y dos objetos?

::contents::
```ts {*}{lines:true}
let usuario1: {
  name: string,
  birthdate: Date,
  semester: number,
} = {
  name: "Anyelo",
  birthdate: "2002-10-05",
  semester: 7,
};

let usuario2: {
  name: string,
  birthdate: Date,
  semester: number,
} = {
  name: "Emily",
  birthdate: "2002-11-06",
  semester: 5,
};
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Tipos

::contents::
```ts {1-5,7,13}{lines:true}
type User = {
  name: string,
  birthdate: Date,
  semester: number,
};

let usuario1: User = {
  name: "Anyelo",
  birthdate: "2002-10-05",
  semester: 7,
};

let usuario2: User = {
  name: "Emily",
  birthdate: "2002-11-06",
  semester: 5,
};
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Inferencia de tipos

::contents::
```ts {*}{lines:true}
// de que tipo es esta variable? (segun Typescript)
let variable1: number;
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Inferencia de tipos

::contents::
```ts {*}{lines:true}
// de que tipo es esta variable? (segun typescript)
let variable1: number;

// segun TS, la variable es un numero,
// porque ahí lo dice
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Inferencia de tipos

::contents::
```ts {*}{lines:true}
// de que tipo es esta variable? (segun Typescript)
let variable1 = 1;
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Inferencia de tipos

::contents::
```ts {*}{lines:true}
// de que tipo es esta variable? (segun typescript)
let variable1 = 1;

// segun TS, la variable es numero,
// porque el valor dado a la variable es un numero
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Inferencia de tipos

::contents::
```ts {*}{lines:true}
// de que tipo es esta variable? (segun typescript)
let variable1;
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Inferencia de tipos

::contents::
```ts {*}{lines:true}
// de que tipo es esta variable? (segun typescript)
let variable1;

// segun TS, es tipo "any"
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# « Any »

::contents::
El tipo "any" significa cualquier cosa.

Se recomienda evitar utilizarlo. <br />
Se recomienda no permitir que se infiera.

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
---

# Declaracion de una función

::left::
```js {*}{lines:true}
function suma(a, b) {
  return a + b;
}
```

::right::
```ts {*}{lines:true}
function suma(a, b) {
  return a + b;
}
// cual es el tipo de a? b? a+b?
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Declaracion de una función

::contents::
```ts {*}{lines:true}
function suma(a: number, b: number) {
  return a + b;
}
// cual es el tipo de a+b?
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Declaracion de una función

::contents::
```ts {*}{lines:true}
function suma(a: number, b: number) {
  return a + b;
}
// cual es el tipo de a+b?
// TS infiere que suma(a,b) retorna un numero
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Declaracion de una función

::contents::
```ts {*}{lines:true}
function suma(a: number, b: number): number {
  return a + b;
}
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Declaracion de una función (arrow)

::contents::
```ts {*}{lines:true}
const suma = (a: number, b: number): number => {
  return a + b;
};
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# Pero bueno volvamos a los tipos

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Tipos

::contents::
```ts {*}{lines:true}
type User = {
  name: string,
  birthdate: Date,
  semester: number,
};
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Que pasa si...

#### Fecha de Nacimiento quizá no es una "Fecha"

::contents::

```ts {3}{lines:true}
type User = {
  name: string,
  birthdate: Date,
  semester: number,
};
```

Puede ser `"1990-07-15"`. <br />
Como permitimos que birthdate sea Date y string?

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Que pasa si...

#### Fecha de Nacimiento quizá no es una "Fecha"

::contents::
```ts {3}{lines:true}
type User = {
  name: string,
  birthdate: Date | string,
  semester: number,
};
```

El simbolo `|` nos permite decir que una variable o campo puede tener dos o mas tipos.


::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Que pasa si...

#### Queremos agregar telefono

::contents::
```ts {*}{lines:true}
type User = {
  name: string,
  birthdate: Date | string,
  semester: number,
};
```

Pero no todos los usuarios van a tener telefono. <br />
Como permitimos que `User` tenga telefono, pero que no sean todos?


::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Que pasa si...

#### Queremos agregar telefono

::contents::
```ts {5}{lines:true}
type User = {
  name: string,
  birthdate: Date | string,
  semester: number,
  telephone?: number,
};
```

El simbolo `?` nos permite decir que un campo es opcional.


::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Que pasa si...

#### Queremos usuarios administrador

::contents::
```js
type User = {
  name: string,
  birthdate: Date | string,
  semester: number,
  telephone?: number,
};
```

Un administrador es como un usuario, pero tiene unos campos adicionales.


::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Que pasa si...

#### Queremos usuarios administrador

::contents::
```ts {*}{lines:true}
type User = {
  name: string,
  birthdate: Date | string,
  semester: number,
  telephone?: number,
};

type Admin = {
  name: string,
  birthdate: Date | string,
  semester: number,
  telephone?: number,
  employeeID: number,
  department: string,
};
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Que pasa si...

#### Queremos usuarios administrador

::contents::
```ts {2-5,9-12}{lines:true}
type User = {
  name: string,
  birthdate: Date | string,
  semester: number,
  telephone?: number,
};

type Admin = {
  name: string,
  birthdate: Date | string,
  semester: number,
  telephone?: number,
  employeeID: number,
  department: string,
};
```

Pero entonces nos estamos repitiendo.

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Que pasa si...

#### Queremos usuarios administrador

::contents::
```ts {6,7}{lines:true}
type User = {
  name: string,
  birthdate: Date | string,
  semester: number,
  telephone?: number,
  employeeID?: number,
  department?: string,
};
```

Podemos agregar los campos de Admin a User, y volverlos opcionales.


::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
---

# Que prefieren, este o este?

::left::
Tener dos tipos, y repetir los campos de usuario en administrador
```ts {*}{lines:true}
type User = {
  name: string,
  birthdate: Date | string,
  semester: number,
  telephone?: number,
};

type Admin = {
  name: string,
  birthdate: Date | string,
  semester: number,
  telephone?: number,
  employeeID: number,
  department: string,
};
```


::right::
Tener un tipo, y los campos de administrador son opcionales
```ts {*}{lines:true}
type User = {
  name: string,
  birthdate: Date | string,
  semester: number,
  telephone?: number,
  employeeID?: number,
  department?: string,
};
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Que pasa si...

#### Queremos usuarios administrador

::contents::
```ts {8}{lines:true}
type User = {
  name: string,
  birthdate: Date | string,
  semester: number,
  telephone?: number,
};

type Admin = User & {
  employeeID: number,
  department: string,
};
```

El simbolo `&` nos permite 'extender' un tipo en otro.

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Type o Interface?

::contents::
Son funcionalmente lo mismo.

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
---

# Type o Interface?

::left::
```ts {*}{lines:true}
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}
```

::right::
```ts {*}{lines:true}
type Animal = {
  name: string,
};

type Bear = Animal & {
  honey: boolean,
};
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
---

# Type o Interface?

::left::
```ts {*}{lines:true}
interface Window {
  title: string;
}
interface Window {
  ts: TypeScriptAPI;
}
```
✅ Todo bien

::right::
```ts {*}{lines:true}
type Window = {
  title: string,
};
type Window = {
  ts: TypeScriptAPI,
};
```
⚠️ Window ya existe

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

> # "Yo sé lo que es" 
#### -- Devs, 1997 - Hoy.

::contents::
```ts {*}{lines:true}
function func1(value: number): string | number {
  if (value < 5) {
    return "Error.";
  } else {
    return value;
  }
}

console.log(func1(6) * 10);
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

> # "Yo sé lo que es" 
#### -- Devs, 1997 - Hoy.

::contents::
```ts {9}{lines:true}
function func1(value: number): string | number {
  if (value < 5) {
    return "Error.";
  } else {
    return value;
  }
}

console.log(func1(6) * 10); // multiplicando una string?
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

> # "Yo sé lo que es" 
#### -- Devs, 1997 - Hoy.

::contents::
```ts {9,10}{lines:true}
function func1(value: number): string | number {
  if (value < 5) {
    return "Error.";
  } else {
    return value;
  }
}

console.log(<number>func1(6) * 10)
console.log(func1(6) as number * 10)
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Tipos literales

::contents::
```ts {*}{lines:true}
function compara(a: number, b: number) {
  if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  }
  return 1;
}
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Tipos literales

::contents::
```ts {1}{lines:true}
function compara(a: number, b: number): -1 | 0 | 1 {
  if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  }
  return 1;
}
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Tipos literales

::contents::
```ts {*}{lines:true}
function compara(a: number, b: number): -1 | 0 | 1 {
  if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  }
  return 1;
}
```

Tambien se puede con strings. <br />
Y con booleanos pero eso es como tonto.


::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Generics

::contents::
```ts {*}{lines:true}
function sum<X>(a: X, b: X): X {
  return a + b;
}
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Generics

::contents::
```ts {*}{lines:true}
function sum(a: number, b: number): number {
  return a + b;
}
// como permito que la funcion sum concatene
// dos strings si es el caso?

console.log(sum(2, 3));
console.log(sum("a", "b")); // Error
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Generics

::contents::
```ts {*}{lines:true}
function sum<X>(a: X, b: X): X {
  return a + b;
}
// usando generics, podemos decir que ambos params
// son un tipo, que tambien es el del resultado

console.log(sum<number>(2, 3));
console.log(sum<string>("a", "b"));
```

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Utility Types

::contents::
- Partial\<Type>
  - Todos los campos de Type, pero todos opcionales
- Required\<Type>
  - Todos los campos de Type, pero todos obligatorios
- Pick\<Type, Keys> => Pick\<User, "name" | "semester">
  - Solo los campos Keys de Type
- Omit\<Type, Keys>
  - Todos los campos de Type, excepto Keys

::header::
Semana 7: Typescript

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# 🎉

# Saben Typescript!
