import React, { useEffect, useRef } from "react";
import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

const Map = ({ address }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!address) return;
    // Tạo bản đồ
    const map = L.map(mapRef.current).setView([0, 0], 13);

    // Thêm lớp bản đồ
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Thêm geo search control
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider: provider,
      showMarker: true,
      autoClose: true,
      retainZoomLevel: false,
      animateZoom: true,
      searchLabel: address,
      keepResult: true,
      updateMap: true,
    });
    map.addControl(searchControl);
    map.on("geosearch/showlocation", (event) => {
      const { location } = event;
      console.log("🚀 ~ file: Map.js:33 ~ map.on ~ location:", location);
      map.setView([location.y, location.x], 13);
      L.marker([location.y, location.x]).addTo(map);
    });
    const y = "14.058324";
    const x = "108.277199";
    map.setView([x, y], 13);
    L.marker([y, x]).addTo(map);

    return () => {
      // Xóa bản đồ khỏi DOM khi component bị unmount
      map.remove();
    };
  }, [address]);

  return (
    <div id="map" style={{ width: "100%", height: "400px" }} ref={mapRef}></div>
  );
};

export default Map;
