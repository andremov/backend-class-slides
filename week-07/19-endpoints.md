---
title: Endpoints
theme: ../theme
transition: none
layout: cover
exportFilename: 18-endpoints
---

# Endpoints & Datos

✏️ 2025-01 ➖ ⏱️ 20 min.

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Que es un endpoint?

::contents::
Un endpoint está conformado por 3 partes:

1. Metodo HTTP
2. Ruta
3. Implementación

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Parte 1: Metodo HTTP

::contents::
1. POST
2. GET
3. PATCH
4. PUT
5. DELETE

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Parte 2: Ruta

::contents::
Por ejemplo,
`« localhost:3030/usuarios »`

Usualmente en el codigo solo es
`« /usuarios »`

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Endpoint - Hasta ahora

::contents::
`GET « localhost:3030/usuarios »` <br/>
`POST « localhost:3030/usuarios »`

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Parte 3: Implementacion

::contents::
```js {*}{lines:true}
app.get("/", function (request, response) {
  response.json({ name: "Andres" });
});
```

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Endpoint - Implementacion

::contents::
```js {*}{lines:true}
// Esta es la implementacion de un metodo GET en la ruta "/"
// request y response son los dos parametros de la funcion implementacion del endpoint

app.get("/", function (request, response) {
  response.json({ name: "Andres" });
});
```

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Endpoint - Implementacion

::contents::
```js {*}{lines:true}
app.METODO(RUTA, function (request, response) {
  // IMPLEMENTACIÓN
});
```

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Enviar y recibir datos

::contents::
El proposito de una API es responder a peticiones del cliente con informacion del servidor.

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Enviar datos

::contents::
Un backend puede enviar datos con una funcion muy sencilla llamada "send", del objeto "response".

```js {*}{lines:true}
app.get("/", (request, response) {
  response.send("Hello World!");
});
```

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Enviar datos - JSON

::contents::
Usualmente, se utiliza la funcion JSON para enviar datos en formato JSON.

```js {*}{lines:true}
app.get("/", (request, response) {
  response.json({"name": "Andres"});
});
```

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Enviar datos - Status

::contents::
Y se añade tambien el status code. El valor predeterminado es 200.

```js {*}{lines:true}
app.get("/", (request, response) {
  response.status(200).json({"name": "Andres"});
});
```

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Status code & Codigos HTTP

::contents::
| | |
|--|--|
| 1XX | Informacion |
| 2XX | Exito |
| 3XX | Redireccion |
| 4XX | Errores de cliente |
| 5XX | Errores de servidor |

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Informacion

::contents::
| | |
|--|--|
| 102 | Procesando |

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Exito

::contents::
| | |
|--|--|
| 200 | OK |
| 201 | Creado |
| 202 | Aceptado |
| 204 | No hay contenido |
| 205 | Contenido Resetteado |

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Redireccion

::contents::
| | |
|--|--|
| 301 | Movido permanentemente |
| 302 | Movido temporalmente |
| 304 | No modificado |

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Error de cliente

::contents::
| | |
|--|--|
| 400 | Mala Peticion |
| 401 | No autorizado |
| 402 | Pago requerido |
| 403 | Prohibido |
| | |
| 405 | Metodo no permitido |
| 406 | No aceptable |
| 408 | Timeout |

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Error de cliente

::contents::
| | |
|--|--|
| 409 | Conflicto |
| 410 | No disponible |
| 414 | URI muy larga |
| 423 | Bloqueado |
| 429 | Muchas peticiones |
| 451 | No disponible por razones legales |

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Error de servidor

::contents::
| | |
|--|--|
| 500 | Error interno de servidor |
| 501 | No implementado |
| 502 | Gateway/proxy malo/incorrecto |
| 503 | Servicio no disponible |
| 504 | Gateway timeout |
| 507 | Espacio insuficiente |

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Recibir datos

::contents::
Cuando el cliente hace una peticion, le acompañan datos relevante a esta peticion.

Donde estan alojados esos datos?

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Recibir datos - Opciones

::contents::
Hay 3 lugares:

1. Body
2. Params (Tambien llamado URL Params)
3. Query (Tambien llamado Query Params)

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Body - Que es?

::contents::
1. No está en la URL
2. Protegido por HTTPS

Usualmente, se utiliza para enviar _datos_ del cliente al servidor.

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Body - **Patrón de Diseño**

::contents::
- Se utilizan en peticiones POST/PUT/PATCH.
- Se utiliza formato JSON.

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Params - Que es?

::contents::
1. Está en la URL
2. No está protegido por HTTPS

`« localhost:3030/usuarios/[id_usuario]/informacion »`

Donde `[id_usuario]` es el param, por ejemplo: <br />
`« localhost:3030/usuarios/14/informacion »`

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Params - **Patrón de Diseño**

::contents::
- Se puede usar para cualquier metodo HTTP.
- Idealmente hay un solo param en una URL.
- Usualmente es el identificador unico de un recurso.

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Query - Que es?

::contents::
1. Está en la URL
2. No está protegido por HTTPS

`« localhost:3030/usuarios/?mes_nac=06 »`

Donde `[?mes_nac=06]` es un valor del query.

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Query - **Patrón de Diseño**

::contents::
- Se usa en metodos GET con parametros para busquedas, ordenamientos, filtros, paginacion, y similares.

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Hay alguna prohibicion sobre estos patrones?

::contents::
# No.

::header::
Semana 7: Endpoints

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# 🎉

# Saben de endpoints!
