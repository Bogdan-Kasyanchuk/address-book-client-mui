import { Typography } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Logo = () => {
  return (
    <>
      <ContactMailIcon sx={{ marginRight: '8px' }} />
      <Typography
        variant="h6"
        noWrap
        component="h1"
        sx={{
          fontWeight: 700,
          color: 'inherit',
          letterSpacing: '.1rem',
          textDecoration: 'none',
        }}
      >
        ADDRES BOOK
      </Typography>
    </>
  );
};

export default Logo;
