import { Box, Avatar, Button } from '@mui/material';

const AvatarEdit = ({
  imagePreview,
  userAvatar,
  userName,
  deleteAvatar,
  loadAvatar,
}) => {
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
          sx={{ minWidth: '0', fontSize: '14px', lineHeight: '1.7' }}
          size="small"
          variant="contained"
          onClick={deleteAvatar}
        >
          Delete
        </Button>
        <Button
          sx={{ fontSize: '14px', lineHeight: '1.7' }}
          size="small"
          variant="contained"
          component="label"
        >
          Upload
          <input hidden accept="image/*" type="file" onChange={loadAvatar} />
        </Button>
      </Box>
    </Box>
  );
};

export default AvatarEdit;
