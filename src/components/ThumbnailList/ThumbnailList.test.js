import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '@mui/material/styles';

import theme from 'config/theme/theme';

import ThumbnailList from '.';

const filters = {
  search: '',
  itemsPerPage: 10,
  page: 0
};

describe('Thumbnail list', () => {
  it('should render without crashing', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <ThumbnailList
          filters={filters}
          setFilters={() => {}}
          totalPage={0}
          data={[]}
          isLoading={false}
          handleAdd={() => {}}
          handleEdit={() => {}}
          handleDelete={() => {}}
        />
      </ThemeProvider>
    );

    expect(tree).toMatchSnapshot();
  });
});
