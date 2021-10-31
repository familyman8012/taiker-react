import "../assets/css/bootstrap.min.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/flaticon.css";
import "../assets/css/boxicons.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-lightbox/style.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";

import "../assets/css/style.css";
import "../assets/css/responsive.css";
import TagManager from "react-gtm-module";

import GoTop from "../components/Shared/GoTop";

import React, { useEffect } from "react";
import { useRouter } from "next/router";
// import * as gtag from "../utils/gtag"

function FacebookPixel() {
  const router = useRouter();
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("253288010080627");
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

const App = ({ Component, pageProps }) => {
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-W8P2FK9" });
  }, []);
  return (
    <>
      <FacebookPixel />
      <Component {...pageProps} />
      <GoTop scrollStepInPx="50" delayInMs="16.66" />
    </>
  );
};

export default App;
