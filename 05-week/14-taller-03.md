---
marp: true
theme: work-theme
title: Taller 03
_class: title
class: body-center
header: Taller 03
---

<style>
    p:nth-child(5) {
        text-align: center;
        font-size: 0.8rem;
        color: rgba(var(--text-color), 0.6);
    }
</style>

# Taller 03

## Desarrollo Web Backend

##

Cree archivo llamado taller-03.js, realice los siguientes puntos, y súbalo a su repositorio de talleres.

:pencil: 2024-03

---

## Punto 1

Desarrolle una funcion llamada **desglosarString** que reciba una string, y la string "vocales" o "consonantes", y retorne la cantidad de vocales o consonantes de la string recibida.

| Entrada                      | Salida |
| ---------------------------- | ------ |
| "murcielagos", "vocales"     | 5      |
| "murcielagos", "consonantes" | 6      |

##

---

## Punto 2

Desarrolle una funcion llamada **twoSum** que reciba una lista de numero enteros y otro numero entero y retorne los indices de los numeros del arreglo que sumados sean el otro numero.

| Entrada           | Salida |
| ----------------- | ------ |
| [2, 7, 11, 15], 9 | [0, 1] |
| [3, 4, 2], 6      | [1, 2] |

No se permite utilizar el mismo numero dos veces.

---

## Punto 3

Desarrolle una funcion llamada **conversionRomana** que reciba una string de cifras romanas y retorne el equivalente en cifras arábigas.

| Entrada  | Salida |
| -------- | ------ |
| "III"    | 3      |
| "XIV"    | 14     |
| "MMXXIV" | 2024   |
| "MXMVII" | 1997   |

---

## Punto 4

Desarrolle una funcion llamada **descomposicion** que reciba una string de palabras separada por comas, donde la primera palabra es la palabra a descomponer y el resto son el diccionario a utilizar. La función debe retornar las dos palabras del diccionario que compongan la palabra a descomponer.

|                   Entrada              |        Salida        |
| -------------------------------------- | -------------------- |
| "malhumor,al,hum,humor,m,mal,malhu"    | ["mal", "humor"]     |

---

## Rubrica Puntos

| Criterio                                         | Puntos |
| ------------------------------------------------ | ------ |
| La funcion no está correctamente nombrada.       | -1     |
| La funcion no compila.                           | -1     |
| La funcion no retorna el resultado.              | -1     |
| El resultado es el correcto en formato correcto. | 2      |
| Total                                            | 2      |

##

---

## Rubrica Taller

| Criterio | Puntos |
| -------- | ------ |
| Punto 1. | 2      |
| Punto 2. | 2      |
| Punto 3. | 2      |
| Total    | 6      |

##
