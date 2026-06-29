import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seller Portal',
  description: 'Professional seller portal for marketplace traders',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
