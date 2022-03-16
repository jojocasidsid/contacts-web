import { Button, Typography } from '@mui/material';
import React from 'react';
import { ThumbnailWrapper, ActionWrapper, StyledImage } from './styles';

const Thumbnail = () => (
  <ThumbnailWrapper>
    <div>
      <StyledImage color="primary" />
    </div>

    <Typography variant="body">Name: Jojo Casidsid</Typography>
    <Typography variant="body">Email: jvcasidsid2013@gmail.com</Typography>
    <Typography variant="body">Phone: +639777777</Typography>

    <ActionWrapper>
      <Button variant="contained">Edit</Button>
      <Button variant="outlined">Delete</Button>
    </ActionWrapper>
  </ThumbnailWrapper>
);

export default Thumbnail;
