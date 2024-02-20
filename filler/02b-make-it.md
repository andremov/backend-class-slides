---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Make It
_class: invert title
class: body-center
header: Relleno: Make It
_header: ""
---

# Make It

---

<!--
_class: body-center align-center
 -->

 <style>
  p:nth-child(6) {
    text-align: right;
  }
</style>

## La frase completa

##

> "Make it work, make it right, make it fast."

-- Kent Beck,
Pionero de patrones de diseño de software

##

---

<!--
_class: body-center align-center
 -->

## Make it work

Primero, haz que funcione el algoritmo.

##

---

## Make it right

Luego, mejora el algoritmo.

- Mas breve/conciso
- Menor memoria utilizada
- Mejor diseño algoritmico

##

##

---

<!--
_class: body-center align-center
 -->

## Make it fast

Finalmente, haz que el algoritmo sea mas rapido.
Reduce el tiempo de ejecución.

##

---

## Entonces,

- Make it work -> Haz que sirva
- Make it right -> Hazlo correctamente
- Make it fast -> Haz que sea rapido

##

---

## Ejemplo

```js
function suma(a, b) {
  const operando1 = a;
  const operando2 = b;

  const resultado = a + b;

  return resultado;
}
```

Este algoritmo funciona: compila y da el resultado correcto.
Hace lo que tiene que hacer.

##

---

## Ejemplo, de nuevo

```js
function suma(a, b) {
  return a + b;
}
```

Este algoritmo hace exactamente lo mismo que el anterior, pero es mejor.
Porque?

##

---

## Haz que sirva

-> Haz lo mas simple que podría funcionar

##

---

## Haz que sirva

-> Haz lo mas simple que podría funcionar
-> No te compliques

##

---

## Haz que sirva

-> Haz lo mas simple que podría funcionar
-> No te compliques
<- Como hago simple algo que no lo es?

##

---

## Como te comes un elefante?

---

## Como te comes un elefante?

Facil, un mordisco a la vez.

##

---

## Divide and Conquer

Dividir y conquistar

##

---

## Problema

Dados dos arreglos desordenados, retorne la mediana entre ambos arreglos.

> Este problema es considerado dificil en Leetcode.

##

---

## Dados dos arreglos desordenados, retorne la mediana entre ambos arreglos.

Como podemos dividir este problema?

##

---

## Dados dos arreglos desordenados, retorne la mediana entre ambos arreglos.

La mediana es el dato en toda la mitad de una lista ordenada de datos. O el promedio de los dos datos en toda la mitad de una lista ordenada de datos.

##

---

## Dados dos arreglos desordenados, retorne la mediana entre ambos arreglos.

1. Ordenar un arreglo de numeros desordenados

##

---

## Dados dos arreglos **ordenados**, retorne la mediana entre ambos arreglos.

1. Ordenar un arreglo de numeros desordenados

##

---

## Dados dos arreglos **ordenados**, retorne la mediana entre ambos arreglos.

1. Ordenar un arreglo de numeros desordenados
2. Juntar dos arreglos ordenados en uno solo ordenado

##

---

## Dado **un arreglo ordenados**, retorne la mediana **del arreglo**.

1. Ordenar un arreglo de numeros desordenados
2. Juntar dos arreglos ordenados en uno solo ordenado

##

---

## Dividido y Conquistado

1. Ordenar un arreglo de numeros desordenados
2. Juntar dos arreglos ordenados en uno solo ordenado
3. Retornar mediana de un arreglo ordenado.

##

---

## Haz que sirva

-> Haz lo mas simple que podría funcionar
-> No te compliques
<- Como hago simple algo que no lo es?
-> **Lo divides en partes simples**

##

---

## Hazlo correctamente

Antes:

1. Ordenar un arreglo de numeros desordenados
2. Juntar dos arreglos ordenados en uno solo ordenado
3. Retornar mediana de un arreglo ordenado.

##

---

## Hazlo correctamente

Despues:

1. Juntar dos arreglos en uno solo
2. Ordenar un arreglo de numeros desordenados
3. Retornar mediana de un arreglo ordenado.

##

---

## Hazlo correctamente

Antes,

1. Ordenaba los 2 arreglos originales,
2. Los juntaba, y
3. Volvía a ordenar.

Alternativamente,

1. Ordenaba los 2 arreglos originales, y
2. Los juntaba manteniendo el orden.

##

---

## Hazlo correctamente

Despues,

1. Junto ambos
2. Los ordeno

**La diferencia:** Solo ordenas una vez.

##
