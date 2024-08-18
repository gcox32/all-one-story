import * as React from 'react';
import ThemeRegistry from '../components/ThemeRegistry';
import Navbar from '../components/NavBar';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import './amplifyConfig';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <Navbar />
            {children}
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}