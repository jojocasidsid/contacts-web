import React, { useState } from 'react';
import ThumbnailList from 'components/ThumbnailList';
import useListingTable from 'hooks/useListingTable';
import { useQuery } from 'react-query';
import useDebounce from 'hooks/useDebounce';
import ContactService from 'services/Contacts';
import { useNavigate } from 'react-router-dom';
import { contactsHelper } from 'helper/url';
import PromptModal from 'components/PromptModal';
import { useSnackbar } from 'notistack';

const Contacts = () => {
  const navigate = useNavigate();
  const contacts = contactsHelper();

  const { filters, setFilters } = useListingTable({
    search: '',
    itemsPerPage: 10,
    page: 0
  });

  const queryParams = useDebounce(filters, 500);

  const { isLoading, data, refetch } = useQuery(
    ['contacts', queryParams],
    () => {
      const mappedQueryParams = {
        _page: filters.page + 1,
        _limit: filters.itemsPerPage,
        q: filters.search
      };

      return ContactService.list(mappedQueryParams);
    },
    { refetchOnWindowFocus: true, refetchOnMount: true }
  );

  const [open, setOpen] = useState(false);
  const [awaitingDeleteResponse, setAwaitingDeleteResponse] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  const handleDelete = (id) => {
    setOpen(true);
    setDeleteTargetId(id);
  };

  const handleCloseModal = () => {
    if (!awaitingDeleteResponse) {
      setOpen(false);
      setDeleteTargetId(null);
    }
  };

  const { enqueueSnackbar } = useSnackbar();

  const onConfirmDelete = () => {
    setAwaitingDeleteResponse(true);
    ContactService.delete(deleteTargetId)
      .then(() => {
        setAwaitingDeleteResponse(false);
        refetch();
        handleCloseModal();
        enqueueSnackbar('Contact has been successfully deleted.', {
          variant: 'success'
        });
      })
      .catch(() => setAwaitingDeleteResponse(false));
  };

  return (
    <div>
      <PromptModal
        title="Delete Contact"
        message="Are you sure you want to delete this contact?"
        open={open}
        processing={awaitingDeleteResponse}
        handleClose={handleCloseModal}
        handleConfirm={onConfirmDelete}
        paperProps={{ sx: { width: '300px', height: '230px' } }}
      />

      <ThumbnailList
        filters={filters}
        setFilters={setFilters}
        totalPage={data?.totalCount || 0}
        data={data?.data || []}
        isLoading={isLoading}
        handleAdd={() => {
          navigate(contacts.addContacts());
        }}
        handleEdit={(id) => {
          navigate(contacts.editContacts(id));
        }}
        handleDelete={(id) => {
          handleDelete(id);
        }}
      />
    </div>
  );
};

export default Contacts;
