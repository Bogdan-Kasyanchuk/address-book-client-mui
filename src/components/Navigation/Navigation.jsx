import { NavLink as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { List, ListItem, Link } from '@mui/material';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const styleLink = {
    fontSize: '18px',
    color: 'inherit',
    textDecoration: 'none',
  };

  return (
    <List sx={{ marginRight: 'auto', display: { xs: 'none', md: 'flex' } }}>
      <ListItem>
        <Link component={RouterLink} to="/" sx={styleLink}>
          Home
        </Link>
      </ListItem>
      {isLoggedIn && (
        <ListItem>
          <Link component={RouterLink} to="/contacts" sx={styleLink}>
            Contacts
          </Link>
        </ListItem>
      )}
    </List>
  );
};

export default Navigation;
