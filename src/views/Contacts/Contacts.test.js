import React from 'react';
import renderer from 'react-test-renderer';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

import theme from 'config/theme/theme';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contacts from '.';

const queryClient = new QueryClient();

describe('Contacts', () => {
  it('should render without crashing', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider
            maxSnack={5}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            preventDuplicate
            autoHideDuration={5000}
          >
            <Router>
              <Routes>
                <Route path="*" element={<Contacts />} />
              </Routes>
            </Router>
          </SnackbarProvider>
        </QueryClientProvider>
      </ThemeProvider>
    );

    expect(tree).toMatchSnapshot();
  });
});
