import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8)
};

const PRIMARY = {
  lighter: '#b3e5fc',
  light: '#4fc3f7',
  main: '#03a9f4',
  dark: '#0288d1',
  darker: '#01579b',
  contrastText: '#fff'
};
const SECONDARY = {
  lighter: '#d1c4e9',
  light: '#9575cd',
  main: '#673ab7',
  dark: '#512da8',
  darker: '#311b92',
  contrastText: '#fff'
};
const INFO = {
  lighter: '#c5cae9',
  light: '#7986cb',
  main: '#3f51b5',
  dark: '#303f9f',
  darker: '#1a237e',
  contrastText: '#fff'
};
const SUCCESS = {
  lighter: '#dcedc8',
  light: '#aed581',
  main: '#8bc34a',
  dark: '#689f38',
  darker: '#33691e',
  contrastText: GREY[800]
};
const WARNING = {
  lighter: '#ffecb3',
  light: '#ffd54f',
  main: '#ffc107',
  dark: '#ffa000',
  darker: '#ff6f00',
  contrastText: GREY[800]
};
const ERROR = {
  lighter: '#ffcdd2',
  light: '#e57373',
  main: '#f44336',
  dark: '#d32f2f',
  darker: '#b71c1c',
  contrastText: '#fff'
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main)
};

const CHART_COLORS = {
  lightBlue: ['#80d8ff', '#40c4ff', '#00b0ff', '#0091ea'],
  deepPurple: ['#b388ff', '#7c4dff', '#651fff', '#6200ea'],
  green: ['#b9f6ca', '#69f0ae', '#00e676', '#00c853'],
  lime: ['#f4ff81', '#eeff41', '#c6ff00', '#aeea00'],
  red: ['#ff8a80', '#ff5252', '#ff1744', '#d50000']
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY[500_24],
  chart: CHART_COLORS,
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

const palette = {
  light: {
    ...COMMON,
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action }
  },
  dark: {
    ...COMMON,
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500], ...COMMON.action }
  },
  chart: CHART_COLORS
};

export default palette;
