---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Arquitectura
_class: invert title
class: body-center
header: Semana 8: Arquitectura
_header: ""
---

# Arquitectura

---

## Arquitectura del Backend

1. Monolito
2. Microservicios
3. Serverless

##

---

## Monolito

Todo el codigo de la aplicación está en un solo proyecto, una sola app.

La app se despliega completa, y si se necesita mayor capacidad, se despliega una mayor cantidad.

##

---

## Microservicios

Lo que sería una aplicación "monolito" está separada en secciones, en servicios pequeños e independientes que se comunican entre si con una API interna.

Esta arquitectura permite desplegar los servicios independientes de cada uno, por lo que podrías, por ejemplo, desplegar 3 veces el servicio de usuario, pero 1 sola vez el servicio de autenticación.

##

---

## Serverless

Similar a microservicios, con la diferencia que le dejas el control de la infraestructura y despliegue al proveedor del cloud hosting.

##

---

## Arquitectura de la aplicación Backend

1. Clean Architecture
2. Hexagonal Architecture
3. Onion Architectura
4. Screaming Architecture
5. DCI
6. BCE

##

---

## Arquitectura de la aplicación Backend

1. **Clean Architecture**
2. Hexagonal Architecture
3. Onion Architectura
4. Screaming Architecture
5. DCI
6. BCE

##

---

<!--
_class: body-center align-center
 -->

 <style scoped>
  img {
    width: 700px;
  }
 </style>

## Clean Architecture

![img](../assets/week-08/clean-arch.png)

---

## Clean Architecture

1. Capa 1 > Web, Dispositivos
2. Capa 2 > Controladores
3. Capa 3 > Casos de Uso
4. Capa 4 > Entidad

##

---

<!--
_class: body-center align-center
 -->

## Capas

Las capas son una guía. De hecho, no usamos esas capas.

##

---

<style scoped>
  p:nth-child(4) {
    color: rgba(var(--text-color), 0.6);
    text-align: center;
    margin: auto;
    max-width: 800px;
    height: 0;
  }
</style>

## Capas

1. Capa 1 > Frontend
2. Capa 2 > Rutas
3. Capa 3 > Controladores
4. Capa 4 > Casos de Uso / Acciones
5. Capa 5 > Base de Datos

Esto es distinto, tambien, al diagrama porque el diagrama ubica la DB en las afueras.

##

---

<!--
_class: body-center align-center
 -->

## Capa 1 - Frontend

Esta capa es literalmente el frontend.

El frontend realiza requests al backend. La **capa 2** recibe esos requests.

##

---

<style scoped>
  p {
    max-width: 800px;
    margin: auto;
  }
</style>

<!--
_class: body-center align-center
 -->

## Capa 2 - Rutas

Esta capa recibe los requests por parte del frontend.

Es donde se define la ruta del endpoint y que función de la **capa 3** se ejecuta.

Adicionalmente, podría ser responsable de extraer los datos del request (body, query, params).

Existe un archivo para cada modelo.

##

---

<style scoped>
  p {
    max-width: 800px;
    margin: auto;
  }
</style>

<!--
_class: body-center align-center
 -->

## Capa 3 - Controladores

Esta capa es ejecutada por la **capa 2** con todos los datos necesarios para su ejecución pasado por parametros.

Esta capa ejecuta todas las funciones de la **capa 4** que considere necesario para realizar su labor.

Existe un archivo para cada modelo.

##

---

<!--
_class: body-center align-center
 -->

## Capa 4 - Casos de Uso / Acciones

Esta capa es ejecutada por la **capa 3** con todos los datos necesarios para su ejecución pasado por parametros.

Esta capa realiza llamados a la **capa 5** y retorna el resultado.

Existe un archivo para cada accion de cada modelo.

##

---

<!--
_class: body-center align-center
 -->

## Capa 5 - Base de Datos

Esta capa es literalmente la base de datos.

Pero su representación en el codigo es el archivo del modelo.

##

---

<style scoped>
  p:nth-child(4) {
    text-align: center;
  }
</style>

## Estructura de proyecto

Cada capa está representada en un archivo distinto, siguiendo esta estructura:

[modelo].[capa].js

##

---

## Estructura de proyecto

Entonces, para el modelo user, tendríamos los siguientes archivos:

| Archivo              | Capa        |
| -------------------- | ----------- |
| user.route.js        | Ruta        |
| user.controller.js   | Controlador |
| createUser.action.js | Acción      |
| readUser.action.js   | Acción      |
| updateUser.action.js | Acción      |
| deleteUser.action.js | Acción      |
| user.model.js        | BD          |

---

## Estructura de proyecto

Juntamos todas la rutas en una carpeta de rutas, todos los controladores en una carpeta de controladores, etc?

O

Juntamos todo lo involucrado a un modelo en su propia carpeta?

##

---

## Estructura de proyecto

Capas juntas o modelo junto?

Eso ya es preferencia propia.

Yo prefiero modelo junto.

##
