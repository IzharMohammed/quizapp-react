export default function GeolocationNewUi() {
  const { latitude, longitude } = useGeoLocationcontainer();

  return (
    <div>
      <h1>Geolocation</h1>
      <h1>latitude : {latitude}</h1>
      <h1> longitude : {longitude}</h1>
    </div>
  );
}
