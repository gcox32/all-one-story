'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const handleSearch = (query: string, translation: string) => {
    console.log('Searching for:', query, translation);
    // TODO: Implement actual search functionality
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          One Story
        </Typography>
        <Typography variant="body1" paragraph>
          Search for a book, chapter, or verse to learn more about its context in the greater narrative of Scripture.
        </Typography>
        <Box sx={{ my: 4 }}>
          <SearchBar onSearch={handleSearch} />
        </Box>
      </Box>
    </Container>
  );
}