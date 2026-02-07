import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from 'sonner';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thegreenix.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Event Management Company in Kerala | Greenix Experiences',
  description: 'Greenix Experiences is a leading event management company in Kerala offering corporate events, weddings, destination celebrations, and cultural experiences with seamless execution.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  keywords: ['event management', 'wedding planners', 'corporate events', 'destination weddings', 'Kerala events', 'private parties', 'beach weddings', 'music & entertainment'],
  openGraph: {
    title: 'Event Management Company in Kerala | Greenix Experiences',
    description: 'Greenix Experiences is a leading event management company in Kerala offering corporate events, weddings, destination celebrations, and cultural experiences with seamless execution.',
    url: 'https://www.thegreenix.com',
    siteName: 'Greenix',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Greenix Event Management - Kerala\'s #1 Exclusive Event Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Management Company in Kerala | Greenix Experiences',
    description: 'Greenix Experiences is a leading event management company in Kerala offering corporate events, weddings, destination celebrations, and cultural experiences with seamless execution.',
    images: [
      {
        url: '/logo.png',
        alt: 'Greenix Event Management - Kerala\'s #1 Exclusive Event Company',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-FLEWQZ4RQL" />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
