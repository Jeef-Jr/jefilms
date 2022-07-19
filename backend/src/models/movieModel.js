const database = require("../database/config");

function addMovie(title, catalogo, genero, idMovie, url) {
  const query = `INSERT INTO movie (title,catalogo,genero,idMovie,url) 
    VALUES ('${title}', ${catalogo},${genero}, '${idMovie}', '${url}')`;
  return database.executar(query);
}

function listarGeneros() {
  const query = `SELECT * FROM movie ORDER BY id DESC`;
  return database.executar(query);
}

function listarMovie(idMovie) {
  const query = `SELECT * FROM movie WHERE idMovie = '${idMovie}'`;
  return database.executar(query);
}

module.exports = {
  addMovie,
  listarGeneros,
  listarMovie,
};
