---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Git
_class: invert title
class: body-center
header: Semana 6: Git
_header: ""
---

 <style>
    .star {
      color: rgba(220, 140, 60, 1);
    }
 </style>

# Git

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

Paginas web que proveen hosting de repositorios de Git.

##

---

<!--
_class: body-center align-center
 -->

## <span class="star">:star: Concepto 1:</span> Repositorio

Un repositorio (de software) o “repo”, es un almacenamiento para un software.

Usualmente, un repo equivale a un proyecto.

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

Nada, porque el staging area esta vacio.

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

Los cambios realizados en un software o proyecto deben ser agregados a lo que se llama “staging área”.

Al hacer un commit, solo lo que esté en el staging área será parte del commit.

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

## <span class="star">:star: Concepto 5:</span> Branches

##
