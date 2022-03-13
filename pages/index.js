/*global google*/
import { useRouter } from "next/router";
import React,{useEffect, useState} from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export default function Home() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [searchOptions, setSearchOptions] = useState(false);
  const router = useRouter();
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    router.push('placedetails/'+results[0].place_id)
    setAddress(value);
    setCoordinates(latLng);
  };
  
  // useEffect(
  //   () => {
  //     let timer1 = setTimeout(() => setSearchOptions(prv => !prv), 2000);

  //     // this will clear Timeout
  //     // when component unmount like in willComponentUnmount
  //     // and show will not change to true
  //     return () => {
  //       clearTimeout(timer1);
  //     };
  //   },
  //   // useEffect will run only one time with empty []
  //   // if you pass a value to array,
  //   // like this - [data]
  //   // than clearTimeout will run every time
  //   // this value changes (useEffect re-run)
  //   []
  // );
  
  
  

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      //   searchOptions={{
      //   location: new google.maps.LatLng(23.259933, 77.412613),
      //   radius: 3200000,
      //   types: ["tourist_attraction"],
      // }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>

            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
