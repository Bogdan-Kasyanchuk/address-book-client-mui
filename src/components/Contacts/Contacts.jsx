import { useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';
import ContactCreate from 'components/ContactCreate';
import ContactFavorite from 'components/ContactFavorite';
import Filter from 'components/Filter';
import SubTitle from 'components/SubTitle';
import ContactsList from 'components/ContactsList';

const Contacts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Box
        sx={{
          maxWidth: '300px',
          margin: '0 auto 40px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <ContactCreate />
        <ContactFavorite
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </Box>
      <Box
        sx={{
          maxWidth: '400px',
          margin: '0 auto 40px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Filter />
      </Box>
      <SubTitle>Contacts list</SubTitle>
      <ContactsList searchParams={searchParams.get('favorite')} />
    </>
  );
};

export default Contacts;
