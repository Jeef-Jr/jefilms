import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";
import "./style.css";

export default function Movie() {
  const urlParams = window.location.href;
  const sep = urlParams.split("/");
  const idMovie = sep[4];

  const [dadosMovie, setDadosMovie] = useState([]);

  function listarMovie() {
    axios
      .get(`http://localhost:3333/movie/listar/${idMovie}`)
      .then((response) => {
        const dados = response.data.dados;
        setDadosMovie(dados);
        console.log(dados);
      });
  }

  useEffect(() => {
    listarMovie();
  }, []);

  return (
    <div>
      <NavBar status={true} />
      <div id="containerMovie">
        {dadosMovie && (
          <>
            {dadosMovie?.map((d, index) => (
              <>
                <h1 className="titleMovie">{d.title}</h1>
                {d.catalogo === 1 && (
                  <iframe
                    className="video"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen=""
                    webkitallowfullscreen=""
                    mozallowfullscreen=""
                    width={900}
                    height={600}
                    src={` https://embed.warezcdn.com/filme/${d.idMovie}`}
                  />
                )}
                {d.catalogo === 2 && (
                  <iframe
                    className="video"
                    frameborder="0"
                    allowfullscreen=""
                    webkitallowfullscreen=""
                    mozallowfullscreen=""
                    width={900}
                    height={600}
                    src={` https://embed.warezcdn.com/serie/${d.idMovie}`}
                  />
                )}
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
