import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";

export default function Search() {
  return (
    <div id="search">
      <div>
        <input placeholder="Busca avançada" className="inputSearch" />
      </div>
      <div>
        <button className="btnSearch">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
