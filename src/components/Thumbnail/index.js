import { Button, Typography } from '@mui/material';
import React from 'react';
import { ThumbnailWrapper, ActionWrapper, StyledImage } from './styles';

const Thumbnail = ({ data, handleEdit, handleDelete }) => (
  <ThumbnailWrapper>
    <div>
      <StyledImage color="primary" />
    </div>

    <Typography variant="body">Name: {data.name}</Typography>
    <Typography variant="body">Email: {data.email}</Typography>
    <Typography variant="body">Phone: {data.phone}</Typography>

    <ActionWrapper>
      <Button variant="contained" onClick={() => handleEdit(data.id)}>
        Edit
      </Button>
      <Button variant="outlined" onClick={() => handleDelete(data.id)}>
        Delete
      </Button>
    </ActionWrapper>
  </ThumbnailWrapper>
);

export default Thumbnail;
