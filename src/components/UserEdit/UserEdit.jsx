import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { getUserName } from 'redux/auth/auth-selectors';
import * as operations from 'redux/auth/auth-operations';
import SubTitle from 'components/SubTitle';
import AvatarEdit from 'components/AvatarEdit';
import Form from 'components/Form';
import loadAvatarService from 'service/loadAvatarService';
import validation from 'service/validationService';
import { TITLE_FORM } from 'helpers/constants';

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

  const styleButton = {
    fontSize: '14px',
    lineHeight: '1.7',
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
      />
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
              title={TITLE_FORM.NAME}
              value={field.value}
              error={!!errors.name?.message}
              helperText={errors.name?.message}
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
            size="small"
            type="submit"
            variant="contained"
            disabled={!buttonDisabled}
            sx={{ minWidth: '0', ...styleButton }}
          >
            Ok
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={styleButton}
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
