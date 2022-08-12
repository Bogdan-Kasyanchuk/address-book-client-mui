import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box textAlign="center">
      <Typography
        sx={{
          marginBottom: '20px',
          fontSize: { xs: '50px', sm: '70px', md: '100px' },
          textTransform: 'uppercase',
        }}
      >
        Welcome!
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '30px', sm: '50px', md: '70px' },
          textTransform: 'uppercase',
        }}
      >
        This is your Addres book
      </Typography>
    </Box>
  );
};

export default Home;
