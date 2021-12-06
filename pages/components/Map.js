import React from "react";
import { useEffect } from "react";

import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVuYWJzdGVjdCIsImEiOiJja3dkdTVxcjExZzlwMnVxbDk2cW53MWZ2In0.DsvBFKDQsFkqmrMHa_M9pw";

const Map = (props) => {
  const { pickupCoordinates, dropOffCoordinates } = props;
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-0.209780680015683, 5.59041061251686],
      zoom: 14,
    });
    pickupCoordinates
      ? addToMap(map, pickupCoordinates, "blue")
      : console.log("Error pickup");

    dropOffCoordinates
      ? addToMap(map, dropOffCoordinates, "black")
      : console.log("Error dropOff");

    pickupCoordinates && dropOffCoordinates
      ? map.fitBounds([pickupCoordinates, dropOffCoordinates], {
        padding: 50
      })
      : console.log("Error centering");
  }, [pickupCoordinates, dropOffCoordinates]);
  // only runs the first time the application is loaded

  const addToMap = (map, coordinates, color) => {
    const marker1 = new mapboxgl.Marker({ color })
      .setLngLat(coordinates)
      .addTo(map);
  };
  useEffect(() => {});
  //:rock

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
 flex-1 h-1/2

`;
export default Map;
