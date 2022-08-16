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

export default SubTitle;
