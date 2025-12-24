---
marp: true
theme: doc-theme
paginate: true
_paginate: skip
title: Proyecto-01
_class: invert title
class: body-center
header: "Proyecto 01"
_header: ""
---

<style scoped>
  h1 {
    margin-bottom: 0;
  }
</style>

# Proyecto 01

<h2 class="center serif">Desarrollo Web Backend</h2>

Desarrollen el backend para la plataforma de una biblioteca, donde usuarios pueden ingresar y reservar de manera digital los libros presentes en ella.

- La API debe crearse como repositorio en Github y debe ser "entregada" al profesor utilizando el enlace en el catalogo, donde **se enviará únicamente el enlace al repositorio.**
- El proyecto se desarrolla de manera individual, con fecha de entrega **viernes, 7 de noviembre a las 23:59.**

### Modelos a Desarrollar

- Usuarios
- Libros

### Operaciones Basicas de Almacenamiento a Desarrollar

- Create (Usuario) (Registro)
  - Debe crear un usuario en la base de datos con los datos enviados al backend.
- Create (Libro)
  - Debe crear un libro en la base de datos con los datos enviados al backend.
  - Debe permitirse solo para usuarios con permiso de crear libros.
- Read (Usuario) (Login)
  - Debe buscar un usuario con correo y contraseña.
  - Debe ser seguro.
- Read (Usuario)
  - Retorna la información de un usuario.
  - Debe ser seguro.
- Read (1 Libro)
  - Debe retornar toda la información del libro.
- Read (* Libros)
  - Debe retornar varios libros, y permitir usar filtros.
    - Debe poderse filtrar por genero, fecha de publicación, casa editorial, autor, nombre y disponibilidad. Cualquier combinación de estos filtros.
  - Debe tener paginación.
  - Debe tener unicamente el nombre de los libros.
  - Debe tener información relacionada a la paginación (pagina actual, pagina maxima, libros por pagina).
- Update (Usuario)
  - Debe modificar un usuario en la base de datos con los datos enviados al backend.
  - Un usuario solo puede ser modificado por el mismo, o por un usuario con permiso de modificar usuarios.
- Update (Libro)
  - Debe modificar un libro en la base de datos con los datos enviados al backend.
  - Si se modifican campos de información del libro, solo debe permitirse para usuarios con permiso de modificar libros.
- Delete (Usuario)
  - Por motivos de seguridad, se debe realizar "soft deletes", es decir, inhabilitar la entrada en la base de datos, en vez de borrarlo de la base de datos.
  - Un usuario solo puede ser inhabilitado por el mismo, o por un usuario con permiso de inhabilitar usuarios.
- Delete (Libro)
  - Por motivos de seguridad, se debe realizar "soft deletes", es decir, inhabilitar la entrada en la base de datos, en vez de borrarlo de la base de datos.
  - Debe permitirse solo para usuarios con permiso de inhabilitar libros.

La implementación de estas operaciones queda a libertad del estudiante, pero las operaciones deben existir y cumplir con lo descrito.

---

### A tomar en cuenta

- A excepción del CREATE de usuario y el READ de libros y usuario, **todos** los endpoints requieren autenticación.
- Todo endpoint que necesite identificar a un usuario, **debe** identificarlo usando la autenticación.
- La biblioteca necesita el historial de reserva de un libro (informacion como nombre de quien lo reservó, fecha de reserva, fecha de entrega).
- La biblioteca necesita el historial de reserva de un usuario (informacion como nombre de libro reservado, fecha de reserva, fecha de entrega).
- Todo READ **debe** excluir las entradas inhabilitadas, a menos que se las pidan explicitamente.
- Los permisos de usuario pueden venir en cualquier combinación.
- Para mantener el proyecto simple, un libro es una unidad, y no hay libros repetidos.
- No hay limitación de cuantos libros puede reservar un usuario.
- Cualquier usuario puede reservar un libro.


# Rúbrica

| Requerimiento                                   | Puntos |
| ----------------------------------------------- | ------ |
| No tiene estructura correcta de proyecto        | -1     |
| Expone secretos de aplicación                   | -1     |
| Tiene node_modules                              | -8     |
| CREATE User                                     | 1      |
| CREATE Libro + Auth + Auth ID                   | 1      |
| READ User (1)                                   | 1      |
| READ Libro (1)                                  | 1      |
| READ Libro (\*) + Excluye por defecto + Filtros | 1      |
| UPDATE User + Auth                              | 1      |
| UPDATE Libro + Auth                             | 1      |
| DELETE modelos + Soft Delete                    | 1      |
