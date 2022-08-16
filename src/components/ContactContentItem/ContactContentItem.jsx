import PropTypes from 'prop-types';
import { ListItem, Typography } from '@mui/material';

const ContactContentItem = ({ name, content }) => {
  return (
    <ListItem disablePadding>
      <Typography color="primary" sx={{ fontWeight: '600' }}>
        {name}
        <Typography
          component="span"
          sx={{ paddingLeft: '6px', color: 'rgba(0,0,0,.87)' }}
        >
          {content}
        </Typography>
      </Typography>
    </ListItem>
  );
};

ContactContentItem.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ContactContentItem;
