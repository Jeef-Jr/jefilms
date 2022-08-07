import React, { useEffect, useState } from "react";
import "./style.css";

import NavBar from "../../components/NavBar";
import axios from "axios";

import Cartaz from "../../components/Cartaz";

export default function NewPage() {
  const [statusSerie, setSSerie] = useState(false);
  const [movies, setMovies] = useState([]);
  const [textCatalogo, setTextCatalogo] = useState("Filme");

  const [comedia, setComedia] = useState(false);
  const [romance, setRomance] = useState(false);
  const [terror, setTerror] = useState(false);
  const [suspense, setSuspense] = useState(false);
  const [fantasia, setFantasia] = useState(false);
  const [acao, setAcao] = useState(false);
  const [aventura, setAventura] = useState(false);
  const [drama, setDrama] = useState(false);

  function mudarGenery(status) {
    setComedia(false);
    setRomance(false);
    setTerror(false);
    setSuspense(false);
    setFantasia(false);
    setAcao(false);
    setAventura(false);
    setDrama(false);

    if (status[0] === true) {
      setSSerie(true);
      setTextCatalogo("Serie");

      for (let i = 0; i < movies.length; i++) {
        if (movies[i].catalogo === 2 && movies[i].genero === 1) {
          setComedia(true);
        } else if (movies[i].catalogo === 2 && movies[i].genero === 2) {
          setRomance(true);
        } else if (movies[i].catalogo === 2 && movies[i].genero === 3) {
          setTerror(true);
        } else if (movies[i].catalogo === 2 && movies[i].genero === 4) {
          setSuspense(true);
        } else if (movies[i].catalogo === 2 && movies[i].genero === 5) {
          setFantasia(true);
        } else if (movies[i].catalogo === 2 && movies[i].genero === 6) {
          setAcao(true);
        } else if (movies[i].catalogo === 2 && movies[i].genero === 7) {
          setAventura(true);
        } else if (movies[i].catalogo === 2 && movies[i].genero === 8) {
          setDrama(true);
        }
      }
    } else {
      setSSerie(false);
      setTextCatalogo("Filme");

      for (let i = 0; i < movies.length; i++) {
        if (movies[i].catalogo === 1 && movies[i].genero === 1) {
          setComedia(true);
        } else if (movies[i].catalogo === 1 && movies[i].genero === 2) {
          setRomance(true);
        } else if (movies[i].catalogo === 1 && movies[i].genero === 3) {
          console.log(movies[i].genero === 3);
          setTerror(true);
        } else if (movies[i].catalogo === 1 && movies[i].genero === 4) {
          setSuspense(true);
        } else if (movies[i].catalogo === 1 && movies[i].genero === 5) {
          setFantasia(true);
        } else if (movies[i].catalogo === 1 && movies[i].genero === 6) {
          setAcao(true);
        } else if (movies[i].catalogo === 1 && movies[i].genero === 7) {
          setAventura(true);
        } else if (movies[i].catalogo === 1 && movies[i].genero === 8) {
          setDrama(true);
        }
      }
    }
  }

  function buscarMovies() {
    axios.get("http://localhost:3333/movie/listar").then((response) => {
      const dados = response.data.dados;

      if (dados !== "i_not_found") {
        console.log(dados);
        setMovies(dados);
      }
    });
  }

  useEffect(() => {
    buscarMovies();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    vertical: false,
    centerPadding: "60px",
    swipeToSlide: true,
    arrows: false,

    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div>
      <NavBar status={false} mudarGenery={mudarGenery} />
      <div id="container-catalogo">
        {comedia && <h1 className="generoTitle">{textCatalogo} / Comédia</h1>}
        <div className="container_card">
          {movies && movies.length > 0 && (
            <div>
              {movies?.map((d, index) => (
                <div>
                  {d.catalogo === 1 && !statusSerie && comedia && (
                    <>
                      <div className="rowHome">
                        {d.genero === 1 && (
                          <Cartaz
                            href={d.idMovie}
                            img={d.url}
                            title={d.title}
                          />
                        )}
                      </div>
                    </>
                  )}
                  {d.catalogo === 2 && statusSerie && comedia && (
                    <>
                      <div className="rowHome">
                        {d.genero === 1 && (
                          <Cartaz
                            href={d.idMovie}
                            img={d.url}
                            title={d.title}
                          />
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        {romance && <h1 className="generoTitle">{textCatalogo} / Romance</h1>}
        <div className="container_card">
          {movies && movies.length > 0 && (
            <>
              {movies?.map((d, index) => (
                <>
                  {d.catalogo === 1 && !statusSerie && romance && (
                    <>
                      <div className="rowHome">
                        {d.genero === 2 && (
                          <Cartaz
                            href={d.idMovie}
                            img={d.url}
                            title={d.title}
                          />
                        )}
                      </div>
                    </>
                  )}
                  {d.catalogo === 2 && statusSerie && romance && (
                    <>
                      <div className="rowHome">
                        {d.genero === 2 && (
                          <Cartaz
                            href={d.idMovie}
                            img={d.url}
                            title={d.title}
                          />
                        )}
                      </div>
                    </>
                  )}
                </>
              ))}
            </>
          )}
        </div>
        {terror && <h1 className="generoTitle">{textCatalogo} / Terror</h1>}
        <div className="container_card">
          {movies && movies.length > 0 && (
            <>
              {movies?.map((d, index) => (
                <>
                  {d.catalogo === 1 && !statusSerie && terror && (
                    <>
                      <div className="rowHome">
                        {d.genero === 3 && (
                          <Cartaz
                            href={d.idMovie}
                            img={d.url}
                            title={d.title}
                          />
                        )}
                      </div>
                    </>
                  )}
                  {d.catalogo === 2 && statusSerie && terror && (
                    <>
                      <div className="rowHome">
                        {d.genero === 3 && (
                          <Cartaz
                            href={d.idMovie}
                            img={d.url}
                            title={d.title}
                          />
                        )}
                      </div>
                    </>
                  )}
                </>
              ))}
            </>
          )}
        </div>
        {suspense && <h1 className="generoTitle">{textCatalogo} / Suspense</h1>}
        <div className="container_card">
          {movies && movies.length > 0 && (
            <>
              {movies?.map((d, index) => (
                <>
                  {d.catalogo === 1 && !statusSerie && suspense && (
                    <>
                      <div className="rowHome">
                        {d.genero === 4 && (
                          <Cartaz
                            href={d.idMovie}
                            img={d.url}
                            title={d.title}
                          />
                        )}
                      </div>
                    </>
                  )}
                  {d.catalogo === 2 && statusSerie && suspense && (
                    <>
                      <div className="rowHome">
                        {d.genero === 4 && (
                          <Cartaz
                            href={d.idMovie}
                            img={d.url}
                            title={d.title}
                          />
                        )}
                      </div>
                    </>
                  )}
                </>
              ))}
            </>
          )}
        </div>
        {fantasia && <h1 className="generoTitle">{textCatalogo} / Fantasia</h1>}
        <div className="container_card">
          {movies && movies.length > 0 && (
            <>
              {movies?.map((d, index) => (
                <>
                  {d.catalogo === 1 && !statusSerie && fantasia && (
                    <>
                      <div className="rowHome">
                        {d.genero === 5 && (
                          <Cartaz
                            href={d.idMovie}
                            img={d.url}
                            title={d.title}
                          />
                        )}
                      </div>
                    </>
                  )}
                  {d.catalogo === 2 && statusSerie && fantasia && (
                    <>
                      <div className="rowHome">
                        {d.genero === 5 && (
                          <Cartaz
                            href={d.idMovie}
                            img={d.url}
                            title={d.title}
                          />
                        )}
                      </div>
                    </>
                  )}
                </>
              ))}
            </>
          )}
        </div>
        {fantasia && <h1 className="generoTitle">{textCatalogo} / Ação</h1>}
        <div className="container_card">
          {movies && movies.length > 0 && (
            <>
              {movies?.map((d, index) => (
                <>
                  {d.catalogo === 1 && !statusSerie && acao && (
                    <>
                      <div className="rowHome">
                        {d.genero === 6 && (
                          <Cartaz
                            href={d.idMovie}
                            img={d.url}
                            title={d.title}
                          />
                        )}
                      </div>
                    </>
                  )}
                  {d.catalogo === 2 && statusSerie && acao && (
                    <>
                      <div className="rowHome">
                        {d.genero === 6 && (
                          <Cartaz
                            href={d.idMovie}
                            img={d.url}
                            title={d.title}
                          />
                        )}
                      </div>
                    </>
                  )}
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
