import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import { StyledImage, StyledAppBar, StyledWrapper } from './styles';

const Main = () => (
  <div className="main-root">
    <StyledAppBar position="static" color="primary">
      <div className="main-container">
        <Toolbar disableGutters>
          <StyledImage className="image" src="https://deltek.com/favicon.ico" alt="logo" />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />

          <Box sx={{ flexGrow: 0, mr: 2 }} />

          <Box sx={{ flexGrow: 0 }} />
        </Toolbar>
      </div>
    </StyledAppBar>
    <StyledWrapper>
      <Outlet />
    </StyledWrapper>
  </div>
);

export default Main;
