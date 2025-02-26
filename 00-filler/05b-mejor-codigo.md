---
theme: ../theme
transition: none
title: Mejor Codigo
layout: cover
exportFilename: 05b-mejor-codigo
---

# Mejor Codigo

✏️ 2025-01 ➖ ⏱️ 5 min.

---
layout: center
---

# **Pregunta 1:**

## Para cualquier función o funcionalidad que se quiera desarrollar, hay una sola implementación que es mejor que todas?

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: center
---

# **Pregunta 2:**

## Que hace que una implementación de codigo sea mejor que otra?

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
class: m-1
---

# Ejemplo 1
Cual es mejor? Porque?

::left::
```js {*}{lines:true}
function f(n) {
  let a = [];
  for (let i = 2; i <= n; i++) {
    let p = 1;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) p = 0;
    }
    if (p) a.push(i);
  }
  return a;
}
```

::right::

```js {*}{lines:true}
function buscarPrimos(n) {
  let primos = [];
  for (let i = 2; i <= n; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) esPrimo = false;
    }
    if (esPrimo) primos.push(i);
  }
  return primos;
}
```

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: center
---

# 1. Legibilidad

Es importante que un codigo sea **legible**.

Sin embargo, dos desarrolladores pueden ver un mismo codigo y tener opiniones diferentes sobre que tan legible es el mismo, es algo subjetivo.

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
class: m-1
---

# Ejemplo 2
Cual es mejor? Porque?

::left::
```js {*}{lines:true}
function sumarNumeros(n) {
  let numeros = [];
  for (let i = 1; i <= n; i++) {
    numeros.push(i);
  }
  return numeros.reduce((suma, num) => suma + num, 0);
}
```

::right::

```js {*}{lines:true}
function sumarNumeros(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}
```

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: center
---

# 2. Consumo de Memoria

En lo posible, se quiere minimizar el consumo de memoria de nuestro codigo.

Guardar datos innecesarios o de un solo uso es una forma en que se "malgasta" la memoria.

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
class: m-1
---

# Ejemplo 3
Cual es mejor? Porque?

::left::
```js {*}{lines:true}
function suma(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}
```

::right::

```js {*}{lines:true}
function suma(n) {
  return (n * (n + 1)) / 2;
}
```

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
class: m-1
---

# Ejemplo 4
Cual es mejor? Porque?

::left::
```js {*}{lines:true}
function busquedaLineal(lista, objetivo) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === objetivo) {
      return i;
    }
  }
  return -1;
}
```

::right::
```js {*}{lines:true}
function busquedaLineal(lista, objetivo) {
  let indice = -1;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === objetivo) {
      indice = i;
    }
  }
  return indice;
}
```

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
class: m-1
---

# Ejemplo 5
Cual es mejor? Porque?

::left::
```js {*}{lines:true}
function busquedaLineal(lista, objetivo) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === objetivo) {
      return i;
    }
  }
  return -1;
}
```

::right::
```js {*}{lines:true}
function busquedaLineal(lista, objetivo) {
  let indice = -1;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === objetivo) {
      indice = i;
      break;
    }
  }
  return indice;
}
```

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: center
---

# 3. Tiempo de Procesamiento

En lo posible, se quiere minimizar el tiempo de procesamiento de nuestro codigo.

Reducir o remover la cantidad o longitud de ciclos es una buena forma de reducir el tiempo de procesamiento.

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
class: m-1
---

# Ejemplo 6
Cual es mejor? Porque?

::left::
```js {*}{lines:true}
const descuentos = {
  normal: 1,
  vip: 0.9,
  estudiante: 0.85,
  mayor: 0.8,
};

function calcularPrecioConDescuento(precio, tipoCliente) {
  return precio * (descuentos[tipoCliente] ?? 1);
}
```

::right::
```js {*}{lines:true}
function calcularPrecioConDescuento(precio, tipoCliente) {
  if (tipoCliente === "normal") {
    return precio;
  } else if (tipoCliente === "vip") {
    return precio * 0.9;
  } else if (tipoCliente === "estudiante") {
    return precio * 0.85;
  } else if (tipoCliente === "mayor") {
    return precio * 0.8;
  }

  return precio;
}
```

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: center
---

# 4. Mantenibilidad

En lo posible, se quiere tener y escribir codigo mantenible, que sea facil de hacerle soporte, o modificar.

Funciones pequeñas y objetos "diccionarios" están usualmente relacionados a la mantenibilidad.

También la reducción de incidencia de un valor "quemado" a favor de tener el valor guardado en una variable y acceder a el donde se necesite.

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: two-cols-header
class: m-1
---

# Ejemplo 7
Cual es mejor? Porque?

