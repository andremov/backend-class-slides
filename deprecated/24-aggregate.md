---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Aggregate
_class: invert title
class: body-center
header: Semana 10: Aggregate
_header: ""
---

# Aggregate

---

## Llamado

```js
Model.aggregate(pipeline);
```

##

---

## Pipeline

```js
const pipeline = [
  [pipeline stages]
]
```

##

---

## Pipeline Stages

- $project
- $skip
- $sort
- $limit
- $match
- $set / $addFields
- $count
- $lookup
- $unwind

---

<!--
_class: body-center align-center
-->

## $project

{ $project: { <field1>: 0, <field2>: 0, ... } }

##

---

<!--
_class: body-center align-center
-->

## $project

{ $skip: 100 }

##

---

<!--
_class: body-center align-center
-->

## $sort

{ $sort: { age: 1 }}

1 => ascendente
-1 => descendente

Solo acepta 1 o -1.

##

---

<!--
_class: body-center align-center
-->

## $limit

{ $limit: 20 }

##

---

## Ejemplo

```js
const pipeline = [
  { $project: { name: 1, age: 1 } },
  { $sort: { age: 1 } },
  { $skip: 100 },
  { $limit: 20 },
];

await Users.aggregate(pipeline);
```

##

---

<!--
_class: body-center align-center
-->

## $match

{ $match : { name: "john" } }

##

---

## $match

```js
{
  $match: {
    $and: [{ age: { $gt: 16 } }, { licenseNumber: { $exists: true } }];
  }
}
```

##

---

<!--
_class: body-center align-center
-->

## $set & $addFields

{ $set: { [newField]: [expression]} }
{ $addFields: { [newField]: [expression]} }

##

---

<!--
_class: body-center align-center
-->

## $count

{ $count: <name> }

##

---

## $lookup

```js
{
  $lookup: {
    from: "mascotas",
    localField: "\_id",
    foreignField: "owner_id",
    as: "mis_mascotas"
  }
}
```

##

---

## $unwind

```js
{
  $unwind: {
    path: [field path],
    includeArrayIndex: <string>,
    preserveNullAndEmptyArrays: <boolean> //default: false
  }
}
```

##

---

## Ejemplo Pipeline

```js
const pipeline = [
  { $project: { "name": 1, "age": 1} },
  { $sort: { age: 1 } },
  { $lookup: {
    from: "mascotas",
    localField: "_id",
    foreignField: "owner_id",
    as: "mis_mascotas"
  }},
  { $unwind: {
    path: "mis_mascotas"
  }}
  { $skip: 100 },
  { $limit: 20 },
];

const docs = await Users.aggregate(pipeline);
```

---

## Ejemplo Pipeline

```js
const pipeline = [
  { $project: { name: 1, age: 1 } },
  { $sort: { age: 1 } },
  { $skip: 100 },
  { $limit: 20 },
  {
    $lookup: {
      from: "mascotas",
      localField: "_id",
      foreignField: "owner_id",
      as: "mis_mascotas",
    },
  },
  {
    $unwind: {
      path: "mis_mascotas",
    },
  },
];

const docs = await Users.aggregate(pipeline);
```
