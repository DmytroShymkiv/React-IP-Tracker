import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import config from "../../config";
import markerIcon from "../../images/icon-location.svg";
import { useTracker } from "../TrackerContext.js";

export default function Map() {
  const { details } = useTracker();
  const LayerURL = `https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${config.jawgAccsessToken}`;
  const icon = L.icon({
    iconUrl: markerIcon,
  });
  const mapOptions = {
    center: details?.position,
    zoom: 13,
    scrollWheelZoom: true,
    zoomControl: false,
  };
  function New() {
    const map = useMap();
    map.flyTo(details.position, 15, 2);
    return null;
  }
  return details ? (
    <MapContainer className="map" {...mapOptions}>
      <TileLayer url={LayerURL} />
      <New />
      <Marker position={details.position} icon={icon} />
    </MapContainer>
  ) : (
    <div className="map-mockup" />
  );
}
