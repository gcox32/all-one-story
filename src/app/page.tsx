import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bible Context App
        </Typography>
        <Typography variant="body1">
          Search for a book, chapter, or verse to learn more about its context in Scripture.
        </Typography>
      </Box>
    </Container>
  );
}