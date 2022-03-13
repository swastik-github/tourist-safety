import "antd/dist/antd.css";
import { Fragment } from "react";
import Header from "../components/Header";
import GooglePlacesScript from "../components/mapscript/GooglePlacesScript";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <GooglePlacesScript />
      <Component {...pageProps} />
      
    </Fragment>
  );
}

export default MyApp;
