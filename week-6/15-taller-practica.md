---
marp: true
theme: work-theme
title: Taller Practica
_class: title
class: body-center
header: Taller Practica
---

<style>
    p:nth-child(4) {
        text-align: center;
        font-size: 0.8rem;
        color: rgba(var(--text-color), 0.6);
    }
</style>

# Taller Practica

## Desarollo Web Backend

En un archivo llamado [codigoEstudiante].js realice los siguientes puntos:

---

1. Dada una lista de numeros, desarrolle una función que retorne una lista con los elementos de la lista original elevados al cuadrado.

| Entrada         | Salida            |
| --------------- | ----------------- |
| [1, 2, 3, 4, 5] | [1, 4, 9, 16, 25] |

##

---

2. Dada una lista de numeros, desarrolle una función (oddSum) que retorne la suma de los numeros impares.

| Entrada         | Salida |
| --------------- | ------ |
| [1, 2, 3, 4, 5] | 9      |

##

---

## Dato Ejemplo (un estudiante)

```js
{
 "_id": "asc5sde01",
 "firstName": "Mariana",
 "lastName": "Hernandez",
 "height": 1.5,
 "courses": [
    {
        "name": "Inglés",
        "grade": 2.5
    },
    {
        "name": "Matemáticas",
        "grade": 3.6
    }
 ]
}
```

##

---

<style scoped>
p:nth-child(3){
    text-align: center;
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 100%;
    color: rgba(var(--text-color), 0.6);
}
</style>

3. Implemente una funcion que reciba una lista de estudiantes y retorne la cantidad de estudiantes en matricula condicional (promedio por debajo de 3.3).

Todos los cursos tienen el mismo peso.

---

4. Implemente una funcion que reciba una lista de estudiantes y retorne una lista con el nombre completo de cada estudiante.

---

5. Implemente una funcion que reciba una lista de estudiantes y retorne una lista con los \_id de cada estudiante ordenados ascendentemente por altura.

---

6. Dado un numero, desarrolle una función que retorne el factorial de ese numero.

| Entrada | Salida |
| ------- | ------ |
| 4       | 24     |

##

---

7. Implemente una funcion que reciba una lista de numeros y retorne el promedio de la lista.

| Entrada         | Salida |
| --------------- | ------ |
| [1, 2, 3, 4, 5] | 3      |

##

---

8. Implemente una funcion que reciba una palabra y retorne si una palabra es palindroma o no.

| Entrada       | Salida |
| ------------- | ------ |
| "onomatopeia" | false  |
| "aerea"       | true   |

##

---

9. Implemente una función que reciba una oración y retorne la oración con las palabras invertidas sin invertir el orden de las palabras.

| Entrada              | Salida               |
| -------------------- | -------------------- |
| "anita lava la tina" | "atina aval al anit" |
| "esto es un ejemplo" | "otse se un olpmeje" |

##

---

10. Implemente una funcion que reciba una lista de objetos cualquiera y un parametro y retorne la lista de objetos ordenada ascendemente segun el valor del parametro.
