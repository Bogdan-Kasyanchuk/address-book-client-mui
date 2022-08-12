import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import * as operations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import SubTitle from 'components/SubTitle/SubTitle';
import AvatarEdit from 'components/AvatarEdit';
import Form from 'components/Form';
import { existContactUpdate } from 'service/existContactService';
import loadAvatarService from 'service/loadAvatarService';
import validation from 'service/validationService';
import { TITLE_FORM } from 'helpers/constants';
import { Box, Button, TextField } from '@mui/material';

const ContactEdit = ({ element, closeModalEdit }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [fileAvatar, setFileAvatar] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: element.name,
      phone: element.phone,
      email: element.email,
      address: element.address,
      other: element.other,
    },
  });

  const buttonDisabled =
    (watch('name') !== element.name && watch('name') !== undefined) ||
    (watch('phone') !== element.phone && watch('phone') !== undefined) ||
    (watch('email') !== element.email && watch('email') !== undefined) ||
    (watch('address') !== element.address && watch('address') !== undefined) ||
    (watch('other') !== element.other && watch('other') !== undefined) ||
    fileAvatar !== null;

  const loadAvatar = event => {
    loadAvatarService(event, setFileAvatar, setImagePreview);
  };

  const deleteAvatar = event => {
    event.stopPropagation();
    setImagePreview(null);
    setFileAvatar(null);
    dispatch(operations.deleteAvatarContact(element._id));
  };

  const editContact = ({ name, phone, email, address, other }) => {
    if (existContactUpdate(element, contacts, { name, phone, email })) {
      return;
    }
    dispatch(
      operations.updateContact({
        id: element._id,
        name,
        phone,
        email,
        address,
        other,
        fileAvatar,
      }),
    );
    closeModalEdit();
  };

  const closeModal = () => {
    setImagePreview(null);
    setFileAvatar(null);
    reset();
    closeModalEdit();
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <SubTitle>Editing contact</SubTitle>
      <AvatarEdit
        imagePreview={imagePreview}
        userAvatar={element.avatarUrl}
        userName={element.name}
        deleteAvatar={deleteAvatar}
        loadAvatar={loadAvatar}
      ></AvatarEdit>
      <Form formHundler={handleSubmit(editContact)}>
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
              onChange={e => field.onChange(e)}
              error={!!errors.name?.message}
              helperText={errors.name?.message}
              title={TITLE_FORM.NAME}
              value={field.value}
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
              onChange={e => field.onChange(e)}
              error={!!errors.phone?.message}
              helperText={errors.phone?.message}
              title={TITLE_FORM.PHONE}
              value={field.value}
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
              onChange={e => field.onChange(e)}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              title={TITLE_FORM.EMAIL}
              value={field.value}
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
              onChange={e => field.onChange(e)}
              error={!!errors.address?.message}
              helperText={errors.address?.message}
              title={TITLE_FORM.ADDRES}
              value={field.value}
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
              onChange={e => field.onChange(e)}
              error={!!errors.other?.message}
              helperText={errors.other?.message}
              title={TITLE_FORM.OTHER}
              value={field.value}
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
            disabled={!buttonDisabled}
            type="submit"
            sx={{ minWidth: '0', fontSize: '14px', lineHeight: '1.7' }}
            size="small"
            variant="contained"
          >
            Ok
          </Button>
          <Button
            sx={{ fontSize: '14px', lineHeight: '1.7' }}
            size="small"
            variant="contained"
            onClick={closeModal}
          >
            Cancel
          </Button>
        </Box>
      </Form>
    </Box>
  );
};

ContactEdit.propTypes = {
  element: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string,
    other: PropTypes.string,
  }),
  closeModalDelete: PropTypes.func,
};

export default ContactEdit;
