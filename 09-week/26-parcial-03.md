---
marp: true
theme: work-theme
title: Parcial 03
_class: title
class: body-center
header: Parcial 03
---

<style>
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
  }

  li {
    border: 1px solid rgba(255,255,255,0.75);
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    background: rgba(255, 255, 255, 0.05);
    width: 450px;
  }
</style>

# Parcial 03

## Desarollo Web Backend

:pencil: 2024-03

---

## Pregunta 1

Que es NodeJS?

- Un ambiente para ejecutar codigo Javascript
- Un servidor de Javascript
- Un framework de Javascript para montar un servidor
- Una libreria de Javascript con muchas funciones utiles (y/o necesarias)

---

## Pregunta 2

Cual es la funcion de NPM?

- Instalar paquetes de Node
- Manejar paquetes de Node
- Instalar y manejar Node
- Configurar e inicializar el proyecto de Node

---

## Pregunta 3

Que comando se puede usar para ejecutar un archivo de codigo Javascript?

- $ npm run (archivo)
- $ node run (archivo)
- $ npm (archivo)
- $ node (archivo)

---

## Pregunta 4

Que archivo se usa para definir dependencias de un proyecto?

- package.json
- index.json
- server.json
- package-lock.json
- node_modules.json
- nodemon.json

---

## Pregunta 5

Que funcion tiene el comando $npm i (package) ?

- Instalar el package nombrado
- Instalar un package aleatorio
- Inhabilitar el package nombrado
- Importar el package nombrado

---

## Pregunta 6

Que funcion tiene el comando $ npm i ?

- Instalar un package aleatorio
- Instalar unos packages predefinidos por Node/NPM
- Instalar los packages definidos en el archivo de configuracion del proyecto
- Instalar los packages recomendados por la comunidad para el proyecto
- "Profe, le soy sincero, no se"

---

## Pregunta 7

Como se crea un proyecto de Node?

- $ npm init
- $ npm install
- $ node init
- $ node init --y
- $ node install

---

## Pregunta 8

Como se instala NodeJS?

- Con el comando $ npm install
- Con el comando $ npm install nodejs
- Con el instalador
- Javascript trae NodeJS instalado
- Con el comando $ npm init
- Con el comando $ node install
- Con el comando $ node install nodejs
- Con el comando $ node init

---

## Pregunta 9

Que es .gitignore?

- Una carpeta donde se guardan los archivos a ignorar por git
- Un comando que agrega archivos y carpetas a la lista de ignorados por git
- Un archivo con la lista de ignorados por git
- Una extension que se le agrega a las carpetas para que git las ignore
- Un comando que te cura toda la vida en Counter Strike

---

## Pregunta 10

Que es una branch?

- Una linea de desarrollo independiente
- Una copia de un repositorio
- Una nueva funcionalidad siendo desarrollada
- Lo que se le muestra al cliente

---

## Pregunta 11

Cual es el proposito de la Main branch?

- Mostrar a inversores
- Juntar cambios
- Desplegar para el usuario final
- Realizar pruebas antes de mover el codigo al servidor de la aplicacion

---

## Pregunta 12

Cual es el proposito de la Staging branch?

- Juntar cambios de todos los desarrolladores antes de mandarlas a la main branch
- Realizar pruebas y mostrar la aplicacion a lo largo de la empresa
- Montar cambios para hacer commit
- Mostrar avances de una tarea antes de mandarlas a la dev branch

---

## Pregunta 13

Cual es el proposito de la dev branch?

- Desarrollar las tareas de cada desarrollador individualmenteÂ
- Juntar varias tareas desarrolladas para revisar la funcionalidad
- Mostrar los avances a inversores para buscar fondos
- Desplegarla para hacer pruebas entre la comunidad de desarrolladores

---

## Pregunta 14

Para que sirve un merge?

- Para agregar los cambios de una branch a otra
- Para evitar conflictos entre cambios
- Para tener claro el responsable de algun cambio
- Para disminuir la cantidad de branches activas

---

## Pregunta 15

Que se hace si hice un commit en la branch equivocada?

- "Soft reset, cambio de branch, stage, commit"
- "Hard reset, cambio de branch, stage, commit"
- "Cambio de branch, stage, commit"
- "Rebase, stage, commit"

---

## Pregunta 16

Cuando se crea(n) una(s) branch(es)?

- Cuando se crea un proyecto
- Cuando se comience una tarea de desarrollo
- Cuando los clientes se quejen del desorden del repositorio
- "Los lunes, al iniciar el dia de trabajo"

---

## Pregunta 17

"Usualmente, una nueva branch se crea donde?"

- En el ultimo commit de la main branch
- En el ultimo commit de la staging branch
- En el ultimo commit de la dev branch
- En el ultimo commit de la testing branch

---

## Pregunta 18

Que funcion tiene las acciones push y pull?

- "Push empuja los cambios de remote a localPull hala los cambios a remote, desde local"
- Push empuja los cambios de local a remotePull hala los cambios de remote a local
- "Push mueve cambios de dev a staging, o de staging a mainPull mueve cambios de main a staging, o de staging a dev"
- Push manda una notificacion al lider del equipo para realizar revisionPull busca y recibe los comentarios de una revision

