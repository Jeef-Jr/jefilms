const movieModel = require("../models/movieModel");

function addMovie(req, res) {
  const title = req.body.title;
  const catalogo = req.body.catalogo;
  const genero = req.body.genero;
  const idMovie = req.body.idMovie;
  const url = req.body.url;

  movieModel
    .addMovie(title, catalogo, genero, idMovie, url)
    .then((response) => {
      const tm = response.affectedRows;

      if (tm > 0) {
        res.json({ mensagem: "success" });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.json({ mensagem: err });
    });
}

function listarMovie(req, res) {
  movieModel.listarGeneros().then((response) => {
    const tamanho = response.length;

    if (tamanho > 0) {
      res.json({
        dados: response,
      });
    } else {
      res.json({
        dados: "i_not_found",
      });
    }
  });
}

function listarOneMovie(req, res) {
  const idMovie = req.params.idMovie;

  movieModel.listarMovie(idMovie).then((response) => {
    const tamanho = response.length;

    if (tamanho > 0) {
      res.json({
        dados: response,
      });
    } else {
      res.json({
        dados: "i_not_found",
      });
    }
  });
}

module.exports = {
  addMovie,
  listarMovie,
  listarOneMovie,
};
