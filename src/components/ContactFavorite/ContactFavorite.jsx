import { Button } from '@mui/material';

const ContactFavorite = ({ favoriteContacts }) => {
  return (
    <Button size="medium" variant="contained" onClick={favoriteContacts}>
      Favorite
    </Button>
  );
};

export default ContactFavorite;
