import { Icon } from '@iconify/react';
import { useState } from 'react';
import searchFill from '@iconify/icons-eva/search-fill';
import { useFormik, Form, FormikProvider } from 'formik';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { styled, alpha } from '@mui/material/styles';
import axios from 'axios';
import {
  Box,
  Input,
  Slide,
  Button,
  InputAdornment,
  ClickAwayListener,
  IconButton
} from '@mui/material';

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

export default function Searchbar() {
  const [isOpen, setOpen] = useState(false);
  const [ticker, setTicker] = useState('');
  const navigate = useNavigate();


  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };




  const formik = useFormik({
    initialValues: {
      ticker: ''
    },
    onSubmit: () => {
      axios.post('http://localhost:8081/stock-data-collector', {
        ticker
      }).then(() => {
        setTimeout(() => {
          axios.post('http://localhost:8081/api/stock-data', {
            ticker
          }).then((res) => {
            console.log(res);
          }).catch((err) => {
            console.log("ERROR", err);
          });
        }, 5000);
      }).catch((err) => {
        console.log("ERROR", err);
      });
      // navigate('/dashboard/stocks', { replace: true });
    }
  });


  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
    <ClickAwayListener onClickAway={handleClose}>
    <form noValidate onSubmit={handleSubmit}>
      <div>
        {!isOpen && (
          <IconButton onClick={handleOpen}>
            <Icon icon={searchFill} width={20} height={20} />
          </IconButton>
        )}

        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <SearchbarStyle>
            <Input
              autoFocus
              fullWidth
              disableUnderline

              label="Search"
              placeholder="Search…"

              value={ticker}
              onInput={e => setTicker(e.target.value)}

              startAdornment={
                <InputAdornment position="start">
                  <Box
                    component={Icon}
                    icon={searchFill}
                    sx={{ color: 'text.disabled', width: 20, height: 20 }}
                  />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Search
            </Button>
          </SearchbarStyle>
        </Slide>
      </div>
    </form>
    </ClickAwayListener>
    </FormikProvider>
  );
}
