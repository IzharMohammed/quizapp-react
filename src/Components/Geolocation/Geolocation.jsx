import { useGeoLocationcontainer } from "../../hooks/useGeoLocationcontainer";

export default function Geolocation() {
  const { latitude, longitude } = useGeoLocationcontainer();
  return (
    <div>
      <h1>Geolocation</h1>
      <div>latitude : {latitude}</div>
      <div> longitude : {longitude}</div>
    </div>
  );
}
