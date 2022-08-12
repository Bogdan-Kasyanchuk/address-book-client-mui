import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import {
  List,
  ListItem,
  Link,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import InputIcon from '@mui/icons-material/Input';

const AuthNav = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <List sx={{ display: { xs: 'none', md: 'flex' } }}>
        <ListItem>
          <Link
            component={RouterLink}
            to="/register"
            sx={{
              fontSize: '18px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Register
          </Link>
        </ListItem>
        <ListItem sx={{ padding: '8px 0 8px 16px' }}>
          <Link
            component={RouterLink}
            to="/login"
            sx={{
              fontSize: '18px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Login
          </Link>
        </ListItem>
      </List>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          sx={{ padding: '10px 0 10px 10px', color: 'inherit' }}
        >
          <InputIcon sx={{ width: '24px', height: '24px' }} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          keepMounted
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
            marginTop: { xs: '6px', sm: '10px' },
          }}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            <Link
              component={RouterLink}
              to="/register"
              sx={{
                fontSize: '18px',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Register
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <Link
              component={RouterLink}
              to="/login"
              sx={{
                fontSize: '18px',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Login
            </Link>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default AuthNav;
