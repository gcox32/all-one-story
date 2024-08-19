import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

interface PassageDisplayProps {
  passageContent: string | null;
  reference: string | null;
}

const PassageDisplay: React.FC<PassageDisplayProps> = ({ passageContent, reference }) => {
  if (!passageContent && !reference) {
    return null;
  }

  return (
    <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
      {reference && (
        <Typography variant="h6" gutterBottom>
          {reference}
        </Typography>
      )}
      {passageContent && (
        <Typography variant="body1">
          {passageContent}
        </Typography>
      )}
      {!passageContent && reference && (
        <Typography variant="body1">
          {reference.includes(':') ? 'Loading passage...' : `Showing content for ${reference}`}
        </Typography>
      )}
    </Paper>
  );
};

export default PassageDisplay;