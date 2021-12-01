import { React, useState } from 'react';
import GlobalState from './components/GlobalState';
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import Settings from './components/settings';
import RtlLayout from './components/RtlLayout';
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/LoadingScreen';
import ThemePrimaryColor from './components/ThemePrimaryColor';

// ----------------------------------------------------------------------

export default function App() {
  const [state, setState] = useState('');
  return (
    <GlobalState.Provider value={[state, setState]}>
      <ThemeConfig>
        <ThemePrimaryColor>
          <RtlLayout>
            <GlobalStyles />
            <ProgressBarStyle />
            <Settings />
            <ScrollToTop />
            <Router />
          </RtlLayout>
        </ThemePrimaryColor>
      </ThemeConfig>
    </GlobalState.Provider>
  );
}
