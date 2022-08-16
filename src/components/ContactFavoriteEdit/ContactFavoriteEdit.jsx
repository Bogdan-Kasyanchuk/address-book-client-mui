import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Checkbox } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import * as operations from 'redux/contacts/contacts-operations';

const ContactFavoriteEdit = ({ favorite, id }) => {
  const dispatch = useDispatch();

  const editFavoriteContact = ({ target }) => {
    const editedFavoriteContact = {
      id,
      favorite: target.checked,
    };
    dispatch(operations.editFavoriteContact(editedFavoriteContact));
  };

  const styleIcon = {
    width: '32px',
    height: '32px',
  };

  return (
    <Checkbox
      icon={<StarBorderIcon sx={styleIcon} />}
      checkedIcon={<StarIcon sx={styleIcon} />}
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
};

export default ContactFavoriteEdit;
