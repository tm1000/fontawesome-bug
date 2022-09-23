import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(
  faBars
);
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
