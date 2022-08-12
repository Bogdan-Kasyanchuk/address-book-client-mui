import PropTypes from 'prop-types';
import { Modal, Box, Divider, Button } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloseIcon from '@mui/icons-material/Close';

const ModalComp = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        overflowY: 'auto',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '288px',
          maxWidth: '450px',
          backgroundColor: '#fff',
          border: '2px solid #1976d2',
          borderRadius: '4px',
          boxShadow: '0px 0px 40px 10px rgba(25, 118, 210, 0.18)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '10px',
          }}
        >
          <ContactMailIcon
            color="primary"
            sx={{
              position: 'absolute',
              top: '6px',
              left: '10px',
              width: '42px',
              height: '42px',
            }}
          />
          <Button
            onClick={handleClose}
            size="small"
            variant="contained"
            sx={{
              minWidth: '0',
              paddingLeft: '4px',
              paddingRight: '4px',
            }}
          >
            <CloseIcon />
          </Button>
        </Box>
        <Divider />
        {children}
      </Box>
    </Modal>
  );
};

ModalComp.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.node,
};

export default ModalComp;
