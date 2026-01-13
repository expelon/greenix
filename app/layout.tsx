import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Greenix - Kerala\'s #1 Exclusive Event Company',
  description: 'Greenix specializes in curating unforgettable experiences that blend the elegance of Kerala\'s heritage with modern innovation. From corporate events to destination weddings, we bring your vision to life.',
  keywords: ['event management', 'wedding planners', 'corporate events', 'destination weddings', 'Kerala events', 'private parties', 'beach weddings', 'music & entertainment'],
  openGraph: {
    title: 'Greenix - Kerala\'s #1 Exclusive Event Company',
    description: 'Greenix specializes in curating unforgettable experiences that blend the elegance of Kerala\'s heritage with modern innovation. From corporate events to destination weddings, we bring your vision to life.',
    url: 'https://greenix.com',
    siteName: 'Greenix',
    images: [
      {
        url: '/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Greenix Event Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greenix - Kerala\'s #1 Exclusive Event Company',
    description: 'Greenix specializes in curating unforgettable experiences that blend the elegance of Kerala\'s heritage with modern innovation. From corporate events to destination weddings, we bring your vision to life.',
    images: [
      {
        url: '/hero.webp',
        alt: 'Greenix Event Management',
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
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
