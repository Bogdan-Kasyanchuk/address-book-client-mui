import { useScrollTrigger, Box, Fab, Fade } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function ButtonUP() {
  const trigger = useScrollTrigger();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        sx={{ position: 'fixed', bottom: '60px', right: '16px' }}
      >
        <Fab size="small" color="primary" aria-label="scroll back to top">
          <ArrowUpwardIcon />
        </Fab>
      </Box>
    </Fade>
  );
}
