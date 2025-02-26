---
title: Mongoose
theme: ../theme
transition: none
layout: cover
exportFilename: 22-mongoose
---

# Mongoose

✏️ 2025-01 ➖ ⏱️ 25 min.

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Conexión a Mongo

::contents::
- Se utiliza una "connection string".
- Una connection string tiene un formato similar a:
  `mongodb://<direccion>/<base de datos>`
- Para realizar la conexion a MongoDB con Mongoose, se usa:
  `mongoose.createConnection(<connection string>);`

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Model & Schema

::contents::
- Un model es como un constructor para una collection
- Un schema es lo que usa Mongoose para crear Mongo models.
- El model es finalmente lo que se usa para realizar operaciones
  sobre una collection

```js {*}{lines:true}
const Tank = mongoose.model("Tank", tankSchema);

Tank.find({ size: "small" });
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Schema

::contents::
- Tiene la siguiente información:
  - Campos de un document de la collection
  - Tipo de los campos (String, Number, etc)
  - Son requeridos o no
  - Métodos de validación
  - Y mas!
- Mongoose auto agrega el campo \_id
  - \_id es el identificador único predeterminado de un document
  - Tiene ese nombre para que esté de primero en orden alfabético
  - No es necesario “declararlo” en el schema

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Schema

::contents::
```js {*}{lines:true}
const tankSchema = new Schema({
  size: String,
});
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Tipos de campos

::contents::
- String
- Number
- Boolean
- ObjectId (como por ej. \_id)
- Schema (schema de Mongoose)
- Date
- Buffer (informacion binaria, como un archivo)
- Mixed (permite lo que sea, use a su propio riesgo)
- Array (se escribiría como [Number] para un array de numeros)
- Decimal128
- Map (una serie de keys y values, como un objeto de JavaScript)

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

<style>
  table {
    transform: scale(0.7);
  }
</style>

# Opciones para todo tipo de campos

::contents::
| **opción**| **valor aceptado** |
| --------- | ------------------ |
| required  | boolean o function |
| default   | tipo o function    |
| validate  | function           |
| get       | function           |
| set       | function           |
| alias     | string             |
| immutable | boolean            |
| transform | function           |
| unique    | boolean            |

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

<style>
  table {
    transform: scale(0.7);
  }
</style>

# Opciones para todo tipo de campos

::contents::
| **opción**| **definición** |
| --------- | -------------------------------------------------------------------- |
| required  | define si el campo es requerido                                      |
| default   | define un valor predeterminado para el campo                         |
| validate  | define una funcion de validacion para el campo                       |
| get       | define una funcion de 'get' para el campo                            |
| set       | define una funcion de 'set' para el campo                            |
| alias     | define otro nombre para el campo, para usar en get y set             |
| immutable | define si el campo puede ser modificado despues de crear el document |
| transform | define como se muestra un document al volverlo string                |
| unique    | define si un campo puede tener valores repetidos en la collection    |

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Schema 2

::contents::
```js {*}{lines:true}
const tankSchema = new Schema({
  size: { type: String, required: true },
});
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-center
---

# Ada Lovelace

::contents::
Considerada la primera programadora.

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

::contents::
# A

# D

# A

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

::contents::
# A ctividad

# D idactica de

# A prendizaje

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Para un Instagram,

::contents::
Creemos un modelo/schema User

```js {*}{lines:true}
const UserSchema = new Schema({
  // ??
});
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Para un Instagram,

::contents::
Creemos un modelo/schema Publicacion

