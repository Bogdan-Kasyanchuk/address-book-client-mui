import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { getUserName } from 'redux/auth/auth-selectors';
import * as operations from 'redux/auth/auth-operations';
import SubTitle from 'components/SubTitle/SubTitle';
import AvatarEdit from 'components/AvatarEdit';
import Form from 'components/Form';
import loadAvatarService from 'service/loadAvatarService';
import validation from 'service/validationService';
import { TITLE_FORM } from 'helpers/constants';
import { Box, Button, TextField } from '@mui/material';

const UserEdit = ({ userAvatar, closeModalEdit }) => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const [fileAvatar, setFileAvatar] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const {
    handleSubmit,
    control,
    resetField,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userName,
    },
  });

  const buttonDisabled =
    (watch('name') !== userName && watch('name') !== undefined) ||
    fileAvatar !== null;

  const loadAvatar = event => {
    loadAvatarService(event, setFileAvatar, setImagePreview);
  };

  const deleteAvatar = event => {
    event.stopPropagation();
    setImagePreview(null);
    setFileAvatar(null);
    dispatch(operations.deleteAvatarUser());
  };

  const editUser = ({ name }) => {
    dispatch(operations.updateUser({ fileAvatar, name }));
    closeModalEdit();
  };

  const closeModal = () => {
    setImagePreview(null);
    setFileAvatar(null);
    resetField('name');
    closeModalEdit();
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <SubTitle>Editing user</SubTitle>
      <AvatarEdit
        imagePreview={imagePreview}
        userAvatar={userAvatar}
        userName={userName}
        deleteAvatar={deleteAvatar}
        loadAvatar={loadAvatar}
      ></AvatarEdit>
      <Form formHundler={handleSubmit(editUser)}>
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

UserEdit.propTypes = {
  closeModalEdit: PropTypes.func,
};

export default UserEdit;
