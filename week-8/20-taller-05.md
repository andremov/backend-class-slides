---
marp: true
theme: work-theme
title: Taller 05
_class: title
class: body-center
header: Taller 05
---

<style>
    p:nth-child(4) {
        text-align: center;
        font-size: 0.8rem;
        color: rgba(var(--text-color), 0.6);
    }
</style>

# Taller 05

## Desarollo Web Backend

En un archivo llamado [codigoEstudiante].js realice los siguientes puntos:

---

1. Desarrolle un endpoint en la ruta **/users/hobby** que retorne los usuarios que cuenten con el hobby enviado.

```js
// DATOS:
const users = [
  { name: "John", hobbies: ["singing", "walking", "playing guitar"] },
  { name: "Terry", hobbies: ["swimming", "playing guitar"] },
  { name: "Anna", hobbies: ["walking", "swimming", "playing guitar"] },
  { name: "Paul", hobbies: ["swimming", "singing"] },
];
```

##

---

2. Desarrolle un endpoint en la ruta **/users/exists** que retorne si el usuario con el id enviado existe.

```js
// DATOS:
const users = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];
```

##

---

3. Desarrolle un endpoint en la ruta **/pilots/team-experience** que retorne la experiencia total del equipo de pilotos enviado.

```js
// DATOS:
const pilots = [
 { id: 10, name: "Poe Dameron", years: 14, team: ‘clscwe’},
 { id: 2, name: "Temmin 'Snap' Wexley", years: 30, , team: ‘axvedw },
 { id: 41, name: "Tallissan Lintra", years: 16, , team: ‘clscwe’},
 { id: 99, name: "Ello Asty", years: 22, , team: ‘axvedw}
];
```

##

---

4. Desarrolle un endpoint en la ruta **/factions/list** que retorne los pilotos de la facción enviada.

```js
// DATOS:
const pilots = [
  { id: 2, name: "Wedge Antilles", faction: "Rebels" },
  { id: 8, name: "Ciena Ree", faction: "Empire" },
  { id: 40, name: "Iden Versio", faction: "Empire" },
  { id: 66, name: "Thane Kyrell", faction: "Rebels" },
];
```

##

---

5. Desarrolle un endpoint en la ruta **/users** que realice el registro de un usuario nuevo a la "base de datos". La base de datos es el array.

```js
// DATOS:
const users = [{ id: 1, name: "Robin Restrepo", carrera: "Psicologia" }];
```

##

---

## Rubrica Punto 1

| Criterio                             | Puntos |
| ------------------------------------ | ------ |
| La ruta tiene el formato correcto.   | 1      |
| La ruta responde con el resultado.   | 1      |
| La ruta compila.                     | 1      |
| El resultado es el correcto.         | 1      |
| El resultado tiene el tipo correcto. | 1      |
| Total                                | 5      |

##

---

## Rubrica Punto 2

| Criterio                             | Puntos |
| ------------------------------------ | ------ |
| La ruta tiene el formato correcto.   | 1      |
| La ruta responde con el resultado.   | 1      |
| La ruta compila.                     | 1      |
| El resultado es el correcto.         | 1      |
| El resultado tiene el tipo correcto. | 1      |
| Total                                | 5      |

##

---

## Rubrica Punto 3

| Criterio                             | Puntos |
| ------------------------------------ | ------ |
| La ruta tiene el formato correcto.   | 1      |
| La ruta responde con el resultado.   | 1      |
| La ruta compila.                     | 1      |
| El resultado es el correcto.         | 1      |
| El resultado tiene el tipo correcto. | 1      |
| Total                                | 5      |

##

---

## Rubrica Punto 4

| Criterio                             | Puntos |
| ------------------------------------ | ------ |
| La ruta tiene el formato correcto.   | 1      |
| La ruta responde con el resultado.   | 1      |
| La ruta compila.                     | 1      |
| El resultado es el correcto.         | 1      |
| El resultado tiene el tipo correcto. | 1      |
| Total                                | 5      |

##

---

## Rubrica Punto 5

| Criterio                             | Puntos |
| ------------------------------------ | ------ |
| La ruta tiene el formato correcto.   | 1      |
| La ruta responde con el resultado.   | 1      |
| La ruta compila.                     | 1      |
| El resultado es el correcto.         | 1      |
| El resultado tiene el tipo correcto. | 1      |
| Total                                | 5      |

##

---

## Rubrica Taller

| Criterio                                       | Puntos |
| ---------------------------------------------- | ------ |
| El archivo esta nombrado correctamente.        | 1      |
| Punto 1.                                       | 5      |
| Punto 2.                                       | 5      |
| Punto 3.                                       | 5      |
| Punto 4.                                       | 5      |
| Punto 5.                                       | 5      |
| La implementacion sigue el estilo del proyecto | 4      |
| Total                                          | 30     |
