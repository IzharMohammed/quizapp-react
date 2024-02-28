import React from "react";
import { useEffect, useState } from "react";
export const useGeoLocationcontainer = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);

  const handleLocation = (position) => {
    setLatitude(position.coords.latitude);
    setlongitude(position.coords.longitude);
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleLocation);
    }
  }, [navigator]);

  return { latitude, longitude };
};
