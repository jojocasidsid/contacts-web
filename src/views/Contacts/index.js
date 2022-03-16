import React from 'react';
import ThumbnailList from 'components/ThumbnailList';
import useListingTable from 'hooks/useListingTable';
import { useQuery } from 'react-query';
import useDebounce from 'hooks/useDebounce';
import ContactService from 'services/Contacts';

const Contacts = () => {
  const { filters, setFilters } = useListingTable({
    search: '',
    itemsPerPage: '10',
    page: 1
  });

  const queryParams = useDebounce(filters, 500);

  const { isLoading, data } = useQuery(
    ['contacts', queryParams],
    () => {
      const mappedQueryParams = {
        page: filters.page,
        page_limit: filters.itemsPerPage,
        search: filters.search
      };

      return ContactService.list(mappedQueryParams);
    },
    { refetchOnWindowFocus: true, refetchOnMount: true }
  );

  return (
    <div>
      <ThumbnailList />
    </div>
  );
};

export default Contacts;
