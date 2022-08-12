import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as operations from 'redux/contacts/contacts-operations';
import { getFilter } from 'redux/contacts/contacts-selectors';
import * as actions from 'redux/contacts/contacts-action';
import { Box, Typography, Button } from '@mui/material';

const ContactDelete = ({ id, name, closeModalDelete }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const deleteContact = () => {
    dispatch(operations.deleteContact(id));
    if (filter) dispatch(actions.filterContact(''));
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
          sx={{ minWidth: '0', fontSize: '14px', lineHeight: '1.7' }}
          size="small"
          variant="contained"
          onClick={deleteContact}
        >
          Ok
        </Button>
        <Button
          sx={{ fontSize: '14px', lineHeight: '1.7' }}
          size="small"
          variant="contained"
          onClick={closeModalDelete}
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
  closeModalDelete: PropTypes.func,
};

export default ContactDelete;
