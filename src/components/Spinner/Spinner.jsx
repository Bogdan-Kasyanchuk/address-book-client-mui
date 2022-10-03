import { RotatingLines } from 'react-loader-spinner';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Spinner = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50vh',
        left: '50vw',
        zIndex: '5000',
        transform: 'translate(-50%, 0px)',
      }}
    >
      <RotatingLines
        strokeColor={theme.palette.primary.main}
        strokeWidth="4"
        animationDuration="1"
        width="75"
      />
    </Box>
  );
};

export default Spinner;
