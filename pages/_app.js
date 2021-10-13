import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/boxicons.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';

import '../assets/css/style.css';
import '../assets/css/responsive.css';

// import { Provider } from 'react-redux';
// import App from 'next/app';
// import Head from 'next/head';
// import withRedux from 'next-redux-wrapper';
// import { initStore } from '../store/reducers/cartReducer';
// import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

// export default withRedux(initStore)(
//     class MyApp extends App {

//         // Preloader
//         state = {
//             loading: false
//         };
//         componentDidMount() {
//             this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
//         }
//         componentWillUnmount() {
//             if (this.timerHandle) {
//                 clearTimeout(this.timerHandle);
//                 this.timerHandle = 0;
//             }
//         }
        
//         render () {
//             const { Component, pageProps, store } = this.props

//             return (
//                 <>
//                     <Head>
//                         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
//                         <title>Taiker - React Next IT Startups & SEO Agency Template</title>
//                     </Head>

//                     <Provider store={store}>
//                         <Component {...pageProps} />
//                     </Provider>
                    
//                     {/* Preloader */}
//                     <Loader loading={this.state.loading} />

//                     {/* Go Top Button */}
//                     <GoTop scrollStepInPx="50" delayInMs="16.66" />
//                 </>
//             );
//         }
//     }
// )

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../utils/gtag"

function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("4600269910023477");
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}


const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <FacebookPixel />
      <Component {...pageProps} />
      <GoTop scrollStepInPx="50" delayInMs="16.66" />
    </>
  );
};

export default App;