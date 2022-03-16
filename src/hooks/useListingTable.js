import { useState, useEffect } from 'react';
import useDebounce from 'hooks/useDebounce';
import { useNavigate } from 'react-router-dom';

export default function useListingTable({ filterProps }) {
  const navigate = useNavigate();
  const [filters, setFilters] = useState(
    filterProps || {
      search: ''
    }
  );

  const debouncedFilters = useDebounce(filters, 500);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (debouncedFilters) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [debouncedFilters]);

  const [selected, setSelected] = useState([]);

  return { navigate, filters, setFilters, loading, selected, setSelected };
}
