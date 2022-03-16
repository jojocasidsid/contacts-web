import React from 'react';
import Grid from '@mui/material/Grid';
import Thumbnail from 'components/Thumbnail';
import Pagination from './components/Pagination';

const ThumbnailList = () => (
  <div>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Thumbnail />
      </Grid>
      <Grid item xs={12} md={4}>
        <Thumbnail />
      </Grid>
      <Grid item xs={12} md={4}>
        <Thumbnail />
      </Grid>
      <Grid item xs={12} md={4}>
        <Thumbnail />
      </Grid>
    </Grid>
    <Pagination />
  </div>
);

export default ThumbnailList;
