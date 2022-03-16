import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';

import { StyledTextField } from './styles';

const Search = ({ label = 'Search', placeholder = 'Search', value, setValue }) => (
  <StyledTextField
    color="info"
    id="searchBar"
    label={label}
    placeholder={placeholder}
    InputLabelProps={{
      style: { color: '#303643' }
    }}
    InputProps={{
      disableUnderline: true,
      startAdornment: (
        <InputAdornment position="start">
          <img src="/assets/search.svg" alt="search" />
        </InputAdornment>
      )
    }}
    value={value}
    onChange={(event) =>
      setValue && setValue((prevState) => ({ ...prevState, search: event.target.value }))
    }
    variant="standard"
  />
);

export default Search;
