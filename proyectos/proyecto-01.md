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

Desarrollen el backend para un servicio de e-commerce de libros, donde usuarios pueden vender sus libros usados y comprar libros usados de otros usuarios.

- La API debe crearse como repositorio en Github y debe ser "entregada" al profesor utilizando el enlace en el catalogo, donde **se enviará únicamente el enlace al repositorio.**
- El proyecto se desarrolla de manera individual, con fecha de entrega **viernes, 10 de mayo a las 23:59.**

Los endpoints a desarrollar incluyen, pero no están limitados a:

### Modelos a Desarrollar

- Usuarios
- Libros
- Pedidos

### Operaciones Basicas de Almacenamiento a Desarrollar

- Create
  - Debe crear una entrada en la base de datos con los datos enviados al backend.
- Read
  - Debe poderse buscar en unidad o en cantidad.
  - Para los usuarios, no se necesita busqueda en cantidad.
  - Para los libros, debe poderse filtrar por genero, fecha de publicación, casa editorial, autor y nombre.
  - Para los pedidos, debe poderse filtrar por fecha de creación (entre una y otra fecha), y por estado del pedido (en progreso, completado, cancelado).
- Update
  - Debe modificar una entrada en la base de datos con los datos enviados al backend.
- Delete
  - Por motivos de seguridad, se debe realizar "soft deletes", es decir, inhabilitar la entrada en la base de datos, en vez de borrarlo de la base de datos.

La implementación de estas operaciones queda a libertad del estudiante, pero las 4 operaciones deben existir y cumplir con lo descrito.

### A tomar en cuenta

- A excepción del CREATE de usuario y el READ de productos, todos los endpoints requieren autenticación de usuario.
- Todo endpoint que necesita identificar a un usuario (por ejemplo, para crearle un pedido), debe identificarlo usando la autenticación.
- Todo READ debe excluir las entradas inhabilitadas, a menos que se las pidan explicitamente.
- La unica modificación que se puede hacer a un pedido es cambiar el estado.
  - El usuario que realizó el pedido puede cancelar.
  - El usuario que recibió el pedido puede completar y cancelar.
  - Al completar un pedido, el o los libros del pedido se "borran".
- Un pedido puede tener mas de un libro.
  - Todos los libros deben ser del mismo usuario.

---

# Rúbrica

| Requerimiento                                    | Puntos |
| ------------------------------------------------ | ------ |
| No tiene estructura correcta de proyecto         | -1     |
| Expone secretos de aplicación                    | -1     |
| Tiene node_modules                               | -12    |
| CREATE User                                      | 1      |
| CREATE Pedido + Auth + Auth ID + Multiples       | 1      |
| CREATE Libro + Auth + Auth ID                    | 1      |
| READ User (1)                                    | 1      |
| READ Pedido (1)                                  | 1      |
| READ Libro (1)                                   | 1      |
| READ Pedido (\*) + Excluye por defecto + Filtros | 1      |
| READ Libro (\*) + Excluye por defecto + Filtros  | 1      |
| UPDATE User + Auth                               | 1      |
| UPDATE Pedido + Auth + Limitacion modificación   | 1      |
| UPDATE Libro + Auth                              | 1      |
| DELETE modelos + Soft Delete                     | 1      |
