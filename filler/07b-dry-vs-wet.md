---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: WET vs DRY
_class: invert title
class: body-center
header: Relleno: WET vs DRY
_header: ""
---

<style>
  li {
    color: rgba(160, 160, 255, 1);
  }
</style>

# WET vs DRY

---

## DRY

Don't Repeat Yourself -- No te repitas

##

---

## WET

We Enjoy Typing -- Disfrutamos Escribir

##

---

## WET vs DRY

Como programadores, evitamos repetirnos.

Usamos ciclos o funciones para lograr esto.

##

##

---

## Ejemplo

Estoy diseñando un backend desde cero. Voy a manejar en mi base de datos clientes y empleados.

Como los manejo?

1. Por separado, una tabla Clientes y otra tabla Empleados. [ diap: 6 ]
2. Ambos en una sola tabla, llamada Usuarios o Personas [ diap: 9 ]

---

---

## Opcion 1: Por separado

Porque por separado?

Como lo veo ahora mismo, tendrán los mismos campos:

```ts
type Person = {
  _id: mongoose.ObjectId;

  first_name: String;
  last_name: String;
  gov_id: Number;

  telephone: Number;
  address: String;
  email: String;
};
```

---

## Opcion 1: Por separado

Porque por separado?

Como lo veo ahora mismo, tendrán los mismos campos.

1. De todas formas, todo por separado. [ diap: 12 ]
2. Usemos el mismo "tipo" entonces, pero dos tablas separadas. [ diap: 20 ]
3. Ok, me arrepiento, ambos en una sola tabla. [ diap: 9 ]

---

---

## Opcion 2: Todo junto

Tiene sentido.

Porque como lo veo ahora mismo, tendrán los mismos campos:

```ts
type Person = {
  _id: mongoose.ObjectId;

  user_type: Number;

  first_name: String;
  last_name: String;
  gov_id: Number;

  telephone: Number;
  address: String;
  email: String;
};
```

---

## Opcion 2: Todo junto

Tiene sentido.

Porque como lo veo ahora mismo, tendrán los mismos campos.

1. Exacto. Todo junto. [ diap: 16 ]
2. Mejor usemos el mismo "tipo", pero separemos las tablas. [ diap: 20 ]
3. Ok, me arrepiento, ambos por separado. [ diap: 6 ]

---

---

## Caso 1: Todo por separado

Tener tanto el tipo como las tablas por separado, sería WET.

Estás repitiendo la declaración de las tablas, y la declaración del tipo.

##

---

## Caso 1: Todo por separado

[ - ] Si necesitas agregar un campo a ambos, te toca cambiar dos sitios.

[ - ] Si quieres la información de todas las _personas_, necesitas hacer dos peticiones a la base de datos.

##

---

## Caso 1: Todo por separado

[ + ] Lo mas probable es que en un futuro quieras agregar campos solo a Cliente, o solo a Proveedor.

[ + ] Al separarlos, no necesitas logica especial para manejar cuando una persona es tanto cliente como proveedor.

[ + ] No necesitaríamos un campo adicional para identificar que tipo de usuario es.

##

---

---

## Caso 2: Todo junto

Tener tanto el tipo como las tablas juntas, sería DRY.

No estás repitiendo la declaración de las tablas, ni la declaración del tipo.

##

---

## Caso 2: Todo junto

[ - ] Al tener ambas cosas juntas, necesitaríamos un campo adicional para identificar que tipo de usuario es.

[ - ] Si la cedula es unica, un proveedor no podría ser cliente, o al menos tendríamos que tener codigo especial para manejar esos casos.

[ - ] Lo mas probable es que en un futuro quieras agregar campos solo a Cliente, o solo a Proveedor, y te tocaría separarlos en ese momento.

---

## Caso 2: Todo junto

[ + ] Si quieres la información de todas las _personas_, solo necesitas una petición.

[ + ] Si necesitas agregar un campo a ambos, solo tienes que cambiar un sitio.

##

---

---

## Caso 3: Tipo junto, Tabla por separado

Tener el tipo junto, pero las tablas por separado, es un punto medio entre WET y DRY.

En teoría, eso es malo. Te estás repitiendo.

##

---

## Caso 3: Tipo junto, Tabla por separado

[ - ] Lo mas probable es que en un futuro quieras agregar campos solo a Cliente, o solo a Proveedor, y te tocaría separarlos en ese momento.

[ - ] Si quieres la información de todas las _personas_, necesitas hacer dos peticiones a la base de datos.

##

---

## Caso 3: Tipo junto, Tabla por separado

[ + ] Al separarlos, no necesitas logica especial para manejar cuando una persona es tanto cliente como proveedor.

[ + ] No necesitaríamos un campo adicional para identificar que tipo de usuario es.

[ + ] Si necesitas agregar un campo a ambos, solo tienes que cambiar un sitio.

---

---

## Entonces?

**Siempre** hay que evitar repetirnos?

##

##

##

---

## Entonces?

**Siempre** hay que evitar repetirnos?

**Siempre** hay que repetirse?

##

##

---

## Entonces?

**Siempre** hay que evitar repetirnos?

**Siempre** hay que repetirse?

O **depende**?

##

---

<style scoped>
  p:nth-child(5) {
    color: rgba(160, 160, 255, 1);
  }
</style>

## Entonces?

**Siempre** hay que evitar repetirnos?

**Siempre** hay que repetirse?

O **depende**?

##
