---
marp: true
theme: doc-theme
paginate: true
_paginate: skip
title: Proyecto-02
_class: invert title
class: body-center
header: "Proyecto 02"
_header: ""
---

<style scoped>
  h1 {
    margin-bottom: 0;
  }
</style>

# Proyecto 02

<h2 class="center serif">Desarrollo Web Backend</h2>

Desarrollen un clon de "Aurora" con arquitectura de microservicios, donde estudiantes pueden matricularse y dar de baja a materias y profesores pueden subir, modificar, y borrar notas para estudiantes en sus materias.

- Las APIs debe crearse como repositorio en Github y debe ser "entregada" al profesor utilizando el enlace en el catalogo, donde **se enviarán únicamenten los enlace a los repositorios**, en caso de que cada microservicio este alojados en diferentes repositorios, o el enlace al monorepositorio, en caso de que los microservicio estén alojados en un mismo repositorio.
- El proyecto se desarrolla en grupos de 3 estudiantes, con fecha de entrega **viernes, 29 de noviembre a las 23:59.**

## Sobre los Microservicios

Los microservicios a desarrollar son:

- Usuarios (Estudiantes profesores y administración)
- Materias
- Matricula
- Autenticación
- Gateway Principal

---

#### Estructura Minima de Modelo de Usuarios

1. Nombre de usuario o correo (para el inicio de sesión)
2. Contraseña
3. Nombre
4. Apellido
5. Fecha de nacimiento

- Adicionar a esto la logica de distinción entre estudiantes, profesores y administración, a criterio del estudiante.
- La contraseña debe estar hasheada y usar una Salt. La salt debe ser proporcionada manualmente por el estudiante, no se acepta la salt automatica del algoritmo de hasheo.
- El algoritmo de hasheo a utilizar es criterio del estudiante.

#### Estructura Minima de Modelo de Materias

1. Nombre
2. Departamento
3. Semestre de proyección en malla
4. Profesor
5. Evaluaciones
6. Porcentaje de Evaluaciones

#### Estructura Minima de Modelo de Matricula

1. Estudiante
2. Materia
3. Semestre (por ejemplo, "202410")
4. Notas
5. Nota final

- La nota final debe ser calculada por el sistema, no enviada en una petición.

---

#### Funciones de los microservicios

##### 1. Usuarios (Estudiantes, profesores y administración)

- Creación de Usuario
  - Realizado por administración
- Lectura de Usuario
- Modificación de Información de Usuario
  - Realizado por el mismo usuario, o por administración
- Borrado de Usuario
  - Realizado por el mismo usuario, o por administración

##### 2. Materias

- Creación de Materia
  - Realizado por administración
- Lectura de Materia
- Modificación de Información de Materia
  - Realizado por el profesor de la materia, o por administración
- Borrado de Materia
  - Realizado por administración

##### 3. Matricula

- Creación de Matricula
  - Realizado por estudiantes, o por administración
- Lectura de Matricula
  - Realizado por el estudiante en cuestión, el profesor en cuestión, o por administración
- Modificación de Información de Matricula
  - El profesor modifica las notas únicamente
- Borrado de Matricula
  - Realizado por estudiantes, o por administración

##### 4. Autenticación

- Inicio de sesión con credenciales
- Inicio de sesión con JWT

##### 5. Gateway Principal

El gateway principal tiene como proposito ser la entrada principal para la arquitectura de microservicios, y como tal tiene cada uno de los endpoints de otros microservicios, y solo redirige la petición al microservicio correcto.

> _Nota: Por motivos legales, ninguna entrada en la base de datos puede ser borrada._

Todos los microservicios deben tener un endpoint de "health" cuyo único proposito es responder con 200. Esto con el proposito de poder validar que el endpoint esté en linea.

El gateway principal no tiene endpoints individuales para los endpoints de "health", sino un solo endpoint que responde con el estado de cada uno de los microservicios.

---

## Sobre las pruebas

### Pruebas a Desarrollar

1. Unitarias de Controlador
2. Unitarias de Ruta
3. End-to-End de Rutas -> Controladores -> Acciones -> Controladores -> Rutas

- Todos los microservicios deben probar todos sus endpoints y todos sus controladores.
- Debe haber una prueba de exito y una prueba de fallo.
- Ya que el gateway principal unicamente redirige, no tiene pruebas.

## Rúbrica

| Requerimiento                            | Puntos |
| ---------------------------------------- | ------ |
| No tiene estructura correcta de proyecto | -2     |
| Expone secretos de aplicación            | -2     |
| Tiene node_modules                       | -8     |
| CRUD Usuarios                            | 1      |
| CRUD Materias                            | 1      |
| CRUD Matriculas                          | 1      |
| Microservicio Auth                       | 1      |
| Microservicio Gateway Principal          | 1      |
| Pruebas Usuarios                         | 1      |
| Pruebas Materias                         | 1      |
| Pruebas Matriculas                       | 1      |
