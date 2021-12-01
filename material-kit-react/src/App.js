import { React, useState } from 'react';
import GlobalState from './components/GlobalState';
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {
  // Global State
  // const [state, setState] = useState({});

  const [state, setState] = useState('');

  return (
    <GlobalState.Provider value={[state, setState]}>
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  </GlobalState.Provider>
  );
}