---

## Pregunta 19

Que puedo utilizar para actualizar el commit base de una branch?

- "Crear una nueva branch en el commit deseado, cherry pick los commits"
- Rebase la branch al commit deseado
- Checkout la branch al commit deseado
- "Crear una nueva branch en el commit deseado, rebase los commits"
- Cherry pick la branch al commit deseado

---

## Pregunta 20

Que significa cuando alguien hace referencia a una remote branch?

- "Una branch controlada de manera automatizada, o remota"
- "Una branch a la que no se accede directamente, como staging o main"
- Una branch presente en la nube
- Una branch que cuenta con los controles del repositorio

---

## Pregunta 21

Cual es la diferencia entre un hard reset y un soft reset?

- "No hay diferencia, reset es reset"
- "Hard reset automaticamente hace reset hasta el inicio de una branch, mientras que soft es hasta el commit indicado"
- "Hard reset hace reset de la version local y remote de una branch, mientras que soft es solo la version local"
- "Hard reset borra todos los cambios de los commits, mientras que soft deshace los commits pero se queda con los cambios"

---

## Pregunta 22

Cuales son los pasos para realizar un commit?

- Realizar cambio > Dar stage a los cambios > Dar commit
- Realizar cambio > Dar commit
- Realizar cambio > Dar merge a los cambios > Dar commit
- Dar stage > Dar commit

---

## Pregunta 23

Que es git?

- Un lenguaje de programacion
- Un sistema de manejo de bases de datos
- Un sistema de control de versiones
- Un sistema de orquestacion para trabajo colaborativo
- Un sistema operativo basado en el kernel de Linux
- "Te pasaste, es una de las de arriba"

---

## Pregunta 24

Que error aparece si un metodo GET crea un elemento?

- No aparece ningun error
- Invalid endpoint
- Prohibited action
- Invalid action

---

## Pregunta 25

Una operacion basica de almacenamiento UPDATE enviarÃ­a datos al backend por que medio?

- Query
- Body
- Params
- Response

---

## Pregunta 26

Donde envia el backend los datos de un metodo POST para el frontend?

- Query
- Body
- Params
- Response

---

## Pregunta 27

Donde estan los datos para filtros y paginacion?

- Query
- Body
- Params
- Response

---

## Pregunta 28

Si un endpoint es un metodo POST, que se espera que haga el endpoint?

- Busque un elemento
- Actualice un elemento
- Cree un elemento
- Borre un elemento

---

## Pregunta 29

Que cosas juntas forman un endpoint?

- Metodo HTTP
- Ruta
- Operacion basica de almacenamiento
- Direccion a base de datos
- Nombre de modelo de base de datos
- Credenciales a servidor de API
- URL de la API
- Implementación

---

## Pregunta 30

Donde envia el frontend los datos de una operacion CREATE para el backend?

- Query
- Body
- Params
- Response

---

## Pregunta 31

Cuales son los metodos HTTP?

- "Create, Read, Update, Delete"
- "Post, Get, Patch, Delete"
- "Create, Read, Update, Remove"
- "Post, Get, Update, Delete"

---

## Pregunta 32

Que codigo significa ""OK""?

- 200
- 400
- 500
- 100

---

## Pregunta 33

Un endpoint que retorna los usuarios mayores a cierta edad serÃ­aÂ

- Get
- Create
- Delete
- Post
- Put
- Update

---

## Pregunta 34

Cual es el uso de un soft delete?

- Poder recuperar informacion en caso que se haya realizado un borrado por error
- Reducir el peso de conciencia del usuario al enviar un elemento al reino de las sombras
- Implementar una papelera en la aplicacion
- Agrupar archivos a borrar para el borrado automatico y reducir las operaciones en el servidor

---

## Pregunta 35

Cuales de estas afirmaciones son correctas?

- Un codigo 1XX es informativo
- Un codigo 2XX es desinformativo
- Un codigo 0XX es exitoso
- Un codigo 4XX es un error de servidor
- Un codigo 4XX es un error de cliente
- Un codigo 2XX es exitoso
- Un codigo 5XX es un error
- Un codigo 3XX es error de cliente
- Un codigo 3XX es error de servidor
- Un codigo 1XX es de redireccion

---

## Pregunta 36

Que formato utiliza el body?

- JSON
- BSON
- REST
- JSX

---

## Pregunta 37

El metodo HTTP PATCH corresponde a que operacion basica de almacenamiento?

- Create
- Read
- Update
- Delete
- Post
- Put
- Delete
- Get

---

## Pregunta 38

Que error aparece si los datos de filtracion o paginacion son enviados por el canal incorrecto?

- No aparece ningun error
- Invalid channel
- No such channel
- Channel unavailable
- Undefined channel
- Invalid values

---

## Pregunta 39

Un endpoint que retorna los usuarios mayores a cierta edad recibirÃ­a la edad en...

- Query
- Params
- Body
- Response

---

## Pregunta 40

Cual de estas no es un metodo HTTP?

- Create
- Put
- Delete
- 