---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Git Básico
_class: invert title
class: body-center
header: Semana 2: Git Basico
_header: ""
---

<style>
  .star {
    color: rgba(220, 140, 60, 1);
  }
</style>

# Git Basico

:pencil: 2025-01 :heavy_minus_sign: :stopwatch: 10 min.

---

<!--
_class: body-center align-center
 -->

## Que es Git?

Git es un sistema de control de versiones.

##

---

<!--
_class: body-center align-center
 -->

## GitHub, GitLab, BitBucket

Paginas web que proveen hosting de <span class="star">repositorios</span> de Git.

##

---

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 1:</span> Repositorio

Un repositorio (de software) o “repo”, es un almacenamiento para un software.

Usualmente, un repo equivale a un proyecto.

Un repo tiene un historial de cambios, donde cada entrada es un <span class="star">commit</span>.

##

---

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 2:</span> Commit

Un commit es una entrada en el historial de cambios de un repositorio.

"Un commit es un cambio."

##

---

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 3:</span> .gitignore

Archivo con reglas para excluir archivos o carpetas de git.

Si un archivo o carpeta ya tiene historial en git, el .gitignore es ignorado.

##

---

<!--
_class: body-center
 -->

## <span class="star">:star: Concepto 3:</span> .gitignore

Ejemplo:

```js
.env
.env.local
.env.development
```

##

---

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 4:</span> Stage y Unstage

Los cambios realizados en un software o proyecto deben ser agregados a lo que se llama “staging área”.

##

---

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 4:</span> Stage y Unstage

Cree dos archivos: archivo1.js y archivo2.js

| Cambios       | Staging Area | Commit |
| ------------- | ------------ | ------ |
| + archivo1.js |              |        |
| + archivo2.js |              |        |

##

---

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 4:</span> Stage y Unstage

Hice **stage** de la creacion de archivo1.js

| Cambios       | Staging Area  | Commit |
| ------------- | ------------- | ------ |
|               | + archivo1.js |        |
| + archivo2.js |               |        |

##

---

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 4:</span> Stage y Unstage

Hago commit de los cambios en la staging area.

| Cambios       | Staging Area | Commit        |
| ------------- | ------------ | ------------- |
|               |              | + archivo1.js |
| + archivo2.js |              |               |

##

---

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 4:</span> Stage y Unstage

Que pasa si hago un commit ahora mismo?

| Cambios       | Staging Area | Commit        |
| ------------- | ------------ | ------------- |
|               |              | + archivo1.js |
| + archivo2.js |              |               |

##

---

<style scoped>
td:nth-child(2) {
    background: rgba(30, 30, 100, 0.9);
}
</style>

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 4:</span> Stage y Unstage

Nada, porque el staging area está vacio.

| Cambios       | Staging Area | Commit        |
| ------------- | ------------ | ------------- |
|               |              | + archivo1.js |
| + archivo2.js |              |               |

##

---

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 4:</span> Stage y Unstage

Los cambios realizados en un software o proyecto deben ser agregados a lo que se llama "staging area".

Al hacer un commit, solo lo que esté en el staging area será parte del commit.

##

---

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 4:</span> Stage y Unstage

Unstage es cuando un cambio en el staging area es removido del staging area.

| Cambios       | Staging Area  | Commit |
| ------------- | ------------- | ------ |
|               | + archivo1.js |        |
| + archivo2.js |               |        |

##

---

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 4:</span> Stage y Unstage

Unstage es cuando un cambio en el staging area es removido del staging area.

| Cambios       | Staging Area | Commit |
| ------------- | ------------ | ------ |
| + archivo1.js |              |        |
| + archivo2.js |              |        |

##

---

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 5:</span> Remote

Remote es el repositorio (y branches) que están en la nube.

**Como pueden estar las branches en la nube?**

##

---

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 6:</span> Push + Pull

**Push**: Enviar cambios de una branch local a la versión remota de la branch.
_Si la branch remota no existe, **push** la crearía en el repo remote._

**Pull**: Bajar los cambios de una branch remota a la versión local de la branch.

##

---

## Ahora mismo

1. Creen una cuenta de Github (si no la tienen).
2. Creen un repositorio de Github nuevo, con un nombre similar a "talleres-dllo-backend".

- Hay un botón verde en la pagina principal de Github que dice **New**, o **Nuevo**.
- Lo unico requerido es que le pongan nombre.

##

---

## Suban un archivo

1. Creen un archivo en su computador llamado "taller1.js".
2. Suban el archivo al repositorio.

- En la pagina del repositorio debe haber un archivo que diga **Add file**, o **Agregar archivo**
- Alternativamente, pueden arrastar el archivo sobre el repositorio.
- Finalmente, usen el botón verde de **Commit**.

##

---

<!--
_class: title
-->

# :tada:

# Felicidades!
