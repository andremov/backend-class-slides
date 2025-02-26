---
theme: ../theme
transition: none
layout: cover
exportFilename: 01b-ipo-model
title: IPO Model
---

# IPO Model

✏️ 2025-01 ➖ ⏱️ 7 min.

---
layout: cover
---

O, en español,

# Modelo EPS

---
layout: default-y-center
---

# Que es EPS?

::contents::
ENTIDAD PROMOTORA DE SALUD - EPS

Entidades responsables de la afiliación y registro de los afiliados al sistema de la regularidad social en Colombia.

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Que es el IPO Model?

::contents::
Es un patron reconocido para el diseño y desarrollo de algoritmos.

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# IPO significa...

::contents::
1. INPUT
1. PROCESS
1. OUTPUT

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# EPS significa...

::contents::
1. ENTRADA
1. PROCESO
1. SALIDA

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

# Es decir,

::contents::
Para desarrollar un algoritmo que solucione un problema (pequeño),

1. Obtener los datos necesarios (input)
1. Procesar o modificar los datos (process)
1. Devolver un resultado (output)

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

##

---
layout: default-y-center
---

# Ejemplo

::contents::
```js {*|2,3|5|7|*}{lines:true}
function suma(a, b) {
  const operando1 = a;
  const operando2 = b;

  const resultado = operando1 + operando2;

  return resultado;
}
```

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Ejemplo

::contents::
```js {*}{lines:true}
function suma(a, b) {
  // const operando1 = a;
  // const operando2 = b;

  const resultado = a + b;

  return resultado;
}
```

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Ejemplo

::contents::
```js {*}{lines:true}
function suma(a, b) {
  // const operando1 = a;
  // const operando2 = b;

  // const resultado = a + b;

  return a + b;
}
```

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Problema

::contents::
Dada una lista de estudiantes y su nota final, cuantos estudiantes sacaron la mayor nota, que no es necesariamente la nota maxima posible (5)?

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Problema

::contents::
```js {*}{lines:true}
function suma(estudiantes) {
  // input
  
  

  // process
  
  
  

  // output
  
}
```

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Problema

::contents::
```js {3,4}{lines:true}
function suma(estudiantes) {
  // input
  const notasFinales = estudiantes.map((estudiante) => estudiante.notaFinal);
  const mayorNota = Math.max(...notasFinales);

  // process
  
  
  

  // output
  
}
```

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Problema

::contents::
```js {7,8,9}{lines:true}
function suma(estudiantes) {
  // input
  const notasFinales = estudiantes.map((estudiante) => estudiante.notaFinal);
  const mayorNota = Math.max(...notasFinales);

  // process
  const estudiantesConMayorNota = estudiantes.filter(
    (estudiante) => estudiante.notaFinal === mayorNota
  );

  // output
  
}
```

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Problema

::contents::
```js {12}{lines:true}
function suma(estudiantes) {
  // input
  const notasFinales = estudiantes.map((estudiante) => estudiante.notaFinal);
  const mayorNota = Math.max(...notasFinales);

  // process
  const estudiantesConMayorNota = estudiantes.filter(
    (estudiante) => estudiante.notaFinal === mayorNota
  );

  // output
  return estudiantesConMayorNota.length;
}
```

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Problema

::contents::
```js {*}{lines:true}
function suma(estudiantes) {
  // input
  const notasFinales = estudiantes.map((estudiante) => estudiante.notaFinal);
  const mayorNota = Math.max(...notasFinales);

  // process
  const estudiantesConMayorNota = estudiantes.filter(
    (estudiante) => estudiante.notaFinal === mayorNota
  );

  // output
  return estudiantesConMayorNota.length;
}
```

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Y si las entradas son invalidas?

::contents::
```js {2-5}{lines:true}
function suma(estudiantes) {
  // ??
  if (estudiantes.length === 0) {
    return 0;
  }

  // input
  const notasFinales = estudiantes.map((estudiante) => estudiante.notaFinal);
  const mayorNota = Math.max(...notasFinales);

  // process
  const estudiantesConMayorNota = estudiantes.filter(
    (estudiante) => estudiante.notaFinal === mayorNota
  );

  // output
  return estudiantesConMayorNota.length;
}
```

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Y si las entradas son invalidas?

::contents::
```js {2-5}{lines:true}
function suma(estudiantes) {
  // early return
  if (estudiantes.length === 0) {
    return 0;
  }

  // input
  const notasFinales = estudiantes.map((estudiante) => estudiante.notaFinal);
  const mayorNota = Math.max(...notasFinales);

  // process
  const estudiantesConMayorNota = estudiantes.filter(
    (estudiante) => estudiante.notaFinal === mayorNota
  );

  // output
  return estudiantesConMayorNota.length;
}
```

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

<!--
_footer: https://wiki.c2.com/?ElseConsideredSmelly
 -->

# Early Return

::contents::
Los `else` son, hasta cierto punto, considerados "malos".

Porque?

1. Si la condición del `if` es complicadita, es complicado entender cuando cae en el `else`.
2. Si el codigo dentro del `if` es considerable, es facil de olvidar cual era la condicion.


::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Alternativa?

::contents::
```js {*}{lines:true}
function suma(estudiantes) {
  if (estudiantes.length !== 0) {
    // input
    const notasFinales = estudiantes.map((estudiante) => estudiante.notaFinal);
    const mayorNota = Math.max(...notasFinales);

    // process
    const estudiantesConMayorNota = estudiantes.filter(
      (estudiante) => estudiante.notaFinal === mayorNota
    );

    // output
    return estudiantesConMayorNota.length;
  } else {
    return 0;
  }
}
```

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

<!--
_footer: https://wiki.c2.com/?ArrowAntiPattern
 -->

## Y si son varias condiciones?

::contents::
Terminamos con una flecha. (anti-patrón)


::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Flecha

::contents::
```js {*}{lines:true}
function proceso(param1, param2) {
  if (isValid(argument1)) {
    if (isValid(argument2)) {
      const otherVal1 = doSomeStuff(param1, param2);

      if (isValid(otherVal1)) {
        const otherVal2 = doAnotherStuff(otherVal1);

        if (isValid(otherVal2)) {
          return "Stuff";
        } else {
          throw new Error();
        }
      } else {
        throw new Error();
      }
    } else {
      throw new Error();
    }
  } else {
    throw new Error();
  }
}
```

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

::contents::
```java {*}{lines:true}
public String returnStuff(SomeObject argument1, SomeObject argument2){
  if (!argument1.isValid()) {
    throw new Exception();
  }

  if (!argument2.isValid()) {
    throw new Exception();
  }

  SomeObject otherVal1 = doSomeStuff(argument1, argument2);

  if (!otherVal1.isValid()) {
    throw new Exception();
  }

  SomeObject otherVal2 = doAnotherStuff(otherVal1);

  if (!otherVal2.isValid()) {
    throw new Exception();
  }

  return "Stuff";
}
```

::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Early Return

::contents::
```js {*}{lines:true}
function suma(estudiantes) {
  if (estudiantes.length === 0) {
    return 0;
  }

  const notasFinales = estudiantes.map((estudiante) => estudiante.notaFinal);
  const mayorNota = Math.max(...notasFinales);

  const estudiantesConMayorNota = estudiantes.filter(
    (estudiante) => estudiante.notaFinal === mayorNota
  );

  return estudiantesConMayorNota.length;
}
```


::header::
Relleno: Modelo IPO

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# Fin