import PropTypes from 'prop-types';
import { List, ListItem, Typography } from '@mui/material';

const ContactContent = ({ element }) => {
  return (
    <List dense disablePadding>
      <ListItem disablePadding>
        <Typography color="primary" sx={{ fontWeight: '600' }}>
          Name:
          <Typography
            component="span"
            sx={{ paddingLeft: '6px', color: 'rgba(0,0,0,.87)' }}
          >
            {element.name}
          </Typography>
        </Typography>
      </ListItem>
      <ListItem disablePadding>
        <Typography color="primary" sx={{ fontWeight: '600' }}>
          Phone:
          <Typography
            component="span"
            sx={{ paddingLeft: '6px', color: 'rgba(0,0,0,.87)' }}
          >
            {element.phone}
          </Typography>
        </Typography>
      </ListItem>
      <ListItem disablePadding>
        <Typography color="primary" sx={{ fontWeight: '600' }}>
          Email:
          <Typography
            component="span"
            sx={{ paddingLeft: '6px', color: 'rgba(0,0,0,.87)' }}
          >
            {element.email}
          </Typography>
        </Typography>
      </ListItem>
      {element.address && (
        <ListItem disablePadding>
          <Typography color="primary" sx={{ fontWeight: '600' }}>
            Address:
            <Typography
              component="span"
              sx={{ paddingLeft: '6px', color: 'rgba(0,0,0,.87)' }}
            >
              {element.address}
            </Typography>
          </Typography>
        </ListItem>
      )}
      {element.other && (
        <ListItem disablePadding>
          <Typography color="primary" sx={{ fontWeight: '600' }}>
            Other:
            <Typography
              component="span"
              sx={{ paddingLeft: '6px', color: 'rgba(0,0,0,.87)' }}
            >
              {element.other}
            </Typography>
          </Typography>
        </ListItem>
      )}
    </List>
  );
};

ContactContent.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string,
    other: PropTypes.string,
  }),
};

export default ContactContent;
