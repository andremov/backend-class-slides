# Parcial 02

> ## Instrucciones:
>
> - Abrir carpeta del parcial usando VSCode.
> - Para realizar pruebas, puede ejecutar el archivo usando el comando `node [nombre-de-archivo]`
> - Leer detenidamente cada punto, desarrollar en el orden deseado.
> - Utilizar el archivo parcial2.js, renombrar el archivo a [codigo de estudiante].js.
> - No renombrar las funciones de los puntos.
> - Siga la guía de nombramiento de funciones.
> - Pueden desarrollar funciones auxiliares.
> - Cualquier codigo por fuera de funciones no será tomado en cuenta.
> - Solo se envía el archivo parcial1.js (con el nombre modificado).

## Puntos

1. Implemente una funcion que reciba los datos de estudiantes y retorne la informacion personal de los estudiantes "estrella" (promedio mayor a 2.5 y menor a 3.0).

2. Su compañero de trabajo, Julian, desarrolló el punto dos. Utilizando los conceptos aprendidos en JS Avanzado, mejore la función.

3. Desarrolle una funcion que reciba los datos de estudiantes y retorne los estudiantes que cumplan con los filtros y los datos "arreglados".

- FIX: Juntar nombres en campo "name".
- FIX: No incluir actividades extra curriculares.
- FIX: Solo incluir clases del semestre mas reciente.
- FILTER: Usuarios menores a 20 años
- FIX: Adicionar campo "title" segun genero (Sr. o Sra.)
- FIX: Sacar la informacion personal de su campo.

4. Mejore el punto cuatro utilizando los conceptos aprendidos en JS Avanzado.

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
