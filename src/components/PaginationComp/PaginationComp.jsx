import { Pagination } from '@mui/material';

export default function PaginationComp({ page, count, handleChange }) {
  return (
    <Pagination
      disabled={count === 1}
      page={page}
      count={count}
      siblingCount={0}
      color="primary"
      onChange={handleChange}
      sx={{ display: 'flex', justifyContent: 'center' }}
    />
  );
}