```js {*}{lines:true}
const PostSchema = new Schema({
  // ??
});
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Opciones para Strings

::contents::
|  **opción**   | **valores** |
| --------- | ------- |
| lowercase | boolean |
| uppercase | boolean |
| trim      | boolean |
| match     | regex   |
| enum      | array   |
| minLength | number  |
| maxLength | number  |

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Opciones para Strings

::contents::
|  **opción**   | **definición** |
| --------- | ------------------------------------------------------------------------ |
| lowercase | define si se pone la string en minusculas                                |
| uppercase | define si se pone la string en mayusculas                                |
| trim      | define si la string se le hace trim (quita espacios iniciales y finales) |
| match     | valida que la string concuerde con el regex                              |
| enum      | valida que la string sea uno de los valores del array                    |
| minLength | valida que la string no sea mas corta que el valor dado                  |
| maxLength | valida que la string no sea mas larga que el valor dado                  |

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Opciones para Numbers

::contents::
|  **opción**   | **valores** |
| ---- | ------ |
| min  | number |
| max  | number |
| enum | array  |

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Opciones para Numbers

::contents::
|  **opción**   | **definición** |
| ---- | ----------------------------------------------------- |
| min  | valida que el numero no sea menor al valor dado       |
| max  | valida que el numero no sea mayor al valor dado       |
| enum | valida que el numero sea uno de los valores del array |

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Opciones para Date

::contents::
|  **opción**   | **valores** |
| --- | ---- |
| min | Date |
| max | Date |

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Opciones para Date

::contents::
|  **opción**   | **definición** |
| --- | ---------------------------------------------- |
| min | valida que la fecha no sea menor al valor dado |
| max | valida que la fecha no sea mayor al valor dado |

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# Queries

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Queries Multiples

::contents::
- Model.deleteMany borra todos los documentos que apliquen al filter.
- Model.find retorna todos los documentos que apliquen al filter
- Model.updateMany modifica todos los documentos que apliquen al filter con los datos proveidos.

| Query              | Cantidad? | Modifica?    |
| ------------------ | --------- | ------------ |
| Model.find()       | Multiple  | No           |
| Model.deleteMany() | Multiple  | Si, elimina  |
| Model.updateMany() | Multiple  | Si, modifica |

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Queries Singulares de Busqueda

::contents::
- Model.findOne() retorna el primer document que aplique al filter.
- Model.findById( id ) es igual a Model.findOne( { \_id: id } )
- Esto tambien aplica para las queries siguientes.

| Query            | Cantidad? | Modifica? |
| ---------------- | --------- | --------- |
| Model.findOne()  | Singular  | No        |
| Model.findById() | Singular  | No        |

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Queries Singulares de Eliminacion

::contents::
- Delete y Remove son usados como sinonimos
- Model.deleteOne() borra el primer documento que aplique al filter.
- Model.findOneAnd…() borra el primer documento que aplique al filter.

| Query                     | Cantidad? | Modifica?   |
| ------------------------- | --------- | ----------- |
| Model.deleteOne()         | Singular  | Si, elimina |
| Model.findOneAndDelete()  | Singular  | Si, elimina |
| Model.findOneAndRemove()  | Singular  | Si, elimina |
| Model.findByIdAndDelete() | Singular  | Si, elimina |
| Model.findByIdAndRemove() | Singular  | Si, elimina |

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Queries Singulares de Modificación

::contents::
- Delete y Remove son usados como sinonimos
- Model.deleteOne() borra el primer documento que aplique al filter.
- Model.findOneAnd…() borra el primer documento que aplique al filter.

| Query                     | Cantidad? | Modifica?    |
| ------------------------- | --------- | ------------ |
| Model.updateOne()         | Singular  | Si, modifica |
| Model.findByIdAndUpdate() | Singular  | Si, modifica |
| Model.findOneAndUpdate()  | Singular  | Si, modifica |

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Filter (Toda Query)

::contents::
- Para toda query a Mongo, el primer parametro es el filter.

```js {*}{lines:true}
// busca todos los documentos
await MyModel.find();
await MyModel.find({});

// busca todos los documentos con nombre john y edad 18
await MyModel.find({ name: "john", age: 18 });
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Filter (Toda Query)

::contents::
- Para toda query a Mongo, el primer parametro es el filter.

```js {*}{lines:true}
// borra el primer documento
await MyModel.findOneAndDelete();
await MyModel.findOneAndDelete({});

// borra el primer documento con nombre john y edad 18
await MyModel.findOneAndDelete({ name: "john", age: 18 });
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Projections (Queries Find)

::contents::
- Para las queries tipo find, se puede agregar un segundo parametro, la "projection"

```js {*}{lines:true}
// retorna todos los modelos con nombre john, pero solo retorna los campos name y friends
await MyModel.find({ name: john }, "name friends");
await MyModel.find({ name: john }).select("name friends");
await MyModel.find({ name: john }).select(["name", "friends"]);
await MyModel.find({ name: john }).select({ name: 1, friends: 1 });
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Projections (Queries Find)

::contents::
- Para las queries tipo find, se puede agregar un segundo parametro, la "projection"

```js {*}{lines:true}
// retorna todos los modelos con nombre john, pero no retorna password
await MyModel.find({ name: john }, "-password");
await MyModel.find({ name: john }).select("-password");
await MyModel.find({ name: john }).select(["-password"]);
await MyModel.find({ name: john }).select({ password: 0 });
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Update object (Queries Update)

::contents::
- Para las queries de tipo update, el Segundo parametro es el "cambio"

```js {*}{lines:true}
// modifica el primer document, poniendole el nombre John
await MyModel.findOneAndUpdate({}, {name: ‘John’})

// modifica el primer documento con nombre john y edad 18,
// poniendole el nombre John
await MyModel.findOneAndDelete({ name: 'john', age: 18 }, {name: "John"})
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Metodos adicionales (Queries Find)

::contents::
- El metodo skip se vuela los primeros n documentos de un find.

```js {*}{lines:true}
MyModel.find({ name: "john" }).skip(n);
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Metodos adicionales (Queries Find)

::contents::
- El metodo sort organiza los resultados de un find segun un campo, y en el orden deseado.

```js {*}{lines:true}
// "asc", "ascending", 1
// "desc", "descending", -1
MyModel.find({ name: "john" }).sort({ age: -1 });
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Metodos adicionales (Queries Find)

::contents::
- El metodo limit solo retorna los n primeros documentos

```js {*}{lines:true}
MyModel.find({ name: "john" }).limit(n);
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# Paginacion?

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Paginacion?

::contents::
```js {*}{lines:true}
await MyModel.find({ name: "john" }).sort({ age: 1 }).skip(100).limit(20);
// una pagina tiene 20 documentos
// estamos en la pagina 6
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Programacion Asincrona (await)

::contents::
- Los queries a una base de datos son funciones asincronas, por esto:

```js {*}{lines:true}
const doc = await MyModel.find({ name: "john" }, "name friends");

res.status(200).json(doc);
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

# Programacion Asincrona (.then)

::contents::
- Los queries a una base de datos son funciones asincronas, por esto:

```js {*}{lines:true}
MyModel.find({ name: "john" }, "name friends") //
  .then((doc) => {
    res.status(200).json(doc);
  });
```

::header::
Semana 8: Mongoose

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

# 🎉

# Son expertos en mongoose!