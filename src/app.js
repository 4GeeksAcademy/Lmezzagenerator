/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generarexcusa = () => {
  let articulo = ["Un", "Mi"];
  let sujeto = ["perro", "gato", "hamster", "conejo"];
  let hecho = ["mordio", "se comio", "orino", "vomito"];
  let pertenencia = ["mi libro", "mi cuaderno", "mi mochila", "mi movil"];
  let lugar = ["en la cama", "en la cocina", "en el comedor", "en el sofa"];

  let articuloIndex = Math.floor(Math.random() * articulo.length);
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let hechoIndex = Math.floor(Math.random() * hecho.length);
  let pertenenciaIndex = Math.floor(Math.random() * pertenencia.length);
  let lugarIndex = Math.floor(Math.random() * lugar.length);

  return (
    articulo[articuloIndex] +
    " " +
    sujeto[sujetoIndex] +
    " " +
    hecho[hechoIndex] +
    " " +
    pertenencia[pertenenciaIndex] +
    " " +
    lugar[lugarIndex]
  );
};
window.onload = function() {
  document.querySelector("#excuse").innerHTML = generarexcusa();
  console.log("Hello Rigo from the console!");
};
