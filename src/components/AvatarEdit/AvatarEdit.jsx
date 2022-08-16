import PropTypes from 'prop-types';
import { Box, Avatar, Button } from '@mui/material';

const AvatarEdit = ({
  imagePreview,
  userAvatar,
  userName,
  deleteAvatar,
  loadAvatar,
}) => {
  const styleButton = {
    fontSize: '14px',
    lineHeight: '1.7',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: '8px',
        height: '120px',
      }}
    >
      <Avatar
        alt={userName}
        src={imagePreview ? imagePreview : userAvatar}
        sx={{
          width: '120px',
          height: '100%',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '100%',
        }}
      >
        <Button
          size="small"
          variant="contained"
          onClick={deleteAvatar}
          sx={{ minWidth: '0', ...styleButton }}
        >
          Delete
        </Button>
        <Button
          size="small"
          variant="contained"
          component="label"
          sx={styleButton}
        >
          Upload
          <input hidden accept="image/*" type="file" onChange={loadAvatar} />
        </Button>
      </Box>
    </Box>
  );
};

AvatarEdit.propTypes = {
  loadAvatar: PropTypes.func,
};

export default AvatarEdit;
