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

1. Desarrolle una funcion llamada promedioFinal que reciba una lista de listas de números por parámetro, y retorne el promedio de todos los números.

| Entrada                          | Salida |
| -------------------------------- | ------ |
| [[4, 5], [2, 1], [0, 1], [7, 0]] | 2.5    |

##

---

2. Desarrolle una funcion llamada limpiarNombre que reciba un string del nombre de una persona por parámetro y retorne una lista de los nombres sin espacios.

| Entrada           | Salida               |
| ----------------- | -------------------- |
| " Victor Garcez " | ["Victor", "Garcez"] |

##

---

1. Desarrolle una funcion llamada sortObjects que reciba una lista de objetos y una key del objeto por parámetro y la lista ordenada ascendemente según el valor correspondiente a la key.

| Entrada                                                                                                        | Salida                                                                                               |
| -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [<br/>{altura: 1.7, puntaje: 7},<br/>{altura: 1.3, puntaje: 10},<br/>{altura: 2.0, puntaje: 8}<br/>], “altura” | [<br/>{altura: 1.3, puntaje: 10},<br/>{altura: 1.7, puntaje: 7},<br/>{altura: 2.0, puntaje:8 }<br/>] |

##

---

<style scoped>
    table {
        font-size: 0.9rem;
    }
</style>

4. Desarrolle una funcion llamada limpiarLista que reciba una string con formato CSV por parámetro y retorne una lista de objetos con los datos, y la nota final calculada.

   | Entrada (Un solo estudiante)           | Salida                                                                                                                                 |
   | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
   | "Victor Garcez ,C,3.59,3.5,4.7,4.7,0;" | [<br/>{<br/>nombre: "Victor",<br/>apellido: "Garcez",<br/>curso: “C”,<br/>notas: [2.59, 2.1, 4.2, 4.7],<br/>final: 3.3975<br/>},<br/>] |

---

5. Desarrolle una funcion llamada bestInClass que reciba una string con formato CSV por parámetro, y un curso, y retorne una lista con el nombre y apellido de los 3 estudiantes de ese curso con nota final mas altap-8u [].

---

## Rubrica Punto 1

| Criterio                                | Puntos |
| --------------------------------------- | ------ |
| La funcion esta correctamente nombrada. | 1      |
| La funcion retorna el resultado.        | 1      |
| La funcion compila.                     | 1      |
| El resultado es el correcto.            | 1      |
| El resultado tiene el formato correcto. | 1      |
| Total                                   | 5      |

##

---

## Rubrica Punto 2

| Criterio                                | Puntos |
| --------------------------------------- | ------ |
| La funcion esta correctamente nombrada. | 1      |
| La funcion retorna el resultado.        | 1      |
| La funcion compila.                     | 1      |
| El resultado es el correcto.            | 1      |
| El resultado tiene el formato correcto. | 1      |
| Total                                   | 5      |

##

---

## Rubrica Punto 3

| Criterio                                | Puntos |
| --------------------------------------- | ------ |
| La funcion esta correctamente nombrada. | 1      |
| La funcion retorna el resultado.        | 1      |
| La funcion compila.                     | 1      |
| El resultado es el correcto.            | 1      |
| El resultado tiene el formato correcto. | 1      |
| Total                                   | 5      |

##

---

## Rubrica Punto 4

| Criterio                                | Puntos |
| --------------------------------------- | ------ |
| La funcion esta correctamente nombrada. | 1      |
| La funcion retorna el resultado.        | 1      |
| La funcion compila.                     | 1      |
| El resultado es el correcto.            | 1      |
| El resultado tiene el formato correcto. | 1      |
| Total                                   | 5      |

##

---

## Rubrica Taller

| Criterio                                | Puntos |
| --------------------------------------- | ------ |
| El archivo esta nombrado correctamente. | 1      |
| Punto 1.                                | 5      |
| Punto 2.                                | 5      |
| Punto 3.                                | 5      |
| Punto 4.                                | 5      |
| Punto 5.                                | 5      |
| Total                                   | 26     |

##
