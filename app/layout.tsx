import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/molecules/Navbar';
import Footer from '@/components/molecules/Footer';

export const metadata: Metadata = {
  title: 'Naswa Wilantama Portofolio',
  description: 'Naswa Wilantama Personal Portofolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50  p-10">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
