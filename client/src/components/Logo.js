import PropTypes from 'prop-types';
// material
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Box sx={{ width: 60, height: 60, ...sx }}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 25 31.25">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            fill="url(#BG1)"
            d="M12.5,23C18.3,23,23,18.3,23,12.5S18.3,2,12.5,2S2,6.7,2,12.5S6.7,23,12.5,23z M5.98,12h1.5v3.5   c0,1.79,1.46,3.25,3.25,3.25s3.25-1.46,3.25-3.25V7.31l-2.25,2.26l-1.06-1.06l4.06-4.07l4.07,4.07l-1.06,1.06l-2.26-2.26v8.19   c0,2.62-2.13,4.75-4.75,4.75s-4.75-2.13-4.75-4.75V12z"
          />
        </g>
      </svg>
    </Box>
  );
}
