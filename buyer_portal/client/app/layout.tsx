import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buyer Portal',
  description: 'Premium e-commerce shopping experience for buyers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
