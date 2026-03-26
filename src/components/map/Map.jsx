import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1IjoiZGVtb3VzZXIiLCJhIjoiY2t2bGZ6bG1pMGZ5dDJ2cGZ2bGZ6bGZ6byJ9.1234567890"; 
// ⚠️ Usa tu token real de Mapbox (gratis)

export default function Map({ property, schools }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [property.longitude, property.latitude],
      zoom: 14,
    });

    // Marker propiedad
    new mapboxgl.Marker({ color: "red" })
      .setLngLat([property.longitude, property.latitude])
      .setPopup(new mapboxgl.Popup().setHTML(`<b>Propiedad</b>`))
      .addTo(map.current);

    // Marker escuelas
    schools.forEach((s) => {
      new mapboxgl.Marker({ color: "blue" })
        .setLngLat([s.school.longitude, s.school.latitude])
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `<b>${s.school.name}</b><br/>${Math.round(s.haversineMeters)} m`
          )
        )
        .addTo(map.current);
    });

  }, [property, schools]);

  return (
    <div
      ref={mapContainer}
      style={{ width: "100%", height: "400px", borderRadius: "10px" }}
    />
  );
}
