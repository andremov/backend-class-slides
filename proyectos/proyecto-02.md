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

Desarrollen las pruebas para un servicio de e-commerce de libros, donde usuarios pueden vender sus libros usados y comprar libros usados de otros usuarios.

- La API debe crearse como repositorio en Github y debe ser "entregada" al profesor utilizando el enlace en el catalogo, donde **se enviará únicamente el enlace al repositorio.**
- El proyecto se desarrolla en grupos de 3 estudiantes, con fecha de entrega **viernes, 31 de mayo a las 23:59.**

Las pruebas a desarrollar incluyen, pero no están limitados a:

### Pruebas a Desarrollar

- Unitarias de Acción
- Unitarias de Controlador
- Unitarias de Ruta
- Integración de Rutas -> Controladores -> Rutas
- Integración de Controladores -> Acciones -> Controladores
- End-to-End de Rutas -> Controladores -> Acciones -> Controladores -> Rutas

### Modelos a Probar

- Usuarios
- Libros
- Pedidos

### A tomar en cuenta

- Las rutas necesariamente se prueban utilizando **Supertest**.
- Las pruebas deben unicamente utilizar lo que se está probando.
- Toda prueba de creación de un modelo debe probar un caso donde los datos sean invalidos.
- Toda prueba de actualización de un modelo debe probar un caso donde los datos sean invalidos.
- Toda prueba de borrado de un modelo debe probar un caso donde los datos sean invalidos.
- Las pruebas no deben conectarse o utilizar una base de datos.

---

# Rúbrica

| Requerimiento                             | Puntos |
| ----------------------------------------- | ------ |
| No tiene estructura correcta de proyecto  | -1     |
| Expone secretos de aplicación             | -1     |
| Tiene node_modules                        | -12    |
| CREATE User + Invalido (3U + 2I + 1E2E)   | 1      |
| CREATE Pedido + Invalido (3U + 2I + 1E2E) | 1      |
| CREATE Libro + Invalido (3U + 2I + 1E2E)  | 1      |
| READ User (1 y \*) (3U + 2I + 1E2E)       | 1      |
| READ Pedido (1 y \*) (3U + 2I + 1E2E)     | 1      |
| READ Libro (1 y \*) (3U + 2I + 1E2E)      | 1      |
| UPDATE User + Invalido (3U + 2I + 1E2E)   | 1      |
| UPDATE Pedido + Invalido (3U + 2I + 1E2E) | 1      |
| UPDATE Libro + Invalido (3U + 2I + 1E2E)  | 1      |
| DELETE User + Invalido (3U + 2I + 1E2E)   | 1      |
| DELETE Pedido + Invalido (3U + 2I + 1E2E) | 1      |
| DELETE Libro + Invalido (3U + 2I + 1E2E)  | 1      |
