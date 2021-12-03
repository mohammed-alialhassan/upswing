// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),

};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'General',
    items: [
      { title: 'Home', path: PATH_DASHBOARD.general.pageOne, icon: ICONS.dashboard },
      { title: 'About Us', path: PATH_DASHBOARD.general.pageTwo, icon: ICONS.ecommerce },
      { title: 'Profile', path: PATH_DASHBOARD.general.pageThree, icon: ICONS.user }
    ]
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'Analytics',
    items: [
      {
        title: 'Stock Watch',
        path: PATH_DASHBOARD.app.root,
        icon: ICONS.analytics,
        children: [
          { title: 'Stocks', path: PATH_DASHBOARD.app.pageFour },
          { title: 'Predictions', path: PATH_DASHBOARD.app.pageFive },
          { title: 'Watchlist', path: PATH_DASHBOARD.app.pageSix }
        ]
      }
    ]
  }
];

export default sidebarConfig;
