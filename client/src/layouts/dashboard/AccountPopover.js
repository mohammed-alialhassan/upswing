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
import { Avatar, Button, Box, Divider, MenuItem, Typography, IconButton } from '@mui/material';
// components
import { MIconButton } from '../../components/@material-extend';
import MenuPopover from '../../components/MenuPopover';
import GlobalState from '../../components/GlobalState';
// ----------------------------------------------------------------------

// Since the user won't (but still can), access the dashboard until they login/register, this is no longer necessary.
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

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MIconButton
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
        <Avatar alt="My Avatar" src="/static/mock-images/avatars/avatar_default.jpg" />
      </MIconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 220 }}>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            Xavier
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            xavier@gmail.com
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
      </MenuPopover>
    </>
  );
}
