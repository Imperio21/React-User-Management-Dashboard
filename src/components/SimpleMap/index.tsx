import React from "react";

interface SimpleMapProps {
  lat: string;
  long: string;
}

export const SimpleMap: React.FC<SimpleMapProps> = ({ lat, long }) => {
  const latitude = lat;
  const longitude = long;

  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <iframe
        className="border border-gray-300"
        allowFullScreen
        title="map"
        aria-hidden="false"
        src={mapUrl}
      ></iframe>
    </div>
  );
};
