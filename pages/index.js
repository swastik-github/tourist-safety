/*global google*/
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from "react-places-autocomplete";

import Autocomplete from "react-google-autocomplete";
function Home() {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  // const handleSelect = async (value) => {
  //   const results = await geocodeByAddress(value);
  //   const latLng = await getLatLng(results[0]);
  //   router.push("placedetails/" + results[0].place_id);
  //   setAddress(value);
  //   setCoordinates(latLng);
  // };
  console.log(typeof process.env.NEXT_PUBLIC_GOOGLE_API_KEY) 
  return (
    <Autocomplete
      style={{ width: "250px" }}
      apiKey={String(process.env.NEXT_PUBLIC_GOOGLE_API_KEY)}
      onPlaceSelected={(selected, a, c) => {
        router.push("placedetails/" + selected.place_id);
      }}
      options={{
        types: [["tourist_attraction"]],
        componentRestrictions: {
          country: "IN",
        },
      }}
    />
  );

  // return (
  //   <div>

  //       <PlacesAutocomplete
  //         value={address}
  //         onChange={setAddress}
  //         onSelect={handleSelect}
  //         // searchOptions={{
  //         //   location: new google.maps.LatLng(23.259933, 77.412613),
  //         //   radius: 32000000,
  //         //   types: ["tourist_attraction"],
  //         // }}
  //       >
  //         {({
  //           getInputProps,
  //           suggestions,
  //           getSuggestionItemProps,
  //           loading,
  //         }) => (
  //           <div>
  //             <p>Latitude: {coordinates.lat}</p>
  //             <p>Longitude: {coordinates.lng}</p>

  //             <input {...getInputProps({ placeholder: "Type address" })} />

  //             <div>
  //               {loading ? <div>...loading</div> : null}

  //               {suggestions.map((suggestion) => {
  //                 const style = {
  //                   backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
  //                 };

  //                 return (
  //                   <div {...getSuggestionItemProps(suggestion, { style })}>
  //                     {suggestion.description}
  //                   </div>
  //                 );
  //               })}
  //             </div>
  //           </div>
  //         )}
  //       </PlacesAutocomplete>

  //   </div>
  // );
}

export default Home;
