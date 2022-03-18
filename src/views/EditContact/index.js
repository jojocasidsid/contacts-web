import React from 'react';
import { Typography } from '@mui/material';
import ContactForm from 'components/ContactForm';
import ContactService from 'services/Contacts';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const EditContact = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery(
    ['contacts', id],
    () => ContactService.get(id),
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      enabled: !!id
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something Went Wrong...</div>;
  }

  return (
    <div>
      <Typography variant="h1">Edit Contact</Typography>

      <ContactForm id={id} mode="Edit" data={data} refetch={refetch} />
    </div>
  );
};

export default EditContact;
