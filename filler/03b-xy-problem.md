---
theme: ../theme
transition: none
layout: cover
exportFilename: 03b-xy-problem
title: XY Problem
---

# XY problem

✏️ 2025-01 ➖ ⏱️ 5 min.

---
layout: default-y-center
---

# XY Problem - Que es?

::contents::
El problema XY es cuando una persona tiene un problema, se le ocurrió una solución, y pide ayuda para completar _esa_ solución en vez de para resolver el problema inicial.

> "Porque quieres resolver (Y), si para resolver (X) puedes hacer esto?"


::header::
Relleno: Make It

::footer::
{{ $page }} / {{ $nav.total }}

---

# XY Problem

::contents::
Si estabas resolviendo algo, y terminaste borrando todo y con una solución mucho mas corta, seguramente estabas viviendo un XY problem.

::header::
Relleno: Make It

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# XY Problem - Porque lo vemos?

::contents::
1. Sepan que existe.
2. Si van a pedir ayuda, comienza con _porque_ estás haciendo lo que estás haciendo.
3. Si te piden ayuda, pregunta _porque_ están haciendo lo que están haciendo.

::header::
Relleno: Make It

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Un Ejemplo

::contents::
> **Maria Camila:** Como puedo sacar los ultimos 3 caracteres de una string?

<br />

> **Kenny:** Le puedes hacer str.slice(-3).

<br />

> **Maria Camila:** Okis, gracias!

::header::
Relleno: Make It

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Resultado

::contents::
```js {*}{lines:true}
function getFileExtension(filename) {
  return filename.slice(-3);
}
```

Esto está bien?

::header::
Relleno: Make It

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Analisis

::contents::
```js {*}{lines:true}
function getFileExtension(filename) {
  return filename.slice(-3);
}
```

Cual es el problema X? <br/>
Cual es el problema Y?

::header::
Relleno: Make It

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Analisis

::contents::
```js {*}{lines:true}
function getFileExtension(filename) {
  return filename.slice(-3);
}
```

Que inconvenientes trae esta implementación?

::header::
Relleno: Make It

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Mejor solución?

::contents::
```js {*}{lines:true}
function getFileExtension(filename) {
  return filename.split(".").pop();
}
```

::header::
Relleno: Make It

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---


# 🎉

# La vida es difícil, el backend no!
