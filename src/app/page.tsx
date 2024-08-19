'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import { post } from 'aws-amplify/api';
import PassageDisplay from '@/components/PassageDisplay';

export default function Home() {

  interface ApiResponse {
    text?: string;
    error?: string;
  }

  const [passageContent, setPassageContent] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string, translation: string) => {
    console.log('Searching for:', query, translation);
    setReference(query);
    setIsLoading(true);

    try {
      const { body } = await post({
        apiName: 'passageAPI',
        path: '/passage',
        options: {
          body: {
            query,
            translation
          }
        }
      }).response;

      const result = await body.json() as ApiResponse;
      console.log(result);

      if (result && result.error) {
        setPassageContent(`Error: ${result.error}`);
      } else if (result && result.text) {
        setPassageContent(result.text);
      } else {
        setPassageContent('No content found for this reference.');
      }
      
    } catch (error) {
      console.error('Error fetching verse:', error);
      setPassageContent('Error fetching verse content');
    } finally {
      setIsLoading(false);
    }
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
        <PassageDisplay 
          passageContent={passageContent} 
          reference={reference} 
          isLoading={isLoading}
        />
      </Box>
    </Container>
  );
}