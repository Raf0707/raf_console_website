'use client';

import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { useToast } from "@/hooks/use-toast";

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <useToast/>
          <Header />
          <div className='max-w-7xl m-auto px-4 xl:px-0'>
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
