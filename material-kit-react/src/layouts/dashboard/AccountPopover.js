import { Icon } from '@iconify/react';
import { useRef, useState, React, useContext, useEffect, Fragment } from 'react';
import homeFill from '@iconify/icons-eva/home-fill';
import personFill from '@iconify/icons-eva/person-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';

import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
//
// import account from '../../_mocks_/account';
import GlobalState from '../../components/GlobalState';


// ----------------------------------------------------------------------

const LOGOUT_MENU_OPTIONS = [
  {
    label: 'Login',
    linkTo: '/login',
    icon: lockFill
  },
  {
    label: 'Register',
    linkTo: '/register',
    icon: personAddFill
  }
]

const LOGGEDIN_MENU_OPTIONS = [
  {
    label: 'Home',
    icon: homeFill,
    linkTo: '/'
  },
  {
    label: 'Profile',
    icon: personFill,
    linkTo: '#'
  },
  {
    label: 'Settings',
    icon: settings2Fill,
    linkTo: '#'
  }
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const [login, setLogin] = useContext(GlobalState);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  // Account Config
  const account = {
    displayName: login.username,
    email: login.email,
    photoURL: '/static/mock-images/avatars/avatar_default.jpg'
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >

        <>

        { login.email ?

          <>

          <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {LOGGEDIN_MENU_OPTIONS.map((option) => (
          <MenuItem
          key={option.label}
          to={option.linkTo}
          component={RouterLink}
          onClick={handleClose}
          sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
            component={Icon}
            icon={option.icon}
            sx={{
              mr: 2,
              width: 24,
              height: 24
            }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined">
            Logout
          </Button>
        </Box>

        </>

        :

        <>

          <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {LOGOUT_MENU_OPTIONS.map((option) => (
          <MenuItem
          key={option.label}
          to={option.linkTo}
          component={RouterLink}
          onClick={handleClose}
          sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
            component={Icon}
            icon={option.icon}
            sx={{
              mr: 2,
              width: 24,
              height: 24
            }}
            />

            {option.label}
          </MenuItem>
        ))}

        </>

      }

         </>

      </MenuPopover>
    </>
  );
}
