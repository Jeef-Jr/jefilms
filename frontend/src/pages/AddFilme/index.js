import React, { useState } from "react";
import "./style.css";

import NavBar from "../../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddFilme() {
  const [title, setTitle] = useState("");
  const [catalogo, setCatalogo] = useState(0);
  const [genero, setGenero] = useState(0);
  const [idMovie, setIdMovie] = useState("");
  const [imagem, setImagem] = useState("");

  function addMovie() {
    axios
      .post("http://localhost:3333/movie/add", {
        title,
        catalogo,
        genero,
        idMovie,
        url: imagem,
      })
      .then((response) => {
        const status = response.data.mensagem;

        if (status === "success") {
          Swal.fire("Sucesso!", "Cadastrado com sucesso!", "success");
          setTitle("");
          setCatalogo("");
          setGenero("");
          setIdMovie("");
          setImagem("");
        }
      });
  }

  return (
    <div>
      <NavBar status={true} />
      <div id="containerAdd">
        <h2 className="titleCardAdd">
          Adicionar um novo <FontAwesomeIcon icon={faFilm} />
        </h2>
        <div className="cardFormAdd">
          <div className="center camposForm">
            <span>Título</span>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="inputFormAdd"
            />
          </div>
          <div className="center camposForm">
            <span>Catálogo</span>
            <select
              className="inputFormAdd"
              value={catalogo}
              onChange={(e) => setCatalogo(e.target.value)}
            >
              <option value={0}></option>
              <option value={1}>Filme</option>
              <option value={2}>Série</option>
            </select>
          </div>
          <div className="center camposForm">
            <span>Gênero</span>
            <select
              className="inputFormAdd"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            >
              <option value={0}></option>
              <option value={1}>Comédia</option>
              <option value={2}>Romance</option>
              <option value={3}>Terror</option>
              <option value={4}>Suspense</option>
              <option value={5}>Fantasia</option>
              <option value={6}>Ação</option>
              <option value={7}>Aventura</option>
              <option value={8}>Drama</option>
            </select>
          </div>
          <div className="center camposForm">
            <span>ID do vídeo</span>
            <input
              className="inputFormAdd"
              value={idMovie}
              onChange={(e) => setIdMovie(e.target.value)}
            />
          </div>
          <div className="center camposForm">
            <span>URL Imagem</span>
            <input
              className="inputFormAdd"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
            />
          </div>
          <button onClick={addMovie} className="btnFormAdd">
            Cadastrar
          </button>
        </div>
        <span
          style={{
            marginTop: 10,
            color: "white",
            fontSize: 20,
            fontFamily: "Franklin Gothic Medium",
          }}
        >
          Api de filmes/series: https://warezcdn.com
        </span>
      </div>
    </div>
  );
}
