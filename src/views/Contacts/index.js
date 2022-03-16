import React from 'react';
import ThumbnailList from 'components/ThumbnailList';
import useListingTable from 'hooks/useListingTable';
import { useQuery } from 'react-query';
import useDebounce from 'hooks/useDebounce';
import ContactService from 'services/Contacts';

const Contacts = () => {
  const { filters, setFilters } = useListingTable({
    search: '',
    itemsPerPage: 10,
    page: 1
  });

  const queryParams = useDebounce(filters, 500);

  const { isLoading, data } = useQuery(
    ['contacts', queryParams],
    () => {
      const mappedQueryParams = {
        _page: filters.page,
        _limit: filters.itemsPerPage,
        q: filters.search
      };

      console.log(mappedQueryParams);

      return ContactService.list(mappedQueryParams);
    },
    { refetchOnWindowFocus: true, refetchOnMount: true }
  );

  console.log(data);

  return (
    <div>
      <ThumbnailList
        setFilters={setFilters}
        search={filters.search}
        page={filters.page}
        totalPage={data?.totalPage}
        data={data?.data}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Contacts;
