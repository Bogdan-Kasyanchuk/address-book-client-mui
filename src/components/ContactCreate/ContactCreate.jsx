import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import * as operations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import ModalComp from 'components/ModalComp';
import SubTitle from 'components/SubTitle';
import Form from 'components/Form';
import { existContactCreate } from 'service/existContactService';
import validation from 'service/validationService';
import { TITLE_FORM } from 'helpers/constants';

const ContactCreate = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const buttonDisabled =
    watch('name') === '' ||
    watch('phone') === '' ||
    watch('email') === '' ||
    watch('name') === undefined ||
    watch('phone') === undefined ||
    watch('email') === undefined;

  const createContact = contact => {
    if (existContactCreate(contacts, contact)) {
      return;
    }
    dispatch(operations.addContact(contact));
    reset();
    closeModal();
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    reset();
    setIsOpenModal(false);
  };

  const styleButton = {
    fontSize: '14px',
    lineHeight: '1.7',
  };

  return (
    <>
      <Button size="medium" variant="contained" onClick={openModal}>
        Add contact
      </Button>
      <ModalComp open={isOpenModal} handleClose={closeModal}>
        <Box sx={{ padding: '20px' }}>
          <SubTitle>Creating contact</SubTitle>
          <Form formHundler={handleSubmit(createContact)}>
            <Controller
              control={control}
              name="name"
              rules={validation.name}
              render={({ field }) => (
                <TextField
                  size="small"
                  fullWidth
                  type="text"
                  placeholder="Enter name"
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  title={TITLE_FORM.NAME}
                  error={!!errors.name?.message}
                  helperText={errors.name?.message}
                  onChange={e => field.onChange(e)}
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              rules={validation.phone}
              render={({ field }) => (
                <TextField
                  size="small"
                  fullWidth
                  type="tel"
                  placeholder="Enter phone"
                  label="Phone"
                  variant="outlined"
                  margin="normal"
                  title={TITLE_FORM.PHONE}
                  error={!!errors.phone?.message}
                  helperText={errors.phone?.message}
                  onChange={e => field.onChange(e)}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              rules={validation.email}
              render={({ field }) => (
                <TextField
                  size="small"
                  fullWidth
                  type="email"
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  title={TITLE_FORM.EMAIL}
                  error={!!errors.email?.message}
                  helperText={errors.email?.message}
                  onChange={e => field.onChange(e)}
                />
              )}
            />

            <Controller
              control={control}
              name="address"
              rules={validation.address}
              render={({ field }) => (
                <TextField
                  size="small"
                  fullWidth
                  type="text"
                  placeholder="Enter address"
                  label="Address"
                  variant="outlined"
                  margin="normal"
                  title={TITLE_FORM.ADDRES}
                  error={!!errors.address?.message}
                  helperText={errors.address?.message}
                  onChange={e => field.onChange(e)}
                />
              )}
            />
            <Controller
              control={control}
              name="other"
              rules={validation.other}
              render={({ field }) => (
                <TextField
                  size="small"
                  fullWidth
                  type="text"
                  placeholder="Enter other"
                  label="Other"
                  variant="outlined"
                  margin="normal"
                  multiline
                  maxRows={3}
                  title={TITLE_FORM.OTHER}
                  error={!!errors.other?.message}
                  helperText={errors.other?.message}
                  onChange={e => field.onChange(e)}
                />
              )}
            />
            <Controller
              control={control}
              name="favorite"
              rules={validation.other}
              render={({ field }) => (
                <FormControlLabel
                  value="start"
                  label="Favorite"
                  labelPlacement="start"
                  control={
                    <Checkbox
                      size="medium"
                      icon={<StarBorderIcon />}
                      checkedIcon={<StarIcon />}
                      sx={{
                        padding: '0px',
                      }}
                    />
                  }
                  onChange={e => field.onChange(e)}
                  sx={{
                    justifyContent: 'space-between',
                    marginTop: '10px',
                    marginLeft: '0px',
                    width: '100%',
                    color: '#828282',
                  }}
                />
              )}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '16px',
              }}
            >
              <Button
                disabled={buttonDisabled}
                type="submit"
                size="small"
                variant="contained"
                sx={{ minWidth: '0', ...styleButton }}
              >
                Ok
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={closeModal}
                sx={styleButton}
              >
                Cancel
              </Button>
            </Box>
          </Form>
        </Box>
      </ModalComp>
    </>
  );
};

export default ContactCreate;
