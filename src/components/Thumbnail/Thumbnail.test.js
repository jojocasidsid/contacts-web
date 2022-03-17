import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '@mui/material/styles';

import theme from 'config/theme/theme';

import Thumbnail from '.';

describe('Thumbnail', () => {
  it('should render without crashing', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Thumbnail
          data={{ name: 'jojo', id: 1, email: 'jvcasdisd20231@gmail.com', phone: '09057680922' }}
          handleEdit={() => {}}
          handleDelete={() => {}}
        />
      </ThemeProvider>
    );

    expect(tree).toMatchSnapshot();
  });
});
