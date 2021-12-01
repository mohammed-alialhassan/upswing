import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';


// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;


const sidebarConfig = [

  {
    title: 'Home',
    path: '/dashboard/home',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'Charts',
    path: '/dashboard/stocks',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Watchlist',
    path: '/dashboard/watchlist',
    icon: getIcon(peopleFill)
  },
  {
    title: 'About Us',
    path: '/dashboard/about',
    icon: getIcon(fileTextFill)
  }
];

export default sidebarConfig;
