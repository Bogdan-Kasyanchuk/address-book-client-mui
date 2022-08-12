import { useDispatch } from 'react-redux';
import * as operations from 'redux/contacts/contacts-operations';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const ContactFavoriteEdit = ({ favorite, id }) => {
  const dispatch = useDispatch();
  const editFavoriteContact = ({ target }) => {
    const editedFavoriteContact = {
      id,
      favorite: target.checked,
    };
    dispatch(operations.editFavoriteContact(editedFavoriteContact));
  };

  return (
    <Checkbox
      icon={
        <StarBorderIcon
          sx={{
            width: '32px',
            height: '32px',
          }}
        />
      }
      checkedIcon={
        <StarIcon
          sx={{
            width: '32px',
            height: '32px',
          }}
        />
      }
      checked={favorite}
      onChange={editFavoriteContact}
      sx={{
        padding: '0px',
      }}
    />
  );
};

ContactFavoriteEdit.propTypes = {
  id: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
};

export default ContactFavoriteEdit;
