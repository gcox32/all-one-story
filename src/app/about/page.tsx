import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            About the One Story
          </Typography>
          <Typography variant="body1" paragraph>
            The Bible Context App is designed to help users understand the broader context of any Bible passage they&apos;re studying. By providing historical, cultural, and literary context, we aim to enrich your Bible study experience.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}