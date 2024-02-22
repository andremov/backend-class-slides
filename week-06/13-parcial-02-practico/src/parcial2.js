const datos = require('./datos.json');

function puntoUno(estudiantes) {
  // CODIGO DE PUNTO 1 AQUI

  return [];
}

function puntoDos(products, filters) {
  var filteredProducts = [];

  for (let i = 0; i < products.length; i++) {
    if ((filters.id && products[i].id === filters.id) || !filters.id) {
      if (
        (filters.organization && products[i].organization === filters.organization) ||
        !filters.organization
      ) {
        if ((filters.owner && products[i].owner === filters.owner) || !filters.owner) {
          filteredProducts = [filteredProducts, products[i]];
        }
      }
    }
  }

  return filteredProducts;
}

function puntoTres(estudiantes) {
  // CODIGO DE PUNTO 3 AQUI

  return [];
}

function puntoCuatro(user, items) {
  const response = [];
  const activeltems = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].active === true) {
      activeltems.push(items[i]);
    }
  }

  const numNotifs = activeltems.length;
  const userName = user.first_name;
  if (userName === undefined) {
    response.push('Bienvenido');
  } else {
    response.push('Bienvenido, ' + userName);
  }

  if (numNotifs === 0) {
    response.push('No tiene notificaciones. ');
  } else {
    response.push('Tiene ' + numNotifs + ' notificaciones pendientes. ');
  }
  return response;
}

module.exports = {
  puntoUno,
  puntoDos,
  puntoTres,
  puntoCuatro,
};
