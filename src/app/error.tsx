'use client';

import { useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body1" paragraph>
          We&apos;re sorry for the inconvenience. Please try again later.
        </Typography>
        <Button variant="contained" onClick={reset}>
          Try again
        </Button>
      </Box>
    </Container>
  );
}