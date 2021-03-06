import React from "react";
import mapMarkerImg from "../images/map-marker.svg";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import "../styles/pages/orphanages-map.css";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer } from "react-leaflet";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Manaus</strong>
          <span>Amazonas</span>
        </footer>
      </aside>

      <Map
        center={[-3.086029, -59.9880126]}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
