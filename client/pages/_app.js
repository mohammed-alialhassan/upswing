import React from 'react';
import '../styles/globals.css'
import axios from 'axios'
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {

  // const [state, setState] = useState(GlobalState);

  return <Component {...pageProps} />

}

export default MyApp
