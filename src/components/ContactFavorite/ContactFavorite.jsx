import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import * as operations from 'redux/contacts/contacts-operations';

const ContactFavorite = ({ searchParams, setSearchParams }) => {
  const dispatch = useDispatch();

  const favoriteContacts = () => {
    if (searchParams.get('favorite')) {
      setSearchParams({});
    } else {
      setSearchParams({ favorite: true });
    }
  };

  useEffect(() => {
    if (searchParams.get('favorite')) {
      dispatch(operations.getContact(searchParams.get('favorite')));
    } else {
      dispatch(operations.getContact());
    }
  }, [searchParams, dispatch]);

  return (
    <Button size="medium" variant="contained" onClick={favoriteContacts}>
      Favorite
    </Button>
  );
};

ContactFavorite.propTypes = {
  searchParams: PropTypes.object,
  setSearchParams: PropTypes.func,
};

export default ContactFavorite;
