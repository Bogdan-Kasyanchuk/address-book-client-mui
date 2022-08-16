import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@mui/material';
import { getUserName } from 'redux/auth/auth-selectors';
import * as operations from 'redux/auth/auth-operations';

const LogOut = ({ closeModalLogOut }) => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const logOut = () => {
    dispatch(operations.logOutUser());
    closeModalLogOut();
  };

  const styleButton = {
    fontSize: '14px',
    lineHeight: '1.7',
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography sx={{ marginBottom: '20px' }}>
        "{userName ?? 'User'}", are you sure you want to exit?
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
          onClick={logOut}
          sx={{ minWidth: '0', ...styleButton }}
        >
          Ok
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={closeModalLogOut}
          sx={styleButton}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

LogOut.propTypes = {
  closeModalLogOut: PropTypes.func,
};

export default LogOut;
