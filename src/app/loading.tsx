import React from 'react';
import { Container, CircularProgress, Box } from '@mui/material';

export default function Loading() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    </Container>
  );
}