import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink as RouterLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { Box, IconButton, Menu, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavigationMob = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        sx={{ padding: '10px 10px 10px 0', color: 'inherit' }}
      >
        <MenuIcon sx={{ width: '36px', height: '36px' }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        keepMounted
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
          marginTop: { sm: '4px' },
        }}
      >
        <MenuItem onClick={handleCloseNavMenu}>
          <Link
            component={RouterLink}
            to="/"
            sx={{
              fontSize: '18px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Home
          </Link>
        </MenuItem>
        {isLoggedIn && (
          <MenuItem onClick={handleCloseNavMenu}>
            <Link
              component={RouterLink}
              to="/contacts"
              sx={{
                fontSize: '18px',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Contacts
            </Link>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default NavigationMob;
