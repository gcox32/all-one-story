'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  TextField, 
  IconButton, 
  Paper, 
  Select, 
  MenuItem, 
  SelectChangeEvent,
  FormControl,
  Autocomplete
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { generateClient } from 'aws-amplify/api';
import { GraphQLQuery } from '@aws-amplify/api';
import { searchScriptureReferences } from '../graphql/queries';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

interface SearchBarProps {
  onSearch: (query: string, translation: string) => void;
}

interface ScriptureReference {
  id: string;
  book: string;
  chapter?: number;
  verse?: number;
  reference: string;
  referenceType: 'BOOK' | 'CHAPTER' | 'VERSE';
  searchCount: number;
  createdAt: string;
  updatedAt: string;
  __typename: string;
}

interface SearchScriptureReferencesQuery {
  searchScriptureReferences: ScriptureReference[];
}

const translations = [
  { value: 'ESV', label: 'ESV' },
  { value: 'LSV', label: 'LSV' },
  { value: 'KJV', label: 'KJV' },
];

const client = generateClient();

const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number
) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise((resolve) => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => resolve(func(...args)), waitFor);
    });
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [translation, setTranslation] = useState('ESV');
  const [options, setOptions] = useState<ScriptureReference[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchScriptureReferences = async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setOptions([]);
      return;
    }
    
    setLoading(true);
    try {
      const response = await client.graphql<GraphQLQuery<SearchScriptureReferencesQuery>>({
        query: searchScriptureReferences,
        variables: { 
          query: searchQuery,
          limit: 100
        },
        authMode: 'apiKey'
      });

      if (response.data?.searchScriptureReferences) {
        setOptions(response.data.searchScriptureReferences);
      }
    } catch (error) {
      console.error('Error fetching scripture references:', error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetch = useCallback(
    debounce(fetchScriptureReferences, 300),
    []
  );

  useEffect(() => {
    if (query) {
      debouncedFetch(query);
    } else {
      setOptions([]);
    }
  }, [query, debouncedFetch]);

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
      <Autocomplete
        freeSolo
        options={options.slice(0, 5)} // Only display top 5 results
        getOptionLabel={(option) => 
          typeof option === 'string' ? option : option.reference
        }
        renderOption={(props, option) => {
          const { key, ...otherProps } = props;
          return (
            <li key={key} {...otherProps}><strong>{option.reference}</strong></li>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ 
              ml: 1, 
              flex: 1,
              '& .MuiInput-underline:before': { borderBottomColor: 'transparent' },
              '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'primary.light' },
            }}
            placeholder="Ask, Seek, Knock..."
            variant="standard"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <span>Loading...</span> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        inputValue={query}
        onInputChange={(event, newInputValue) => {
          setQuery(newInputValue);
        }}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setQuery(newValue);
          } else if (newValue && newValue.reference) {
            setQuery(newValue.reference);
          }
        }}
        fullWidth
        loadingText="Loading..."
        loading={loading}
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