import React from "react";
import "./style.css";
export default function Cartaz(props) {
  return (
    <a href={`/movie/${props.href}`} className="cartaz">
      <img className="imgcartaz" src={props.img} alt={props.title} />
    </a>
  );
}
