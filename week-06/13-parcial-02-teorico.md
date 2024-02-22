---
marp: true
theme: work-theme
title: Parcial 02
_class: title
class: body-center
header: Parcial 02
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

# Parcial 02

## Desarollo Web Backend

---

## Pregunta 1

El metodo no definido en el siguiente codigo es:

```js
const student = students.____((s) => s.id === parameter_id);
```

- find
- filter
- search
- map

##

---

## Pregunta 2

El metodo no definido en el siguiente codigo es:

```js
const student = students.____((s) => `${s.first_name} ${s.last_name}`);
```

- filter
- map
- reduce
- find

##

---

## Pregunta 3

Su empleador les pidió una función que retorne los IDs de los usuarios con una compra en los ultimos 10 dias. Que funciones puede utilizar para esto? (Sin importar el orden)

- filter, map
- find, reduce
- filter, sort, map
- sort, findIndex
- flat, sort, includes
- find, flat, filter

##

---

## Pregunta 4

Los metodos no definidos en la siguiente imagen son...

```js
const history = purchases
  .____((item) => item.user_id === user_id)
  .____((a, b) => a.datetime - b.datetime);
```

- find, reduce
- find, filter
- filter, sort
- filter, reduce
- find, sort
- reduce, sort
- find, organize
- filter, organize

##

---

## Pregunta 5

Su compañero de trabajo, Dilan, llegó a su escritorio a pedirles ayuda con el siguiente error:

```js
function getLastPurchaseName(user) {
  return user.last_purchase.name;
}
```

_Uncaught TypeError: Cannot read properties of undefined (reading 'name')_

Que necesita Dilan para no tener este error, sin cambiar el funcionamiento de la funcion, ni dar resultados que no representan el estado de los parametros?

##
