import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/logo.png";

export default function NavBar({ status, mudarGenery }) {
  function handMudarGenry(v) {
    mudarGenery([v]);
  }

  function pageAdd() {
    if (!status) {
      window.location.href = "/add";
    } else {
      window.location.href = "/";
    }
  }

  return (
    <div id="navbar">
      <div className="row">
        <img className="logo" src={logo} alt="" />
        <h2 className="titleLogo">JeFilm's</h2>
      </div>
      <div>
        <button onClick={() => handMudarGenry(false)} className="buttonNav">
          Filmes
        </button>
        <button onClick={() => handMudarGenry(true)} className="buttonNav">
          Séries
        </button>
      </div>
      <div>
        {status && (
          <button onClick={pageAdd} className="buttonNav">
            Home
          </button>
        )}

        {!status && (
          <button onClick={pageAdd} className="buttonNav">
            + ADD
          </button>
        )}
      </div>
    </div>
  );
}
