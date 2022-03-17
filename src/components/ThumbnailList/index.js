import React from 'react';
import Grid from '@mui/material/Grid';
import Thumbnail from 'components/Thumbnail';
import { CircularProgress, Box, Button, Paper } from '@mui/material';
import Pagination from './components/Pagination';
import Search from './components/Search';
import { StyledBox } from './styles';

const ThumbnailList = ({
  filters,
  setFilters,
  totalPage,
  data,
  isLoading,
  handleAdd,
  handleEdit,
  handleDelete
}) => (
  <Paper sx={{ padding: '20px' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box>
        <Search
          value={filters.search}
          setValue={setFilters}
          placeholder="search"
          sx={{ flexGrow: 1 }}
        />
      </Box>
      <Box>
        <Button variant="contained" onClick={handleAdd}>
          Add Contact
        </Button>
      </Box>
    </Box>
    {!isLoading ? (
      <Grid container spacing={2}>
        {data.map((row, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Thumbnail data={row} handleEdit={handleEdit} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    ) : (
      <StyledBox sx={{ display: 'flex' }}>
        <CircularProgress color="primary" />
      </StyledBox>
    )}

    <Pagination setFilters={setFilters} filters={filters} totalPage={totalPage} />
  </Paper>
);

export default ThumbnailList;
