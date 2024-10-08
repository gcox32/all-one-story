import React from 'react';
import { Paper, Typography } from '@mui/material';
import Loading from '../app/loading';

interface PassageDisplayProps {
  passageContent: string | null;
  reference: string | null;
  translation: string ;
  isLoading: boolean;
}

const PassageDisplay: React.FC<PassageDisplayProps> = ({ passageContent, reference, translation, isLoading }) => {
  if (!passageContent && !reference && !isLoading) {
    return null;
  }

  return (
    <Paper elevation={3} sx={{ mt: 4, p: 3 , height: 250}}>
      {reference && (
        <Typography variant="h6" gutterBottom>
          {`${reference} (${translation.toUpperCase()})`}
        </Typography>
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {passageContent && (
            <Typography variant="body1">
              {passageContent}
            </Typography>
          )}
          {!passageContent && reference && (
            <Typography variant="body1">
              {reference.includes(':') 
                ? 'No passage content available for this reference.' 
                : `Showing content for ${reference}`}
            </Typography>
          )}
        </>
      )}
    </Paper>
  );
};

export default PassageDisplay;