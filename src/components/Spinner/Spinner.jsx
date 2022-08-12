import { Box } from '@mui/material';
import Loader from 'react-loader-spinner';
import { useTheme } from '@mui/material/styles';

const Spinner = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50vh',
        left: '50vw',
        zIndex: '1000',
        transform: 'translate(-50%, 0px)',
      }}
    >
      <Loader
        type="Oval"
        color={theme.palette.primary.main}
        height={50}
        width={50}
      />
    </Box>
  );
};

export default Spinner;
