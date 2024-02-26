import Geolocation from "./Geolocation";
import { useEffect, useState } from "react";

export default function geolocationcontainer({children}) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);

  const handleLocation = (position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    setLatitude(position.coords.latitude);
    setlongitude(position.coords.longitude);
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleLocation);
    }
  }, []);

  return (
//   <Geolocation latitude={latitude} longitude={longitude} />
        <>
        {children}
        </>
                    
  )
}
