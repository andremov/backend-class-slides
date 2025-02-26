# Parcial 01

> ## Instrucciones:
>
> - Abrir carpeta del parcial usando VSCode.
> - Para realizar pruebas, puede ejecutar el archivo usando el comando `node [nombre-de-archivo]`
> - Leer detenidamente cada punto, desarrollar en el orden deseado.
> - Utilizar el archivo parcial1.js, renombrar el archivo a [codigo de estudiante].js.
> - No renombrar las funciones de los puntos.
> - Pueden desarrollar funciones auxiliares.
> - Cualquier codigo por fuera de funciones no será tomado en cuenta.
> - Solo se envía el archivo parcial1.js (con el nombre modificado).
> - Buena suerte!

## Puntos

1. Implemente una funcion que reciba los datos de estudiantes y retorne la cantidad de estudiantes en matricula condicional (promedio por debajo de 3.3).

2. Implemente una funcion que reciba los datos de estudiantes y retorne una lista con el nombre completo de cada estudiante.

3. Implemente una funcion que reciba los datos de estudiantes y retorne una lista con los \_id de cada estudiante unicamente, tras ser ordenados ascendentemente por altura.

4. Implemente una funcion que reciba una lista de numeros y retorne el promedio de la lista.

5. Implemente una funcion que reciba una palabra y retorne si la palabra es palindroma o no.

> Una palabra palindroma es aquella que es igual de atras para adelante y de adelante para atras.

6. Implemente una funcion que reciba una palabra y la invierta.

7. Implemente una funcion que reciba una lista de objetos cualquiera y el nombre de un campo y retorne la lista de objetos ordenada ascendemente segun el valor del campo.

## Información Adicional

- El archivo datos.json contiene datos de estudiantes para que realicen pruebas. A continuación pueden ver un ejemplo de un estudiante:

```js
{
  "_id":"par01estid001",
  "nombre":"Alison",
  "apellido":"Gonzalez",
  "altura":1.7,
  "cursos": [
    {"nota":0.6,"nombre":"Matemáticas II"},
    {"nota":5.1,"nombre":"Sociales III"},
    {"nota":4.8,"nombre":"Química I"},
    {"nota":4.8,"nombre":"Castellano III"},
    {"nota":0.8,"nombre":"Química II"},
    {"nota":1.5,"nombre":"Historia III"},
    {"nota":1.3,"nombre":"Sociales III"}
  ]
}
```

- Los estudiantes tienen una cantidad variable de cursos.

- Para el punto 1, 2 y 3, pueden utilizar los datos en el archivo datos.json para realizar pruebas. Hay 72 estudiantes en matricula condicional.

- Para el punto 7, también pueden utilizar los datos en el archivo datos.json, con el campo de altura.