::left::
```js {*}{lines:true}
function validarUsuario(usuario) {
  return usuario.nombre && usuario.edad >= 18;
}

function procesarUsuario(usuario) {
  return { ...usuario, registro: new Date() };
}

function guardarUsuarios(usuarios, db) {
  usuarios
    .filter(validarUsuario)
    .map(procesarUsuario)
    .forEach((usuario) => db.insert("usuarios", usuario));
}
```

::right::
```js {*}{lines:true}
function guardarUsuarios(usuarios, db) {
  for (let i = 0; i < usuarios.length; i++) {
    if (!usuarios[i].nombre || usuarios[i].edad < 18) {
      continue;
    }
    usuarios[i].registro = new Date();
    db.insert("usuarios", usuarios[i]);
  }
}
```

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: center
---

# 5. Escalabilidad

En lo posible, se quiere tener y escribir codigo escalable, que sea facil de agregar funcionalidades nuevas.

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: center
---

# Mantenibilidad vs. Escalabilidad

Estos dos conceptos van muy de la mano, ambos "piden" funciones pequeñas con responsabilidades claras. 

Sin embargo...

- Mantenibilidad habla de modificar o mantener lo ya implementado.
- Escalabilidad habla de extender o agregar la funcionalidad de lo implementado.

Y también, hay otros tipos de escalabilidad.

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: center
---

## Escalabilidad de codigo
Ya la vimos.

## Escalabilidad de Uso
Desplegaste un servidor. 

Que tan bien maneja ese servidor 100 conexiones? 1.000? 1.000.000? 1.000.000.000? 

## Escalabilidad de Tamaño de Datos
Desplegaste una API+DB.

Que tan bien maneja esa API+DB una busqueda con filtros de una tabla con 100 filas? 1.000.000? 1.000.000.000? 

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: two-cols-header
class: m-1
---

# Ejemplo 8
Cual es mejor? Porque?

::left::
```js {*}{lines:true}
function mensaje(nombre) {
  return "Hola, " + nombre + "!";
}
```

::right::
```js {*}{lines:true}
const mensaje = (nombre) => `Hola, ${nombre}!`;
```

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: center
---

# 6. Compatibilidad

En lo posible, se quiere tener y escribir codigo compatible con todos los entornos que se estén utilizando.

Es importante tener en cuenta cual es el entorno mas viejo o mas restrictivo que utilizamos para asegurarnos que nuestro codigo funcione correctamente.

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: center
---

# Que hace que una implementación de codigo sea mejor que otra?
1. Legibilidad – Código claro y fácil de entender.
2. Consumo de memoria – Uso eficiente de recursos.
3. Procesamiento – Algoritmos y optimización.
5. Mantenibilidad – Código modular y fácil de modificar.
4. Escalabilidad – Capacidad y facilidad de manejar más casos/carga/datos.
6. Compatibilidad – Funcionamiento en diferentes entornos y versiones.

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: center
---

# **Pregunta 3:**

Es posible cumplir con las 6 cosas al mismo tiempo?

Legibilidad / Memoria / Procesamiento / Mantenibilidad / Escalabilidad / Compatibilidad

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: center
---

# **Pregunta 4:**

Cuales son las mas importantes? Como priorizamos?

Legibilidad / Memoria / Procesamiento / Mantenibilidad / Escalabilidad / Compatibilidad

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: center
---

# Que hace este codigo?

Este codigo es "mejor".

```js {*}{lines:true}
function t(d) {
  let m = {};
  return (
    d.forEach((x) => (m[x.id] = { ...x, c: [] })) ||
    d.forEach((x) => x.p && m[x.p].c.push(m[x.id])) ||
    d.filter((x) => !x.p).map((x) => m[x.id])
  );
}

console.log(
  t([
    { id: 1, p: null, name: "A" },
    { id: 2, p: 1, name: "B" },
    { id: 3, p: 1, name: "C" },
    { id: 4, p: 2, name: "D" },
  ])
);
```

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: center
---

# Que hace este codigo?

```js {*}{lines:true}
function construirArbol(datos) {
  let mapa = {};

  // Paso 1: Crear un mapa de nodos por ID
  datos.forEach((elemento) => {
    mapa[elemento.id] = { ...elemento, hijos: [] };
  });

  // Paso 2: Construir la estructura jerárquica
  let raiz = [];
  datos.forEach((elemento) => {
    if (elemento.p !== null) {
      mapa[elemento.p].hijos.push(mapa[elemento.id]);
    } else {
      raiz.push(mapa[elemento.id]);
    }
  });

  return raiz;
}
```

::header::
Relleno: Mejor Codigo

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# Fin