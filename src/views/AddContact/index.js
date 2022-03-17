import React from 'react';
import { Typography } from '@mui/material';
import ContactForm from 'components/ContactForm';

const AddContact = () => (
  <div>
    <Typography variant="h1">Add Contact</Typography>
    <ContactForm mode="Add" />
  </div>
);

export default AddContact;
