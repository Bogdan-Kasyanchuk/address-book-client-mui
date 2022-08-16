import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import ContactItem from 'components/ContactItem';

const ContactsList = ({ searchParams }) => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <Grid
      container
      spacing={2}
      columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      sx={{
        justifyContent: 'center',
        marginBottom: '20px',
      }}
    >
      {filteredContacts.map(
        (element, index) =>
          (searchParams && !element.favorite) || (
            <ContactItem key={element._id} element={element} index={index} />
          ),
      )}
    </Grid>
  );
};

ContactsList.propTypes = {
  searchParams: PropTypes.any,
};

export default ContactsList;
