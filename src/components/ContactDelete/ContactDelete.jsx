import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@mui/material';
import * as operations from 'redux/contacts/contacts-operations';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { filterContact } from 'redux/contacts/contacts-action';

const ContactDelete = ({ id, name, closeModalDelete }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const deleteContact = () => {
    dispatch(operations.deleteContact(id));
    if (filter) dispatch(filterContact(''));
  };

  const styleButton = {
    fontSize: '14px',
    lineHeight: '1.7',
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography sx={{ marginBottom: '20px' }}>
        Are you sure you want to delete contact "{name}"?
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button
          size="small"
          variant="contained"
          onClick={deleteContact}
          sx={{ minWidth: '0', ...styleButton }}
        >
          Ok
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={closeModalDelete}
          sx={styleButton}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

ContactDelete.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactDelete;
