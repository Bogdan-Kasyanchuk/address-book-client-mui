import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import * as operations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import SubTitle from 'components/SubTitle';
import AvatarEdit from 'components/AvatarEdit';
import Form from 'components/Form';
import { existContactUpdate } from 'service/existContactService';
import loadAvatarService from 'service/loadAvatarService';
import validation from 'service/validationService';
import { TITLE_FORM } from 'helpers/constants';

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

  const styleButton = {
    fontSize: '14px',
    lineHeight: '1.7',
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
      />
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
              title={TITLE_FORM.NAME}
              value={field.value}
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
              value={field.value}
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
              value={field.value}
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
              value={field.value}
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
              value={field.value}
              error={!!errors.other?.message}
              helperText={errors.other?.message}
              onChange={e => field.onChange(e)}
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
  closeModalEdit: PropTypes.func,
};

export default ContactEdit;
