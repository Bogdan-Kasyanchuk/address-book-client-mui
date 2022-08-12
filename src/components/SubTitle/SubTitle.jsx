import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const SubTitle = ({ children }) => {
  return (
    <Typography
      sx={{
        marginBottom: '20px',
        textAlign: 'center',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </Typography>
  );
};

SubTitle.propTypes = {
  children: PropTypes.node,
};

export default SubTitle;
