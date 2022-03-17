import React from 'react';
import { TablePagination } from '@mui/material';

const Pagination = ({ totalPage, filters, setFilters }) => {
  const handleChangePage = (event, newPage) => {
    setFilters({ ...filters, page: newPage });
  };

  const handleChangeRowsPerPage = (event) => {
    setFilters({ ...filters, page: 0, itemsPerPage: parseInt(event.target.value, 10) });
  };

  return (
    <TablePagination
      component="div"
      count={totalPage}
      page={filters.page}
      onPageChange={handleChangePage}
      rowsPerPage={filters.itemsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
export default Pagination;
