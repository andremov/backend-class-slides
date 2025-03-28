---
marp: true
theme: work-theme
title: Taller 04
_class: title
class: body-center
header: Taller 04
---

<style>
    p:nth-child(4) {
        text-align: center;
        font-size: 0.8rem;
        color: rgba(var(--text-color), 0.6);
    }
</style>

# Taller 04

## Desarollo Web Backend

Cree una **carpeta** llamada taller-04, realice los siguientes puntos, y súbalo a su repositorio de talleres.

:pencil: 2024-03

---

## Punto 1

Desarrolle un endpoint en la ruta **/users/hobby** que retorne los usuarios que cuenten con el hobby enviado.

##

---

## Punto 2

Desarrolle un endpoint en la ruta **/users/exists** que retorne si existe el usuario con el codigo enviado.

##

---

## Punto 3

Desarrolle un endpoint en la ruta **/users/hobby/count** que retorne la cantidad de usuarios con el hobby enviado

##

---

## Punto 4

Desarrolle un endpoint en la ruta **/users/is-free** que retorne los usuarios con tiempo libre (menos de 3 hobbies).

##

---

## Punto 5

Desarrolle un endpoint en la ruta **/users/suggest** que agregue el hobby enviado al usuario enviado. En caso de que el usuario tenga 3 hobbies, no se debe agregar el hobby.

##
---

## Punto 6

Desarrolle un endpoint en la ruta **/users** que realice el registro de un usuario nuevo a la "base de datos". La "base de datos" es el array. Debe tener toda la información, y al menos dos hobbies.

```js
// DATOS:
const usuarioNuevo = { 
    codigo: "200171902", 
    nombre: "Edison", 
    apellido: "Pacheco", 
    hobbies: ["estudiar", "carnavalear", "ir a cine"] 
};
```

##

---

## Rubrica Taller

| Criterio                                    | Puntos |
| ------------------------------------------- | ------ |
| La carpeta esta nombrado incorrectamente.   | -1     |
| El proyecto no compila.                     | -1     |
| La implementación no sigue la arquitectura. | -1     |
| Puntos.                                     | 6      |
| Total                                       | 6 (-3) |

##
