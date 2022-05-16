import React, { useState } from 'react';
import GlobalState from '../components/GlobalState';
import '../styles/globals.css'
import axios from 'axios'
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {

  const [state, setState] = useState(GlobalState);

  return <GlobalState.Provider value={[state, setState]}>
            <Component {...pageProps} />
         </GlobalState.Provider>

}

export default MyApp
