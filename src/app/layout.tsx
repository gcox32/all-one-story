import * as React from 'react';
import ThemeRegistry from '../components/ThemeRegistry';
import './amplifyConfig';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}