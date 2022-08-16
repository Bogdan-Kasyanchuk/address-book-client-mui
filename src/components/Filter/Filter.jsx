import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { filterContact } from 'redux/contacts/contacts-action';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handlerFilterContact = ({ target }) => {
    dispatch(filterContact(target.value));
  };

  const filterReset = () => {
    dispatch(filterContact(''));
  };

  return (
    <>
      <TextField
        size="small"
        autoComplete="off"
        value={filter}
        placeholder="Enter name"
        label="Find by name"
        variant="outlined"
        inputProps={{ sx: { paddingTop: '7px', paddingBottom: '6.5px' } }}
        onChange={handlerFilterContact}
        sx={{
          width: '100%',
          marginRight: '20px',
        }}
      />
      <Button
        size="medium"
        variant="contained"
        disabled={!filter}
        onClick={filterReset}
        sx={{
          minWidth: '0',
          paddingLeft: '12px',
          paddingRight: '12px',
        }}
      >
        <CleaningServicesIcon />
      </Button>
    </>
  );
};

export default Filter;
