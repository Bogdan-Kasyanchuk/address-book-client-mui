import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { NavLink as RouterLink } from 'react-router-dom';
import { AppBar, Container, Toolbar, Box, Link } from '@mui/material';
import Logo from 'components/Logo';
import NavigationMob from 'components/NavigationMob';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';

const AppBarComp = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            component={RouterLink}
            to="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              marginRight: 4,
              alignItems: 'center',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Logo />
          </Link>
          <Navigation />
          <NavigationMob />
          <Link
            component={RouterLink}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Logo />
          </Link>
          <Box> {isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarComp;
