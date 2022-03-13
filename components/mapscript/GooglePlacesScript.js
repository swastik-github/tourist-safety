
import React from 'react'
import getConfig from "next/config";
import Script from "next/script";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const GOOGLE_MAPS_API_KEY =
  serverRuntimeConfig.GOOGLE_MAPS_API_KEY ||
  publicRuntimeConfig.GOOGLE_MAPS_API_KEY;

const source = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;

const GooglePlacesScript = () => {
  return (
    <Script type="text/javascript" src={source} strategy='beforeInteractive' />
  );
};

export default GooglePlacesScript;