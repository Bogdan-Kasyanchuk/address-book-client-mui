import { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Box, Button, Avatar } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import ContactFavoriteEdit from 'components/ContactFavoriteEdit';
import ContactContent from 'components/ContactContent';
import ModalComp from 'components/ModalComp';
import ContactEdit from 'components/ContactEdit';
import ContactDelete from 'components/ContactDelete';

const ContactItem = ({ element }) => {
  const [isOpenModal, setIsOpenModal] = useState({
    edit: false,
    delete: false,
  });

  const openModalEdit = () => {
    setIsOpenModal({
      ...{
        edit: false,
        delete: false,
      },
      edit: true,
    });
  };

  const closeModalEdit = () => {
    setIsOpenModal({
      ...{
        edit: true,
        delete: false,
      },
      edit: false,
    });
  };

  const openModalDelete = () => {
    setIsOpenModal({
      ...{
        edit: false,
        delete: false,
      },
      delete: true,
    });
  };

  const closeModalDelete = () => {
    setIsOpenModal({
      ...{
        edit: false,
        delete: true,
      },
      delete: false,
    });
  };

  return (
    <>
      <Grid
        item
        xs={1}
        sx={{
          maxWidth: '360px',
        }}
      >
        <Card
          variant="outlined"
          sx={{
            position: 'relative',
            height: '100%',
            padding: '10px',
            border: '1px solid #1976d2',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '15px',
              height: '80px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <Button
                onClick={openModalEdit}
                size="small"
                variant="contained"
                sx={{
                  minWidth: '0',
                  paddingLeft: '4px',
                  paddingRight: '4px',
                }}
              >
                <EditIcon />
              </Button>
              <Button
                onClick={openModalDelete}
                size="small"
                variant="contained"
                sx={{
                  minWidth: '0',
                  paddingLeft: '4px',
                  paddingRight: '4px',
                }}
              >
                <DeleteOutlineIcon />
              </Button>
            </Box>
            <Avatar
              alt={element.name}
              src={element.avatarUrl}
              sx={{
                width: '80px',
                height: '100%',
              }}
            />
            <ContactFavoriteEdit favorite={element.favorite} id={element._id} />
          </Box>
          <ContactContent element={element} />
        </Card>
      </Grid>
      <ModalComp open={isOpenModal.edit} handleClose={closeModalEdit}>
        <ContactEdit element={element} closeModalEdit={closeModalEdit} />
      </ModalComp>
      <ModalComp open={isOpenModal.delete} handleClose={closeModalDelete}>
        <ContactDelete
          id={element._id}
          name={element.name}
          closeModalDelete={closeModalDelete}
        />
      </ModalComp>
    </>
  );
};

ContactItem.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
