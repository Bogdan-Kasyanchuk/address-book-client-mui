import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { List, ListItem, Link } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <List sx={{ marginRight: 'auto', display: { xs: 'none', md: 'flex' } }}>
      <ListItem>
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
      </ListItem>
      {isLoggedIn && (
        <ListItem>
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
        </ListItem>
      )}
    </List>
  );
};

export default Navigation;
