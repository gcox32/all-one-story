import * as React from 'react';
import ThemeRegistry from '../components/ThemeRegistry';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Box } from '@mui/material';
import './amplifyConfig';
import { Metadata } from 'next';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export const metadata: Metadata = {
  title: 'All One Story',
  description: 'Explore the Bible in context and discover how it all connects.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Navbar />
              <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
              </Box>
              <Footer />
            </Box>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}