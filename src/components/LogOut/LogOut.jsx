import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserName } from 'redux/auth/auth-selectors';
import * as operations from 'redux/auth/auth-operations';
import { Box, Typography, Button } from '@mui/material';

const LogOut = ({ closeModalLogOut }) => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const logOut = () => {
    dispatch(operations.logOutUser());
    closeModalLogOut();
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
          sx={{ minWidth: '0', fontSize: '14px', lineHeight: '1.7' }}
          size="small"
          variant="contained"
          onClick={logOut}
        >
          Ok
        </Button>
        <Button
          sx={{ fontSize: '14px', lineHeight: '1.7' }}
          size="small"
          variant="contained"
          onClick={closeModalLogOut}
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
