import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Form = ({ formHundler, children }) => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={formHundler}
      sx={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '400px',
      }}
    >
      {children}
    </Box>
  );
};

Form.propTypes = {
  formHundler: PropTypes.func,
  children: PropTypes.node,
};

export default Form;
