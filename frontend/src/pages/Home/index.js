import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Search from "../../components/Search";
import "./style.css";

import Cartaz from "../../components/Cartaz";
import axios from "axios";

function Home() {
  const [filme, setFilme] = useState(true);
  const [serie, setSerie] = useState(false);
  const [comedia, setComedia] = useState(true);
  const [romance, setRomance] = useState(false);
  const [terror, setTerror] = useState(false);
  const [suspense, setSuspense] = useState(false);
  const [desenho, setDesenho] = useState(false);
  const [acao, setAcao] = useState(false);
  const [aventura, setAventura] = useState(false);
  const [drama, setDrama] = useState(false);

  const [textCatalogo, setTextCatalogo] = useState("Filme");
  const [textGenero, setTextGenero] = useState("Comédia");

  const [movies, setMovies] = useState([]);

  function buscarMovies() {
    axios.get("http://localhost:3333/movie/listar").then((response) => {
      const dados = response.data.dados;

      if (dados !== "i_not_found") {
        console.log(dados);
        setMovies(dados);
      }
    });
  }

  function mudarCatalogo(n) {
    if (n === 1) {
      setSerie(false);
      setFilme(true);
      setTextCatalogo("Filmes");
    } else {
      setSerie(true);
      setFilme(false);
      setTextCatalogo("Séries");
    }
  }

  function mudarGenero(n) {
    if (n === 1) {
      setComedia(true);
      setRomance(false);
      setTerror(false);
      setSuspense(false);
      setDesenho(false);
      setAcao(false);
      setAventura(false);
      setDrama(false);
      setTextGenero("Comédia");
    } else if (n === 2) {
      setComedia(false);
      setRomance(true);
      setTerror(false);
      setSuspense(false);
      setDesenho(false);
      setAcao(false);
      setAventura(false);
      setDrama(false);
      setTextGenero("Romance");
    } else if (n === 3) {
      setComedia(false);
      setRomance(false);
      setTerror(true);
      setSuspense(false);
      setDesenho(false);
      setAcao(false);
      setAventura(false);
      setDrama(false);
      setTextGenero("Terror");
    } else if (n === 4) {
      setComedia(false);
      setRomance(false);
      setTerror(false);
      setSuspense(true);
      setDesenho(false);
      setAcao(false);
      setAventura(false);
      setDrama(false);
      setTextGenero("Suspense");
    } else if (n === 5) {
      setComedia(false);
      setRomance(false);
      setTerror(false);
      setSuspense(false);
      setDesenho(true);
      setAcao(false);
      setAventura(false);
      setDrama(false);
      setTextGenero("Fantasia");
    } else if (n === 6) {
      setComedia(false);
      setRomance(false);
      setTerror(false);
      setSuspense(false);
      setDesenho(false);
      setAcao(true);
      setAventura(false);
      setDrama(false);
      setTextGenero("Ação");
    } else if (n === 7) {
      setComedia(false);
      setRomance(false);
      setTerror(false);
      setSuspense(false);
      setDesenho(false);
      setAcao(false);
      setAventura(true);
      setDrama(false);
      setTextGenero("Aventura");
    } else if (n === 8) {
      setComedia(false);
      setRomance(false);
      setTerror(false);
      setSuspense(false);
      setDesenho(false);
      setAcao(false);
      setAventura(false);
      setDrama(true);
      setTextGenero("Drama");
    }
  }

  useEffect(() => {
    buscarMovies();
  }, []);

  return (
    <div>
      <NavBar status={false} />
      <div id="containerHome">
        <Search />
        <div>
          <div className="rowHome">
            <button onClick={() => mudarCatalogo(1)} className="BtnCategory ">
              Filmes
            </button>
            <button onClick={() => mudarCatalogo(2)} className="BtnCategory">
              Séries
            </button>
          </div>
          <hr />
          <div className="rowHome">
            <button onClick={() => mudarGenero(1)} className="BtnCategory ">
              Comédia
            </button>
            <button onClick={() => mudarGenero(2)} className="BtnCategory">
              Romance
            </button>
            <button onClick={() => mudarGenero(3)} className="BtnCategory">
              Terror
            </button>
            <button onClick={() => mudarGenero(4)} className="BtnCategory">
              Suspense
            </button>
            <button onClick={() => mudarGenero(5)} className="BtnCategory">
              Fantasia
            </button>
            <button onClick={() => mudarGenero(6)} className="BtnCategory">
              Ação
            </button>
            <button onClick={() => mudarGenero(7)} className="BtnCategory">
              Aventura
            </button>
            <button onClick={() => mudarGenero(8)} className="BtnCategory">
              Drama
            </button>
          </div>
        </div>

        {comedia && (
          <>
            <h1 className="generoTitle">
              {textCatalogo} / {textGenero}
            </h1>
            <div className="genero">
              {movies && movies.length > 0 && (
                <>
                  {movies?.map((d, index) => (
                    <>
                      {d.catalogo === 1 && filme && (
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
                      {d.catalogo === 2 && serie && (
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
                    </>
                  ))}
                </>
              )}
            </div>
          </>
        )}

        {romance && (
          <>
            <h1 className="generoTitle">
              {textCatalogo} / {textGenero}
            </h1>
            <div className="genero">
              {movies && movies.length > 0 && (
                <>
                  {movies?.map((d, index) => (
                    <>
                      {d.catalogo === 1 && filme && (
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
                      {d.catalogo === 2 && serie && (
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
          </>
        )}

        {terror && (
          <>
            <h1 className="generoTitle">
              {textCatalogo} / {textGenero}
            </h1>
            <div className="genero">
              {movies && movies.length > 0 && (
                <>
                  {movies?.map((d, index) => (
                    <>
                      {d.catalogo === 1 && filme && (
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
                      {d.catalogo === 2 && serie && (
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
          </>
        )}

        {suspense && (
          <>
            <h1 className="generoTitle">
              {textCatalogo} / {textGenero}
            </h1>
            <div className="genero">
              {movies && movies.length > 0 && (
                <>
                  {movies?.map((d, index) => (
                    <>
                      {d.catalogo === 1 && filme && (
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
                      {d.catalogo === 2 && serie && (
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
          </>
        )}

        {desenho && (
          <>
            <h1 className="generoTitle">
              {textCatalogo} / {textGenero}
            </h1>
            <div className="genero">
              {movies && movies.length > 0 && (
                <>
                  {movies?.map((d, index) => (
                    <>
                      <div className="rowHome">
                        {d.catalogo === 1 && filme && (
                          <>
                            {d.genero === 5 && (
                              <Cartaz
                                href={d.idMovie}
                                img={d.url}
                                title={d.title}
                              />
                            )}
                          </>
                        )}
                      </div>
                      {d.catalogo === 2 && serie && (
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
          </>
        )}

        {acao && (
          <>
            <h1 className="generoTitle">
              {textCatalogo} / {textGenero}
            </h1>
            <div className="genero">
              {movies && movies.length > 0 && (
                <>
                  {movies?.map((d, index) => (
                    <>
                      <div className="rowHome">
                        {d.catalogo === 1 && filme && (
                          <>
                            {d.genero === 6 && (
                              <Cartaz
                                href={d.idMovie}
                                img={d.url}
                                title={d.title}
                              />
                            )}
                          </>
                        )}
                      </div>
                      {d.catalogo === 2 && serie && (
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
          </>
        )}

        {aventura && (
          <>
            <h1 className="generoTitle">
              {textCatalogo} / {textGenero}
            </h1>
            <div className="genero">
              {movies && movies.length > 0 && (
                <>
                  {movies?.map((d, index) => (
                    <>
                      <div className="rowHome">
                        {d.catalogo === 1 && filme && (
                          <>
                            {d.genero === 7 && (
                              <Cartaz
                                href={d.idMovie}
                                img={d.url}
                                title={d.title}
                              />
                            )}
                          </>
                        )}
                      </div>
                      {d.catalogo === 2 && serie && (
                        <>
                          <div className="rowHome">
                            {d.genero === 7 && (
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
          </>
        )}

        {drama && (
          <>
            <h1 className="generoTitle">
              {textCatalogo} / {textGenero}
            </h1>
            <div className="genero">
              {movies && movies.length > 0 && (
                <>
                  {movies?.map((d, index) => (
                    <>
                      <div className="rowHome">
                        {d.catalogo === 1 && filme && (
                          <>
                            {d.genero === 8 && (
                              <Cartaz
                                href={d.idMovie}
                                img={d.url}
                                title={d.title}
                              />
                            )}
                          </>
                        )}
                      </div>
                      {d.catalogo === 2 && serie && (
                        <>
                          <div className="rowHome">
                            {d.genero === 8 && (
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
          </>
        )}
      </div>
    </div>
  );
}
export default Home;
