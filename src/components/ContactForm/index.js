import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button, CircularProgress, Grid, Paper } from '@mui/material';
import { useSnackbar } from 'notistack';
import MaskedInput from 'components/Input/MaskedInput';
import Input from 'components/Input';
import { useNavigate } from 'react-router-dom';
import ContactService from 'services/Contacts';

import URLHelpers from 'helper/url';
import { defaultValues as defaultFormValues, validationSchema } from './schema';

const ContactForm = ({ id, mode, data, refetch }) => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const defaultValues = data ? data.data : defaultFormValues;

  const {
    handleSubmit,
    control,

    formState: { errors }
  } = useForm({
    mode: 'onChanged',
    defaultValues,
    resolver: yupResolver(validationSchema)
  });
  const { enqueueSnackbar } = useSnackbar();

  const isAdding = mode === 'Add';

  const onSubmit = (formData) => {
    setSubmitting(true);

    const request = isAdding ? ContactService.create(formData) : ContactService.edit(id, formData);

    return request
      .then(() => {
        setSubmitting(false);
        enqueueSnackbar(
          isAdding
            ? 'Contact has been successfully added'
            : 'Contact has been successfully updated',
          { variant: 'success' }
        );
        navigate(URLHelpers.contacts);
        if (!isAdding) refetch();
      })
      .catch(() => {
        enqueueSnackbar(`Encountered an error`, { variant: 'error' });
        setSubmitting(false);
      });
  };

  return (
    <Paper sx={{ padding: '20px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={4} columnSpacing={2.5}>
          <Grid item xs={12}>
            <Input
              control={control}
              error={errors.name?.message}
              required
              fullWidth
              name="name"
              label="Name"
            />
          </Grid>

          <Grid item xs={6}>
            <MaskedInput
              mask="999-999-9999"
              maskPlaceholder="X"
              control={control}
              error={errors.phone?.message}
              fullWidth
              name="phone"
              label="Mobile No."
              startIcon="+63"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              control={control}
              error={errors.email?.message}
              required
              fullWidth
              name="email"
              label="Email Address"
            />
          </Grid>

          <Grid item container xs={12}>
            <Grid item xs={8} />
            <Grid item xs={4} container columnSpacing={1.5} justifyContent="flex-end">
              <Grid item>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => navigate(-1)}
                  disabled={submitting}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" type="submit" disabled={submitting}>
                  {submitting ? <CircularProgress size={24.5} /> : 'Save'}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ContactForm;
