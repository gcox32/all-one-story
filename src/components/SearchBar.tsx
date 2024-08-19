'use client';

import React, { useState } from 'react';
import { 
  TextField, 
  IconButton, 
  Paper, 
  Select, 
  MenuItem, 
  SelectChangeEvent,
  FormControl
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (query: string, translation: string) => void;
}

const translations = [
  { value: 'ESV', label: 'ESV' },
  { value: 'NIV', label: 'NIV' },
  { value: 'KJV', label: 'KJV' },
  // Add more translations as needed
];

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [translation, setTranslation] = useState('ESV');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, translation);
  };

  const handleTranslationChange = (event: SelectChangeEvent) => {
    setTranslation(event.target.value as string);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSearch}
      sx={{ 
        p: '2px 4px', 
        display: 'flex', 
        alignItems: 'center', 
        width: '100%', 
        maxWidth: 600,
        m: 'auto',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        borderRadius: '4px',
      }}
    >
      <TextField
        sx={{ 
          ml: 1, 
          flex: 1,
          '& .MuiInput-underline:before': { borderBottomColor: 'transparent' },
          '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'primary.light' },
        }}
        placeholder="Ask, Seek, Knock..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
      />
      <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
        <Select
          labelId="translation-select-label"
          id="translation-select"
          value={translation}
          onChange={handleTranslationChange}
          variant="standard"
          sx={{
            '&:before': { borderBottomColor: 'transparent' },
            '&:after': { borderBottomColor: 'primary.main' },
            '&:hover:not(.Mui-disabled):before': { borderBottomColor: 'primary.light' },
          }}
        >
          {translations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;