import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            About the Bible Context App
          </Typography>
          <Typography variant="body1" paragraph>
            The Bible Context App is designed to help users understand the broader context of any Bible passage they're studying. By providing historical, cultural, and literary context, we aim to enrich your Bible study experience.
          </Typography>
          <Typography variant="body1" paragraph>
            Our app allows you to:
          </Typography>
          <ul>
            <Typography component="li">Search for specific books, chapters, or verses</Typography>
            <Typography component="li">View the passage in its immediate textual context</Typography>
            <Typography component="li">Explore historical and cultural background information</Typography>
            <Typography component="li">Understand how the passage fits into the broader narrative of Scripture</Typography>
          </ul>
          <Typography variant="body1">
            Whether you're a seasoned theologian or new to Bible study, we hope this tool will deepen your understanding and appreciation of the Scriptures.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
