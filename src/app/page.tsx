import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          One Story
        </Typography>
        <Typography variant="body1" paragraph>
          Search for a book, chapter, or verse to learn more about its context in the greater narrative of Scripture.
        </Typography>
        <Link href="/about" passHref>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </Link>
      </Box>
    </Container>
  );
}