import PropTypes from 'prop-types';
import { Container } from '@mui/material';

const ContainerComp = ({ children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: { xs: '76px 16px 20px', sm: '84px 44px 20px' },
      }}
    >
      {children}
    </Container>
  );
};

ContainerComp.propTypes = {
  children: PropTypes.node,
};

export default ContainerComp;
