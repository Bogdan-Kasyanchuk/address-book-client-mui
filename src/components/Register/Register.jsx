import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import * as operations from 'redux/auth/auth-operations';
import Form from 'components/Form';
import { TextField, Button } from '@mui/material';
import validation from 'service/validationService';
import { TITLE_FORM } from 'helpers/constants';

const Register = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const buttonDisabled =
    watch('name') === '' ||
    watch('email') === '' ||
    watch('password') === '' ||
    watch('name') === undefined ||
    watch('email') === undefined ||
    watch('password') === undefined;

  const registerUser = credentials => {
    dispatch(operations.registerUser(credentials));
    reset();
  };

  return (
    <Form formHundler={handleSubmit(registerUser)}>
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
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={validation.password}
        render={({ field }) => (
          <TextField
            size="small"
            fullWidth
            type="password"
            placeholder="Enter password"
            label="Password"
            variant="outlined"
            margin="normal"
            onChange={e => field.onChange(e)}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            title={TITLE_FORM.PASSWORD}
          />
        )}
      />
      <Button
        size="large"
        fullWidth
        variant="contained"
        disabled={buttonDisabled}
        type="submit"
        sx={{
          marginTop: '16px',
          paddingTop: '7px',
          paddingBottom: '7px',
        }}
      >
        Register
      </Button>
    </Form>
  );
};

export default Register;
