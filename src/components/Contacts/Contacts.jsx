import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import * as operations from 'redux/contacts/contacts-operations';
import { getCountDocuments } from 'redux/contacts/contacts-selectors';
import ContactCreate from 'components/ContactCreate';
import ContactFavorite from 'components/ContactFavorite';
import Filter from 'components/Filter';
import SubTitle from 'components/SubTitle';
import ContactsList from 'components/ContactsList';
import PaginationComp from 'components/PaginationComp';

const Contacts = () => {
  const dispatch = useDispatch();
  const { totalDocuments, limitDocuments } = useSelector(getCountDocuments);
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    favorite: '',
  });

  const count = Math.ceil(totalDocuments / limitDocuments);

  const favoriteContacts = () => {
    if (searchParams.get('favorite')) {
      setSearchParams({
        page: 1,
        favorite: '',
      });
    } else {
      setSearchParams({
        page: 1,
        favorite: true,
      });
    }
  };

  const pageContacts = (event, value) => {
    if (searchParams.get('favorite')) {
      setSearchParams({
        page: value,
        favorite: true,
      });
    } else {
      setSearchParams({
        page: value,
      });
    }
  };

  useEffect(() => {
    if (searchParams.get('favorite')) {
      dispatch(
        operations.getContact({
          page: searchParams.get('page'),
          favorite: searchParams.get('favorite'),
        }),
      );
    } else {
      dispatch(
        operations.getContact({
          page: searchParams.get('page'),
        }),
      );
    }
  }, [searchParams, dispatch]);

  const styleBox = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto 40px',
    maxWidth: '300px',
  };

  return (
    <>
      <Box sx={styleBox}>
        <ContactCreate />
        <ContactFavorite favoriteContacts={favoriteContacts} />
      </Box>
      <Box
        sx={{
          ...styleBox,
          maxWidth: '400px',
        }}
      >
        <Filter />
      </Box>
      <SubTitle>Contacts list</SubTitle>
      <ContactsList searchParams={searchParams.get('favorite')} />
      <PaginationComp
        page={Number(searchParams.get('page'))}
        handleChange={pageContacts}
        count={count ? count : 1}
      />
    </>
  );
};

export default Contacts;
